package prj.project.Simon.Silvia.repository.jdbc;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import prj.project.Simon.Silvia.entity.EmployeeUser;
import prj.project.Simon.Silvia.repository.EmployeeUserRepository;
import prj.project.Simon.Silvia.repository.jdbc.mapper.EmployeeUserMapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@RequiredArgsConstructor
public class JDBCEmployeeRepository implements EmployeeUserRepository {

    public final JdbcTemplate template;


    @Override
    public List<EmployeeUser> findAll() {
        return template.query("SELECT * FROM employee_user", new EmployeeUserMapper());
    }

    @Override
    public EmployeeUser save(EmployeeUser employeeUser) {
        if (employeeUser.getId() == null) {
            employeeUser.setId(insert(employeeUser));
        } else {
            update(employeeUser);
        }
        return employeeUser;
    }

    @Override
    public Optional<EmployeeUser> findById(Integer id) {
        List<EmployeeUser> employeeUsers = template.query("SELECT * FROM employee_user WHERE id = ?", new EmployeeUserMapper(), id);
        return employeeUsers.isEmpty() ? Optional.empty() : Optional.of(employeeUsers.get(0));
    }

    @Override
    public Optional<EmployeeUser> findAuthentication(String email, String password) {
        return findAll().stream().filter(
                (EmployeeUser employeeUser) ->
                        employeeUser.getEmailAddress().equals(email) &&
                                employeeUser.getPassword().equals(password)
        ).findFirst();


    }

    @Override
    public void removeEmployee(EmployeeUser employeeUser) {
        template.update("DELETE FROM employee_user WHERE id = ?", employeeUser.getId());
    }



    private int insert(EmployeeUser employeeUser) {

        SimpleJdbcInsert insert = new SimpleJdbcInsert(template);
        insert.setTableName("employee_user");
        insert.usingGeneratedKeyColumns("id");
        Map<String, Object> map = new HashMap<>();
        map.put("first_name", employeeUser.getFirstName());
        map.put("last_name", employeeUser.getLastName());
        map.put("email_address", employeeUser.getEmailAddress());
        map.put("password", employeeUser.getPassword());



        return insert.executeAndReturnKey(map).intValue();

    }


    private void update(EmployeeUser employeeUser) {
        template.update("UPDATE employee_user SET first_name = ?, last_name = ?, email_address = ?, password = ? WHERE id = ?",
                employeeUser.getFirstName(), employeeUser.getLastName(), employeeUser.getEmailAddress(), employeeUser.getPassword(), employeeUser.getId());
    }

}
