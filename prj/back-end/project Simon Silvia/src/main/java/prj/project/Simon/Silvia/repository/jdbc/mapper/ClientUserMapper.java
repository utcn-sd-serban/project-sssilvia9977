package prj.project.Simon.Silvia.repository.jdbc.mapper;

import org.springframework.jdbc.core.RowMapper;
import prj.project.Simon.Silvia.entity.ClientUser;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ClientUserMapper implements RowMapper<ClientUser> {

    @Override
    public ClientUser mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new ClientUser(rs.getInt("id"),
                rs.getString("first_name"),
                rs.getString("last_name"),
                rs.getString("email_address"),
                rs.getString("password")
        );
    }
}


