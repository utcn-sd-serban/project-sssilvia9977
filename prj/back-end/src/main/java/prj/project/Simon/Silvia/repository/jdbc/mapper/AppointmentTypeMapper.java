package prj.project.Simon.Silvia.repository.jdbc.mapper;

import org.springframework.jdbc.core.RowMapper;
import prj.project.Simon.Silvia.entity.AppointmentType;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AppointmentTypeMapper  implements RowMapper<AppointmentType> {
    @Override
    public AppointmentType mapRow(ResultSet rs, int i) throws SQLException {
        return new AppointmentType(
                rs.getInt("id"),
                rs.getString("type_name"),
                rs.getInt("duration"),
                rs.getInt("price")
        );
    }
}
