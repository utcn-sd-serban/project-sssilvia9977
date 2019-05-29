package prj.project.Simon.Silvia.repository.jdbc.mapper;

import org.springframework.jdbc.core.RowMapper;
import prj.project.Simon.Silvia.entity.Appointment;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.ParseException;

public class AppointmentMapper  implements RowMapper<Appointment> {
    @Override
    public Appointment mapRow(ResultSet rs, int i) throws SQLException {

            return new Appointment(
                    rs.getInt("id"),
                    rs.getInt("client_user_id"),
                    rs.getInt("type_id"),
                    rs.getString("app_date"),
                    rs.getBoolean("held"),
                    rs.getInt("discount"),
                    rs.getBoolean("addedDiscount")
            );

    }
}
