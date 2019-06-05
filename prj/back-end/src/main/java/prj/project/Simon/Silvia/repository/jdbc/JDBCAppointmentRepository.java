package prj.project.Simon.Silvia.repository.jdbc;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import prj.project.Simon.Silvia.entity.Appointment;
import prj.project.Simon.Silvia.entity.ClientUser;
import prj.project.Simon.Silvia.repository.AppointmetRepository;
import prj.project.Simon.Silvia.repository.jdbc.mapper.AppointmentMapper;

import java.util.*;
import java.util.stream.Collectors;

@RequiredArgsConstructor
public class JDBCAppointmentRepository implements AppointmetRepository {
    public final JdbcTemplate template;
   // public final JDBCClientUserRepository clientUserRepository;


    @Override
    public Appointment save(Appointment appointment) {
        if (appointment.getId() == null) {
            appointment.setId(insert(appointment));
        } else {
            update(appointment);
        }
        return appointment;
    }


    @Override
    public List<Appointment> findAll() {
        {
            return template.query("SELECT * FROM appointment", new AppointmentMapper());
        }
    }

    @Override
    public List<Appointment> findAllForClient(Integer userId) {
        return findAll().stream().filter(
                (Appointment a) ->
                        a.getClientId().equals(userId)).collect(Collectors.toList());

    }


    @Override
    public List<Appointment> findAllOfType(Integer typeId) {
        return findAll().stream().filter(
                (Appointment a) ->
                        a.getTypeId().equals(typeId)).collect(Collectors.toList());
    }

    @Override
    public List<Appointment> findAllForDate(String appDate) {
        List<Appointment> findIt = findAll().stream().filter(
                (Appointment a) ->
                        a.getDateString().contains(appDate)).collect(Collectors.toList());
        return findIt;
    }

    @Override
    public Optional<Appointment> findById(Integer id) {
        List<Appointment> appointments = template.query("SELECT * FROM appointment WHERE id = ?", new AppointmentMapper(), id);
        return appointments.isEmpty() ? Optional.empty() : Optional.of(appointments.get(0));
    }


    @Override
    public void removeAppointment(Appointment appointment) {
        template.update("DELETE FROM appointment WHERE id = ?", appointment.getId());
    }


    private int insert(Appointment appointment) {

        SimpleJdbcInsert insert = new SimpleJdbcInsert(template);
        insert.setTableName("appointment");
        insert.usingGeneratedKeyColumns("id");
        Map<String, Object> map = new HashMap<>();
        map.put("client_user_id", appointment.getClientId());
        map.put("type_id", appointment.getTypeId());
        map.put("app_date", appointment.getDateString());
        map.put("held", appointment.getHeld());
        map.put("discount", appointment.getDiscount());
        map.put("addedDiscount", appointment.getAddedDiscout());

        return insert.executeAndReturnKey(map).intValue();

    }


    private void update(Appointment appointment) {
        template.update("UPDATE appointment SET client_user_id = ?, type_id = ?, app_date = ? , held = ?, discount =?, addedDiscount = ? WHERE id = ?",
                appointment.getClientId(), appointment.getTypeId(), appointment.getDateString(), appointment.getHeld(),appointment.getDiscount(), appointment.getAddedDiscout(),  appointment.getId());
    }

}
