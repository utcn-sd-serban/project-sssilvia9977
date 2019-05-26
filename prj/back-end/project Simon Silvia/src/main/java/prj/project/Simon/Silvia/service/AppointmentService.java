package prj.project.Simon.Silvia.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import prj.project.Simon.Silvia.entity.Appointment;
import prj.project.Simon.Silvia.exceptions.AppointmetNotFoundException;
import prj.project.Simon.Silvia.repository.AppointmetRepository;
import prj.project.Simon.Silvia.repository.RepositoryFactory;

import java.text.ParseException;
import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AppointmentService {
    private final RepositoryFactory repositoryFactory;

    //find all, find all for user, find id, findBy typeId, find by date, save, remove


    @Transactional
    public List<Appointment> listAllAppointments() {
        return repositoryFactory.createAppointmentRepository().findAll();
    }

    public List<Appointment> listAllAppointmentsForUser(Integer clientId) {
        return repositoryFactory.createAppointmentRepository().findAllForClient(clientId);
    }

    public List<Appointment> listAllAppointmentsForType(Integer typeId) {
        return repositoryFactory.createAppointmentRepository().findAllOfType(typeId);
    }

    public List<Appointment> listAllAppointmentsForDateDay(String date) {  // arg form: 2019-mm-dd
        List<Appointment> toFind = repositoryFactory.createAppointmentRepository().findAllForDate(date);
        return toFind;
    }

    public Optional<Appointment> findAppointmentById(Integer id) {
        return repositoryFactory.createAppointmentRepository().findById(id);
    }


    @Transactional
    public Appointment addAppointment(Appointment appointment) {
        return repositoryFactory.createAppointmentRepository().save(appointment);
    }

    @Transactional
    //can modify the date if there is more than 1 day between the due date and the current time
    public void updateDate(Integer id, String newDate) { //date of form yyyy-mm-dd hh:mm
        AppointmetRepository repository = repositoryFactory.createAppointmentRepository();
        Appointment appointment = repository.findById(id).orElseThrow(AppointmetNotFoundException::new);

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");

        LocalDate now = LocalDate.now();
        LocalDate sixDaysBehind = LocalDate.parse(appointment.getDateString(), formatter);

        Period period = Period.between(now, sixDaysBehind);
        int diffDays = period.getDays();
        int diffMonths = period.getMonths();
        int diffYears = period.getYears();


        if (diffDays > 0 || diffMonths>0 || diffYears >0) {
            appointment.setDateString(newDate);
            repository.save(appointment);
            System.out.println("Date updated");

        } else if(diffDays == 0) {
            System.out.println("Your due date is in less than 24h. You cannot change it.");
        } else if(diffDays < 0){
            System.out.println("Your due date has passed.");
        }

    }


    @Transactional
    //can modify the date if there is more than 1 day between the due date and the current time
    public void updateType(Integer id, Integer typeId) {
        AppointmetRepository repository = repositoryFactory.createAppointmentRepository();
        Appointment appointment = repository.findById(id).orElseThrow(AppointmetNotFoundException::new);

        appointment.setTypeId(typeId);
        repository.save(appointment);
        System.out.println("Type updated");


    }

    @Transactional
    //can remove the app at any time
    public void removeAppointment(Integer id) {
        AppointmetRepository repository = repositoryFactory.createAppointmentRepository();
        Appointment appointment = repository.findById(id).orElseThrow(AppointmetNotFoundException::new);
        repository.removeAppointment(appointment);

    }

    @Transactional
    public void markAsHeld(Integer id){
        //TODO: compare the dates, if teh date for the app has truly passed
        AppointmetRepository repository = repositoryFactory.createAppointmentRepository();
        Appointment appointment = repository.findById(id).orElseThrow(AppointmetNotFoundException::new);
        appointment.setHeld(true);
        repository.save(appointment);
        System.out.println("Marked!");

    }


}
