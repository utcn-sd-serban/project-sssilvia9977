package prj.project.Simon.Silvia.repository.jdbc;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import prj.project.Simon.Silvia.entity.Appointment;
import prj.project.Simon.Silvia.entity.ClientUser;
import prj.project.Simon.Silvia.repository.ClientUserRepository;
import prj.project.Simon.Silvia.repository.jdbc.mapper.ClientUserMapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RequiredArgsConstructor
public class JDBCClientUserRepository implements ClientUserRepository {

    public final JdbcTemplate template;

    @Override
    public List<ClientUser> findAll() {
        return template.query("SELECT * FROM client_user", new ClientUserMapper());
    }

    @Override
    public ClientUser save(ClientUser clientUser) {
        if (clientUser.getId() == null) {
            clientUser.setId(insert(clientUser));
        } else {
            update(clientUser);
        }
        return clientUser;
    }

    @Override
    public Optional<ClientUser> findById(Integer id) {
        List<ClientUser> clientUsers = template.query("SELECT * FROM client_user WHERE id = ?", new ClientUserMapper(), id);
        return clientUsers.isEmpty() ? Optional.empty() : Optional.of(clientUsers.get(0));
    }

    @Override
    public Optional<ClientUser> finddByEmail(String email) {
        List<ClientUser> clientUsers = template.query("SELECT * FROM client_user WHERE email_address = ?", new ClientUserMapper(), email);
        return clientUsers.isEmpty() ? Optional.empty() : Optional.of(clientUsers.get(0));
    }

    @Override
    public Optional<ClientUser> findAuthentication(String email, String password) {
        return findAll().stream().filter(
                (ClientUser clientUser) ->
                        clientUser.getEmailAddress().equals(email) &&
                                clientUser.getPassword().equals(password)
        ).findFirst();

    }



    @Override
    public void removeClient(ClientUser clientUser) {
        template.update("DELETE FROM client_user WHERE id = ?", clientUser.getId());
    }

    private int insert(ClientUser clientUser) {

        SimpleJdbcInsert insert = new SimpleJdbcInsert(template);
        insert.setTableName("client_user");
        insert.usingGeneratedKeyColumns("id");
        Map<String, Object> map = new HashMap<>();
        map.put("first_name", clientUser.getFirstName());
        map.put("last_name", clientUser.getLastName());
        map.put("email_address", clientUser.getEmailAddress());
        map.put("password", clientUser.getPassword());


        return insert.executeAndReturnKey(map).intValue();

    }


    private void update(ClientUser clientUser) {
        template.update("UPDATE client_user SET first_name = ?, last_name = ?, email_address = ?, password = ? WHERE id = ?",
                clientUser.getFirstName(), clientUser.getLastName(), clientUser.getEmailAddress(), clientUser.getPassword(), clientUser.getId());
    }

}
