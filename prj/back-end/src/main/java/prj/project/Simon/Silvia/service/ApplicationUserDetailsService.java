package prj.project.Simon.Silvia.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import prj.project.Simon.Silvia.entity.AllUsers;
import prj.project.Simon.Silvia.entity.ClientUser;
import prj.project.Simon.Silvia.entity.EmployeeUser;
import prj.project.Simon.Silvia.repository.RepositoryFactory;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Collections;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ApplicationUserDetailsService implements UserDetailsService  {



    private final RepositoryFactory repository;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        //specify concrete by using factory

        if(email.contains("pets"))
        {
            Optional<EmployeeUser> user = repository.createEmployeeRepository().findAll().stream().filter(employeeUser -> employeeUser.getEmailAddress().equals(email)).findFirst();
            if(user.isPresent())
            {
                return new User(user.get().getEmailAddress(), user.get().getPassword(),
                    Collections.singletonList(new SimpleGrantedAuthority("Role_Employee")));
            }
        }
        else
        {
            Optional<ClientUser> clientUser = repository.createClientUserRepository().finddByEmail(email);
            if(clientUser.isPresent())
            {
                return new User(clientUser.get().getEmailAddress(), clientUser.get().getPassword(),
                        Collections.singletonList(new SimpleGrantedAuthority("Role_Client")));
            }

        }
        return new User("", "",
                Collections.singletonList(new SimpleGrantedAuthority("NONE")));
        //here we could decide if the user is an admin or a regular user,la returnul de sus. Vezi min 30
    }




}
