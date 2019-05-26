/*package prj.project.Simon.Silvia.seed;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import prj.project.Simon.Silvia.entity.Appointment;
import prj.project.Simon.Silvia.entity.AppointmentType;
import prj.project.Simon.Silvia.repository.AppointmetRepository;
import prj.project.Simon.Silvia.repository.AppointmetTypeRepository;
import prj.project.Simon.Silvia.repository.RepositoryFactory;

    @Component
    @RequiredArgsConstructor
// The Order ensures that this command line runner is ran first (before the ConsoleController)
    @Order(Ordered.HIGHEST_PRECEDENCE)
    public class AppointmentTypeSeed implements CommandLineRunner {
        private final RepositoryFactory factory;

        @Override
        @Transactional
        public void run(String... args) throws Exception {
            AppointmetTypeRepository repository = factory.createAppointTypeRepository();
            if (repository.findAll().isEmpty()) {
                repository.save(new AppointmentType("Furr cut for short hair", 30, 120));  //1
                repository.save(new AppointmentType("Furr cut for long hair", 60, 190));   //2
                repository.save(new AppointmentType("Nails cut", 30, 95));                 //3
                repository.save(new AppointmentType("Nails paint", 30, 100));              //4
                repository.save(new AppointmentType("Furr wash big dog", 120, 300));       //5
                repository.save(new AppointmentType("Furr wash small dog", 60, 250));      //6
            }
        }
    }



*/