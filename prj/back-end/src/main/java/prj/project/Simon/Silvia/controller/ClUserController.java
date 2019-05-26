/*package prj.project.Simon.Silvia.controller;


        import lombok.RequiredArgsConstructor;
        import org.springframework.security.crypto.password.PasswordEncoder;
        import org.springframework.web.bind.annotation.*;
        import prj.project.Simon.Silvia.entity.AllUsers;
        import prj.project.Simon.Silvia.service.ClientUserService;

        import java.util.List;

@RestController
@RequiredArgsConstructor
public class ClUserController {
    private final ClientUserService clientUserService;
    private final CommandFactory commandFactory;

    @GetMapping("/users")
    public List<StackUser> readAll(){
        return stackUserManagementService.listStackUser();
    }

    @PostMapping("/login")
    public void login(@RequestBody AllUsers user)
    {
        AllUsers currentUser = userManagementService.findUserByEmail(user.getEmailAddress()).get();

        if(!passwordEncoder.matches(user.getPassword(), currentUser.getPassword()))
        {
            throw new StackUserNotFoundException();
        }

    }

 appointments  !!!!!!!!!!!!!!!!!!!!!!!!!!!

}
*/