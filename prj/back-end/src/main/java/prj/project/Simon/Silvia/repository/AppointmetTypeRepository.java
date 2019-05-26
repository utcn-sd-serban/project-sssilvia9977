package prj.project.Simon.Silvia.repository;

import prj.project.Simon.Silvia.entity.AppointmentType;

import java.util.List;
import java.util.Optional;

public interface AppointmetTypeRepository {

    List<AppointmentType> findAll();
    List<AppointmentType> findAllByPrice(int price);
    Optional<AppointmentType> findById(Integer id);

    AppointmentType save(AppointmentType appointmentType);

    void removeAppointmentType(AppointmentType appointmentType);



}
