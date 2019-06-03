package prj.project.Simon.Silvia.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import prj.project.Simon.Silvia.entity.Appointment;
import prj.project.Simon.Silvia.service.AppointmentService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ClAppointsController {
    private final AppointmentService appointmentService;

    @GetMapping("/appointments-cl")
    public List<Appointment> readAll(){
        return appointmentService.listAllAppointments();
    }

}
