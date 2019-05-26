/*package prj.project.Simon.Silvia.seed;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import prj.project.Simon.Silvia.entity.Appointment;
import prj.project.Simon.Silvia.entity.ClientUser;
import prj.project.Simon.Silvia.repository.AppointmetRepository;
import prj.project.Simon.Silvia.repository.ClientUserRepository;
import prj.project.Simon.Silvia.repository.RepositoryFactory;

import java.util.Date;

@Component
@RequiredArgsConstructor
// The Order ensures that this command line runner is ran first (before the ConsoleController)
@Order(Ordered.HIGHEST_PRECEDENCE)
public class AppointmentSeed implements CommandLineRunner {
    private final RepositoryFactory factory;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        AppointmetRepository repository = factory.createAppointmentRepository();
        if (repository.findAll().isEmpty()) {
            repository.save(new Appointment(1, 1, "2019-05-06 12:08:56+03"));
            repository.save(new Appointment(1, 2, "2019-05-06 12:08:56+03"));
            repository.save(new Appointment(3, 1, "2019-05-06 12:08:56+03"));

        }
    }
}
*/