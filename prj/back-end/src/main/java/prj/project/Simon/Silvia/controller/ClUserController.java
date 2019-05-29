package prj.project.Simon.Silvia.controller;


        import lombok.RequiredArgsConstructor;
        import org.springframework.security.core.userdetails.UsernameNotFoundException;
        import org.springframework.security.crypto.password.PasswordEncoder;
        import org.springframework.web.bind.annotation.*;
        import prj.project.Simon.Silvia.entity.AllUsers;
        import prj.project.Simon.Silvia.entity.ClientUser;
        import prj.project.Simon.Silvia.service.ClientUserService;

        import java.util.List;

@RestController
@RequiredArgsConstructor
public class ClUserController {
    private final ClientUserService clientUserService;
    private final PasswordEncoder passwordEncoder;


    @PostMapping("/login-client")
    public void login(@RequestBody ClientUser user) throws Exception
    {
        ClientUser currentUser = clientUserService.findClientByEmail(user.getEmailAddress()).orElseThrow(() -> new Exception("No client found"));

        if(!passwordEncoder.matches(user.getPassword(), currentUser.getPassword()))
        {
            throw new UsernameNotFoundException("Incorrect password");
        }
    }

    @PostMapping("/create-client")
    public ClientUser createClient(@RequestBody ClientUser clientUser)
    {
        clientUser.setPassword(passwordEncoder.encode(clientUser.getPassword()));
        return clientUserService.addClientUser(clientUser);
    }


 //appointments  !!!!!!!!!!!!!!!!!!!!!!!!!!!

}
