package prj.project.Simon.Silvia.repository.jdbc.mapper;

import org.springframework.jdbc.core.RowMapper;
import prj.project.Simon.Silvia.entity.AllUsers;
import java.sql.ResultSet;
import java.sql.SQLException;


public class AllUserMapper implements RowMapper<AllUsers> {

    @Override
    public AllUsers mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new AllUsers(rs.getInt("id"),
                rs.getString("first_name"),
                rs.getString("last_name"),
                rs.getString("email_address"),
                rs.getString("password")
        );
    }
}


