package prj.project.Simon.Silvia.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import prj.project.Simon.Silvia.entity.AllUsers;
import prj.project.Simon.Silvia.repository.RepositoryFactory;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class ApplicationUserDetailsService implements UserDetailsService  {



    private final RepositoryFactory repository;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        //specify concrete by using factory
        AllUsers allUsers = repository.createAllUSersRepository().finddByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Unknown User!"));
        return new User(allUsers.getEmailAddress(), allUsers.getPassword(),
                Collections.singletonList(new SimpleGrantedAuthority("Role_User")));
        //here we could decide if the user is an admin or a regular user,la returnul de sus. Vezi min 30
    }




}
