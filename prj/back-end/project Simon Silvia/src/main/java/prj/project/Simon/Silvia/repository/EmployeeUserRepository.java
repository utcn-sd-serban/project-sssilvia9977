package prj.project.Simon.Silvia.repository;

import prj.project.Simon.Silvia.entity.EmployeeUser;

import java.util.List;
import java.util.Optional;

public interface EmployeeUserRepository {

    List<EmployeeUser> findAll();
    EmployeeUser save(EmployeeUser employeeUser);
    Optional<EmployeeUser> findById(Integer id);
    Optional<EmployeeUser> findAuthentication(String email, String password);

    void removeEmployee(EmployeeUser employeeUser);


}
