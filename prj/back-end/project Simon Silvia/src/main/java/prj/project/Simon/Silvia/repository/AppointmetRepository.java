package prj.project.Simon.Silvia.repository;

import prj.project.Simon.Silvia.entity.Appointment;

import java.util.List;
import java.util.Optional;

public interface AppointmetRepository {

    //find all, find all for user, find id, findBy typeId, find by date, save, remove

    List<Appointment> findAll();
    List<Appointment> findAllForClient(Integer userId);
    List<Appointment> findAllOfType(Integer typeId);
    List<Appointment> findAllForDate(String appDate);
    Optional<Appointment> findById(Integer id);

    Appointment save(Appointment appointment);

    void removeAppointment(Appointment appointment);



}
