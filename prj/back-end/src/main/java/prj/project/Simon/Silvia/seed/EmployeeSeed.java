/*package prj.project.Simon.Silvia.seed;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import prj.project.Simon.Silvia.entity.EmployeeUser;
import prj.project.Simon.Silvia.repository.EmployeeUserRepository;
import prj.project.Simon.Silvia.repository.RepositoryFactory;

@Component
@RequiredArgsConstructor
// The Order ensures that this command line runner is ran first (before the ConsoleController)
@Order(Ordered.HIGHEST_PRECEDENCE)
public class EmployeeSeed implements CommandLineRunner {
    private final RepositoryFactory factory;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        EmployeeUserRepository repository = factory.createEmployeeRepository();
        if (repository.findAll().isEmpty()) {
            repository.save(new EmployeeUser("FE1", "LE1", "1"));
            repository.save(new EmployeeUser("FE2", "LE2", "2"));
            repository.save(new EmployeeUser("FE3", "LE3", "3"));
        }
    }
}
*/