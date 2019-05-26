/*package prj.project.Simon.Silvia.seed;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import prj.project.Simon.Silvia.entity.ClientUser;
import prj.project.Simon.Silvia.repository.ClientUserRepository;
import prj.project.Simon.Silvia.repository.RepositoryFactory;

@Component
    @RequiredArgsConstructor
// The Order ensures that this command line runner is ran first (before the ConsoleController)
    @Order(Ordered.HIGHEST_PRECEDENCE)
    public class ClientUserSeed implements CommandLineRunner {
        private final RepositoryFactory factory;

        @Override
        @Transactional
        public void run(String... args) throws Exception {
            ClientUserRepository repository = factory.createClientUserRepository();
            if (repository.findAll().isEmpty()) {
                repository.save(new ClientUser("A", "B", "A.B@example.com", "AB"));
                repository.save(new ClientUser("C", "D", "C.D@example.com", "CD"));
                repository.save(new ClientUser("E", "F", "E.F@example.com", "EF"));
            }
        }
    }




*/