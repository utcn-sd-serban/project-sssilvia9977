package prj.project.Simon.Silvia.repository.jdbc;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import prj.project.Simon.Silvia.repository.*;

@Component
@RequiredArgsConstructor
public class JDBCRepositoryFactory implements RepositoryFactory {

    private final JdbcTemplate template;


    @Override
    public ClientUserRepository createClientUserRepository() {
        return new JDBCClientUserRepository(template);
    }

    @Override
    public EmployeeUserRepository createEmployeeRepository() {
        return new JDBCEmployeeRepository(template);
    }

    @Override
    public AppointmetRepository createAppointmentRepository() {
        return new JDBCAppointmentRepository(template);
    }

    @Override
    public AppointmetTypeRepository createAppointTypeRepository() {
        return new JDBCAppointmentTypeRepository(template);
    }

    @Override
    public ReviewRepository createReviewRepository() {
        return new JDBCReviewRepository(template);
    }

    @Override
    public AllUserRepository createAllUSersRepository() {
        return new JDBCAllUsersRepository(template);
    }


}
