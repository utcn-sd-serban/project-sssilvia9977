package prj.project.Simon.Silvia.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import prj.project.Simon.Silvia.entity.EmployeeUser;
import prj.project.Simon.Silvia.exceptions.EmployeeNotFoundException;
import prj.project.Simon.Silvia.repository.EmployeeUserRepository;
import prj.project.Simon.Silvia.repository.RepositoryFactory;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmployeeUserService  {

   private final RepositoryFactory repositoryFactory;


    @Transactional
    public List<EmployeeUser> listAllEmployees(){
        return repositoryFactory.createEmployeeRepository().findAll();
    }

    public Optional<EmployeeUser> findEmployeeUserbyNameEmail(String fname, String lname, String email){
        return repositoryFactory.createEmployeeRepository().findAll().stream().filter(
                (EmployeeUser employeeUser)->
                        employeeUser.getFirstName().equals(fname) && employeeUser.getLastName().equals(lname) && employeeUser.getEmailAddress().equals(email)
        ).findFirst();
    }

    @Transactional
    public Optional<EmployeeUser> findEmployeeUserLogIn(String email, String password){
        return repositoryFactory.createEmployeeRepository().findAuthentication(email, password);

    }

    //To add a client user i insert the data from keyboard and i create a new client that i pass as arg
    @Transactional
    public EmployeeUser addEmployee(EmployeeUser employeeUser){
      //  repositoryFactory.createAllUSersRepository().save(employeeUser.toAllUser());
        return repositoryFactory.createEmployeeRepository().save(employeeUser);
    }

    //email will be changed after id so both the client and an employee can change it
    @Transactional
    public void updateEmail(Integer id, String newEmail){
        EmployeeUserRepository repository = repositoryFactory.createEmployeeRepository();
        EmployeeUser employeeUser = repository.findById(id).orElseThrow(EmployeeNotFoundException::new);
        employeeUser.setEmailAddress(newEmail);
        repository.save(employeeUser);
    }

    @Transactional
    public void removeEmployee(Integer id){
        EmployeeUserRepository repository = repositoryFactory.createEmployeeRepository();
        EmployeeUser employeeUser = repository.findById(id).orElseThrow(EmployeeNotFoundException::new);
        repository.removeEmployee(employeeUser);

    }


}
