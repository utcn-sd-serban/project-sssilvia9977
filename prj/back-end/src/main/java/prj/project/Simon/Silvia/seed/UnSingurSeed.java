package prj.project.Simon.Silvia.seed;


import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import prj.project.Simon.Silvia.entity.*;
import prj.project.Simon.Silvia.repository.*;
import prj.project.Simon.Silvia.repository.jdbc.JDBCAllUsersRepository;


@Component
@RequiredArgsConstructor
// The Order ensures that this command line runner is ran first (before the ConsoleController)
@Order(Ordered.HIGHEST_PRECEDENCE)
public class UnSingurSeed implements CommandLineRunner {

    private final RepositoryFactory factory;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void run(String... args) throws Exception {


        ClientUserRepository repository = factory.createClientUserRepository();
        if (repository.findAll().isEmpty()) {
            repository.save(new ClientUser("A", "B", "A.B@example.com", passwordEncoder.encode("AB")));
            repository.save(new ClientUser("C", "D", "C.D@example.com", passwordEncoder.encode("CD")));
            repository.save(new ClientUser("E", "F", "E.F@example.com", passwordEncoder.encode("EF")));
        }



        EmployeeUserRepository emplRepository = factory.createEmployeeRepository();
        if (emplRepository.findAll().isEmpty()) {
            emplRepository.save(new EmployeeUser("FE1", "LE1", passwordEncoder.encode("1")));
            emplRepository.save(new EmployeeUser("FE2", "LE2", passwordEncoder.encode("2")));
            emplRepository.save(new EmployeeUser("FE3", "LE3", passwordEncoder.encode("3")));
        }


       AllUserRepository allUserRepository = factory.createAllUSersRepository();
        if (allUserRepository.findAll().isEmpty()) {
            allUserRepository.save(new AllUsers("FE1", "LE1", passwordEncoder.encode("1")));
            allUserRepository.save(new AllUsers("FE2", "LE2", passwordEncoder.encode("2")));
            allUserRepository.save(new AllUsers("FE3", "LE3", passwordEncoder.encode("3")));
            allUserRepository.save(new AllUsers("A", "B", "A.B@example.com", passwordEncoder.encode("AB")));
            allUserRepository.save(new AllUsers("C", "D", "C.D@example.com", passwordEncoder.encode("CD")));
            allUserRepository.save(new AllUsers("E", "F", "E.F@example.com", passwordEncoder.encode("EF")));
        }


        AppointmetTypeRepository appTyperepository = factory.createAppointTypeRepository();
        if (appTyperepository.findAll().isEmpty()) {
            appTyperepository.save(new AppointmentType("Furr cut for short hair", 30, 120));  //1
            appTyperepository.save(new AppointmentType("Furr cut for long hair", 60, 190));   //2
            appTyperepository.save(new AppointmentType("Nails cut", 30, 95));                 //3
            appTyperepository.save(new AppointmentType("Nails paint", 30, 100));              //4
            appTyperepository.save(new AppointmentType("Furr wash big dog", 120, 300));       //5
            appTyperepository.save(new AppointmentType("Furr wash small dog", 60, 250));      //6
        }

      AppointmetRepository appRepository = factory.createAppointmentRepository();
        if (appRepository.findAll().isEmpty()) {
            appRepository.save(new Appointment(1, 1, "2019-05-06 12:08:56+03"));
            appRepository.save(new Appointment(1, 2, "2019-05-06 12:08:56+03"));
            appRepository.save(new Appointment(3, 1, "2019-05-06 12:08:56+03"));

        }


    }
}



/*
Insert into client_user (first_name,last_name, email_address, password ) values ('A', 'B', 'A.B@example.com', 'AB');
insert into client_user (first_name,last_name ,email_address, password) values ('C', 'D', 'C.D@example.com', 'CD');

Insert into employee_user (first_name,last_name,email_address, password ) values ('FE1', 'LE1','FE1.LE1@pets.com', '1');
Insert into employee_user (first_name,last_name,email_address ,password ) values ('FE2', 'LE2','FE2.LE2@pets.com','2');

Insert into all_users (first_name,last_name, email_address, password ) values ('A', 'B', 'A.B@example.com', 'AB');
insert into all_users (first_name,last_name ,email_address, password) values ('C', 'D', 'C.D@example.com', 'CD');
Insert into all_users (first_name,last_name,email_address, password ) values ('FE1', 'LE1','FE1.LE1@pets.com', '1');
Insert into all_users (first_name,last_name,email_address ,password ) values ('FE2', 'LE2','FE2.LE2@pets.com','2');


Insert into appointment_type (type_name, duration, price) values ('Furr cut for short hair', 30, 120);
Insert into appointment_type (type_name, duration, price) values ('Furr cut for long hair', 60, 190);
Insert into appointment_type (type_name, duration, price) values ('Nails cut', 30, 95);
Insert into appointment_type (type_name, duration, price) values ('Nails paint', 30, 100);

Insert into appointment (client_user_id,type_id, app_date, held ) values (1, 1, '2019-05-06 12:08', TRUE );
Insert into appointment (client_user_id,type_id, app_date, held ) values (1, 2, '2019-05-06 12:08', FALSE);
Insert into appointment (client_user_id,type_id, app_date, held ) values (2, 2, '2019-05-06 12:08', FALSE);

insert into review (client_user_id, text) values (1, 'Best place for my dog!');
insert into review (client_user_id, text) values (1, 'I will come back again!');
insert into review (client_user_id, text) values (2, 'Meh!');
 */