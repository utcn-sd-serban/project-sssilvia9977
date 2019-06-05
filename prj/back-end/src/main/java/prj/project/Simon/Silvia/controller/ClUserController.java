package prj.project.Simon.Silvia.controller;


        import lombok.RequiredArgsConstructor;
        import org.springframework.security.core.userdetails.UsernameNotFoundException;
        import org.springframework.security.crypto.password.PasswordEncoder;
        import org.springframework.web.bind.annotation.*;
        import prj.project.Simon.Silvia.entity.*;
        import prj.project.Simon.Silvia.service.AppointmentService;
        import prj.project.Simon.Silvia.service.ClientUserService;
        import prj.project.Simon.Silvia.service.EmployeeUserService;
        import prj.project.Simon.Silvia.service.ReviewService;

        import java.util.List;
        import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class ClUserController {
    private final ClientUserService clientUserService;
    private final EmployeeUserService employeeUserService;
    private final ReviewService reviewService;
    private final PasswordEncoder passwordEncoder;


    @GetMapping("/clients-empls")
    public List<ClientUser> readAll(){
        return clientUserService.listAllClientUser();
    }



    @GetMapping("/reviews-cl/{username}")
    public List<Review> readAll(@PathVariable String username){
        ClientUser clientUser = clientUserService.findClientByEmail(username).get();
        return reviewService.listAllReviewsForUser(clientUser.getId());
    }


    @PostMapping("/create-review")
    public void createReview(@RequestBody Review review)
    {
        Review x = reviewService.addReview(review);
        System.out.println(5);

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




    @GetMapping("/get-id/{email}")
    public int getIdUser(@PathVariable String email){
        if(clientUserService.findClientByEmail(email).isPresent()){
           return clientUserService.findClientByEmail(email).get().getId();
        }
        else{
            return -1;
        }

    }


    @DeleteMapping("/delete-cl/{id}")
    public void delCl(@PathVariable int id){
        clientUserService.removeClientUser(id);
    }


}
