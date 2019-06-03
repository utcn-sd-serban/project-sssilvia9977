package prj.project.Simon.Silvia.controller;


        import lombok.RequiredArgsConstructor;
        import org.springframework.security.core.userdetails.UsernameNotFoundException;
        import org.springframework.security.crypto.password.PasswordEncoder;
        import org.springframework.web.bind.annotation.*;
        import prj.project.Simon.Silvia.entity.AllUsers;
        import prj.project.Simon.Silvia.entity.ClientUser;
        import prj.project.Simon.Silvia.entity.EmployeeUser;
        import prj.project.Simon.Silvia.service.ClientUserService;
        import prj.project.Simon.Silvia.service.EmployeeUserService;

        import java.util.List;
        import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class ClUserController {
    private final ClientUserService clientUserService;
    private final EmployeeUserService employeeUserService;
    private final PasswordEncoder passwordEncoder;


    @GetMapping("/clients-empls")
    public List<ClientUser> readAll(){
        return clientUserService.listAllClientUser();
    }



    @PostMapping("/login-client")
    public void login(@RequestBody ClientUser user) throws Exception
    {
        Optional<ClientUser> currentUser = clientUserService.findClientByEmail(user.getEmailAddress());
        if(!currentUser.isPresent())
        {
            EmployeeUser employeeUser = employeeUserService.listAllEmployees().stream().filter(employeeUser1 -> employeeUser1.getEmailAddress().equals(user.getEmailAddress())).findFirst().orElseThrow(() -> new Exception("Employee not found"));
            if(!passwordEncoder.matches(user.getPassword(), employeeUser.getPassword()))
            {
                throw new UsernameNotFoundException("Incorrect password");
            }
        }
        else
        {
            if(!passwordEncoder.matches(user.getPassword(), currentUser.get().getPassword()))
            {
                throw new UsernameNotFoundException("Incorrect password");
            }
        }



    }

    @PostMapping("/create-client")
    public ClientUser createClient(@RequestBody ClientUser clientUser)
    {
        clientUser.setPassword(passwordEncoder.encode(clientUser.getPassword()));
        return clientUserService.addClientUser(clientUser);
    }


    @PostMapping("/create-empl")
    public EmployeeUser createEmpl(@RequestBody EmployeeUser employeeUser)
    {
        employeeUser.setPassword(passwordEncoder.encode(employeeUser.getPassword()));
        return employeeUserService.addEmployee(employeeUser);
    }







}
