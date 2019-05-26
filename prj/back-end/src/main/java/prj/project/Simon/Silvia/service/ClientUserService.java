package prj.project.Simon.Silvia.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import prj.project.Simon.Silvia.entity.ClientUser;
import prj.project.Simon.Silvia.exceptions.ClientUserNotFoundException;
import prj.project.Simon.Silvia.repository.ClientUserRepository;
import prj.project.Simon.Silvia.repository.RepositoryFactory;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ClientUserService {
    private final RepositoryFactory repositoryFactory;

    @Transactional
    public List<ClientUser> listAllClientUser(){
        return repositoryFactory.createClientUserRepository().findAll();
    }

    public Optional<ClientUser> findClientUserbyNameEmail(String fname, String lname, String email){
        return repositoryFactory.createClientUserRepository().findAll().stream().filter(
                (ClientUser client)->
                        client.getFirstName().equals(fname) && client.getLastName().equals(lname) && client.getEmailAddress().equals(email)
        ).findFirst();
    }

    public Optional<ClientUser> findClientUserLogIn(String email, String password){
        return repositoryFactory.createClientUserRepository().findAuthentication(email, password);

    }

    //To add a client user i insert the data from keyboard and i create a new client that i pass as arg
    @Transactional
    public ClientUser addClientUser(ClientUser clientUser){
        repositoryFactory.createAllUSersRepository().save(clientUser.toAllUser());
        return repositoryFactory.createClientUserRepository().save(clientUser);
    }

    //email will be changed after id so both the client and an employee can change it
    @Transactional
    public void updateEmail(Integer id, String newEmail){
        ClientUserRepository repository = repositoryFactory.createClientUserRepository();
        ClientUser clientUser = repository.findById(id).orElseThrow(ClientUserNotFoundException::new);
        clientUser.setEmailAddress(newEmail);
        repository.save(clientUser);
    }

    @Transactional
    public void removeClientUser(Integer id){
        ClientUserRepository repository = repositoryFactory.createClientUserRepository();
        ClientUser clientUser = repository.findById(id).orElseThrow(ClientUserNotFoundException::new);
        repository.removeClient(clientUser);

    }



}
