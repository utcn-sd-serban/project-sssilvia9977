package prj.project.Simon.Silvia.repository;

import org.springframework.stereotype.Component;
import prj.project.Simon.Silvia.entity.ClientUser;

@Component
public interface RepositoryFactory {

    ClientUserRepository createClientUserRepository();

    EmployeeUserRepository createEmployeeRepository();

    AppointmetRepository createAppointmentRepository();

    AppointmetTypeRepository createAppointTypeRepository();

    ReviewRepository createReviewRepository();

    AllUserRepository createAllUSersRepository();

}
