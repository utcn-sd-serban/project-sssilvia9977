package prj.project.Simon.Silvia.repository;

import prj.project.Simon.Silvia.entity.ClientUser;

import java.util.List;
import java.util.Optional;

public interface ClientUserRepository {

//find all find by id find by fname&lname find by email remove add si find pt autentificare

    //TODO: find by progamare poate
    //TODO: Optional<ClientUser> findbyName(String firstName, String lastName);


    List<ClientUser> findAll();
    ClientUser save(ClientUser clientUser);
    Optional<ClientUser> findById(Integer id);
    Optional<ClientUser> finddByEmail(String email);
    Optional<ClientUser> findAuthentication(String email, String password);

    void removeClient(ClientUser clientUser);


}
