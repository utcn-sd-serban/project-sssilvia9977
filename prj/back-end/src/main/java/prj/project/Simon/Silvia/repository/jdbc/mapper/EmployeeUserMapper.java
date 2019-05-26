

package prj.project.Simon.Silvia.repository.jdbc.mapper;

import org.springframework.jdbc.core.RowMapper;
import prj.project.Simon.Silvia.entity.EmployeeUser;

import java.sql.ResultSet;
import java.sql.SQLException;

public class EmployeeUserMapper implements RowMapper<EmployeeUser> {

    @Override
    public EmployeeUser mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new EmployeeUser(rs.getInt("id"),
                rs.getString("first_name"),
                rs.getString("last_name"),
                rs.getString("email_address"),
                rs.getString("password")
        );
    }
}




