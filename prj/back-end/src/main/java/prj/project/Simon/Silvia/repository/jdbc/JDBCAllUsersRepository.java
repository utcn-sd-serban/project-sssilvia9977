package prj.project.Simon.Silvia.repository.jdbc;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import prj.project.Simon.Silvia.entity.AllUsers;
import prj.project.Simon.Silvia.entity.AppointmentType;
import prj.project.Simon.Silvia.repository.AllUserRepository;
import prj.project.Simon.Silvia.repository.jdbc.mapper.AllUserMapper;
import prj.project.Simon.Silvia.repository.jdbc.mapper.AppointmentTypeMapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RequiredArgsConstructor
public class JDBCAllUsersRepository implements AllUserRepository {
    public final JdbcTemplate template;

    @Override
    public AllUsers save(AllUsers allUsers) {
        if (allUsers.getId() == null) {
            allUsers.setId(insert(allUsers));
        } else {
            update(allUsers);
        }
        return allUsers;
    }


    public List<AllUsers> findAll() {
        return template.query("SELECT * FROM all_users", new AllUserMapper());
    }


    @Override
    public Optional<AllUsers> finddByEmail(String email) {
        List<AllUsers> allUsers = template.query("SELECT * FROM all_users WHERE _address = ?", new AllUserMapper(), email);
        return allUsers.isEmpty() ? Optional.empty() : Optional.of(allUsers.get(0));
    }



    private int insert(AllUsers allUsers) {

        SimpleJdbcInsert insert = new SimpleJdbcInsert(template);

        insert.setTableName("all_users");
        insert.usingGeneratedKeyColumns("id");
        Map<String, Object> mapAll = new HashMap<>();
        mapAll.put("first_name", allUsers.getFirstName());
        mapAll.put("last_name", allUsers.getLastName());
        mapAll.put("email_address", allUsers.getEmailAddress());
        mapAll.put("password", allUsers.getPassword());


        return insert.executeAndReturnKey(mapAll).intValue();

    }


    private void update(AllUsers allUsers) {
        template.update("UPDATE all_users SET first_name = ?, last_name = ?, email_address = ?, password = ? WHERE id = ?",
                allUsers.getFirstName(), allUsers.getLastName(), allUsers.getEmailAddress(), allUsers.getPassword(), allUsers.getId());
    }



}
