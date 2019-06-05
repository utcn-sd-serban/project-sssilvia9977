package prj.project.Simon.Silvia.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import prj.project.Simon.Silvia.entity.Appointment;
import prj.project.Simon.Silvia.service.AppointmentService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ClAppointsController {
    private final AppointmentService appointmentService;

   @GetMapping("/appointments-cl/{username}")
    public List<Appointment> readAll(@PathVariable String username){
        return appointmentService.listAllAppointmentsForUserByEmail(username);
    }

    @PutMapping ("/mark-appointment")
    public void markAppAsHEld(@RequestBody Appointment appointment)
    {
         appointmentService.markAsHeld(appointment.getId());

    }



    @PostMapping("/create-appointment")
    public Appointment createAppoint(@RequestBody Appointment appointment)
    {
        return appointmentService.addAppointment(appointment, false);

    }




}
