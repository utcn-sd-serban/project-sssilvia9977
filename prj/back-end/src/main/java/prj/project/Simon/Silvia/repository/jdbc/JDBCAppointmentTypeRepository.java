package prj.project.Simon.Silvia.repository.jdbc;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import prj.project.Simon.Silvia.entity.Appointment;
import prj.project.Simon.Silvia.entity.AppointmentType;
import prj.project.Simon.Silvia.repository.AppointmetTypeRepository;
import prj.project.Simon.Silvia.repository.jdbc.mapper.AppointmentTypeMapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
public class JDBCAppointmentTypeRepository implements AppointmetTypeRepository {

    private final JdbcTemplate template;

    @Override
    public List<AppointmentType> findAll() {
        return template.query("SELECT * FROM appointment_type", new AppointmentTypeMapper());
    }

    @Override
    public List<AppointmentType> findAllByPrice(int price) {
        return findAll().stream().filter(
                (AppointmentType a) ->
                        a.getPrice() == price
        ).collect(Collectors.toList());
    }

    @Override
    public Optional<AppointmentType> findById(Integer id) {
        List<AppointmentType> appointmentsType = template.query("SELECT * FROM appointment_type WHERE id = ?", new AppointmentTypeMapper(), id);
        return appointmentsType.isEmpty() ? Optional.empty() : Optional.of(appointmentsType.get(0));
    }

    @Override
    public AppointmentType save(AppointmentType appointmentType) {
        if (appointmentType.getId() == null) {
            appointmentType.setId(insert(appointmentType));
        } else {
            update(appointmentType);
        }
        return appointmentType;
    }

    @Override
    public void removeAppointmentType(AppointmentType appointmentType) {
        template.update("DELETE FROM appointment_type WHERE id = ?", appointmentType.getId());
    }



    private int insert(AppointmentType appointment) {

        SimpleJdbcInsert insert = new SimpleJdbcInsert(template);
        insert.setTableName("appointment_type");
        insert.usingGeneratedKeyColumns("id");
        Map<String, Object> map = new HashMap<>();
        map.put("type_name", appointment.getName());
        map.put("duration", appointment.getDuration());
        map.put("price", appointment.getPrice());
        return insert.executeAndReturnKey(map).intValue();

    }


    private void update(AppointmentType appointment) {
        template.update("UPDATE appointment_type SET type_name = ?, duration = ?, price = ? WHERE id = ?",
                appointment.getName(), appointment.getDuration(), appointment.getPrice(),  appointment.getId());
    }
}
