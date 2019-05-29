/*package prj.project.Simon.Silvia.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import prj.project.Simon.Silvia.entity.*;
import prj.project.Simon.Silvia.exceptions.ClientUserNotFoundException;
import prj.project.Simon.Silvia.exceptions.EmployeeNotFoundException;
import prj.project.Simon.Silvia.service.*;


import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.text.ParseException;
import java.util.List;
import java.util.Scanner;

@Component
@RequiredArgsConstructor
public class ConsoleController implements CommandLineRunner {
    @Override
    public void run(String... args) throws Exception {

    }/*

    private final Scanner scanner = new Scanner(System.in);
    private ClientUser clientUser;

    private final ClientUserService clientUserService;
    private final EmployeeUserService employeeUserService;
    private final AppointmentService appointmentService;
    private final AppointmentTypeService appointmentTypeService;
    private final ReviewService reviewService;

    PrintWriter writer;

    @Override
    public void run(String... args) throws Exception {

        String action = "";
        System.out.println("Please log in");
        int typeOfUser = handleLogIn();
        boolean done;
        if(typeOfUser == 0){
            done = true;
        }else {
            done = false;
        }

        while (!done) {
            System.out.println("Enter a command: ");
            String command = "";
            while(command == ""){
                command = scanner.nextLine().trim();
            }
            switch (typeOfUser){
                case 1: //a client has access only to his account and appointments
                    try { done = handleCommandClientUser(command); }
                    catch (ClientUserNotFoundException clientUserNotFoundException) {
                        System.out.println("The client was not found!"); }
                    break;
                case 2:  //junt employee can manevrate the accounts of users
                    try { done = handleCommandEmployeeUser(command); }
                    catch (EmployeeNotFoundException employeeNotFoundException) {
                        System.out.println("The employee was not found!"); }
                    break;
                case 0: //if there is no such client or empl
                    System.out.println("case 0");
                    done = true;
                    break;
                default:
                    System.out.println("Wrong type");
                    return;

            }


        }


    }


    private boolean handleCommandClientUser(String command) throws ParseException {

        switch (command) {
            case "update email":
                handleClientUserUpdateEmail();
                return false;
            case "list app":
                handleAppointmentListForSpecificUser();
                return false;
            case "add app":
                handleAppointmentAdd();
                return false;
            case "update app date":
                handleAppointmentDateUpdate();
                return false;
            case "update app type":
                handleAppointmentTypeUpdate();
                return false;
            case "remove app":
                handleAppointmentRemoveFromClient();
                return false;
            case "list review":
                handleListReviewForClient();
                return false;
            case "add review":
                handleAddReviewForClient();
                return false;
            case "update review":
                handleUpdateReviewFomClient();
                return false;
            case "remove review":
                handleReviewRemoveFromClient();
                return false;
            case "exit":
                return true;
            default:
                System.out.println("Unknown command user handle. Try again.");
                return false;
        }
    }

    private boolean handleCommandEmployeeUser(String command) throws FileNotFoundException, UnsupportedEncodingException {

        switch (command) {
            case "list client":
                handleClientUserList();
                return false;
            case "add client":
                handleClientUserAdd();
                return false;
            case "update email client":
                handleClientUserUpdateEmail();
                return false;
            case "remove client":
                handleClientUserRemove();
                return false;
            case "list employee":
                handleEmployeeUserList();
                return false;
            case "add employee":
                handleEmployeeUserAdd();
                return false;
            case "update email employee":
                handleEmployeeUserUpdateEmail();
                return false;
            case "remove employee":
                handleEmployeeUserRemove();
                return false;
            case "list app":
                handleAppointmentsList();
                return false;
            case "list app date txt":
                handleAppListDateTxt();
                return false;
            case "mark app":
                handleMarkAppASHeld();
                return false;
            case "remove review":
                handleReviewRemove();
                return false;
            case "list review":
                handleReviewsList();
                return false;
            case "exit":
                return true;
            default:
                System.out.println("Unknown command user handle. Try again.");
                return false;
        }
    }

    //0 exit, 1 client, 2 employee
    private int handleLogIn() {
        System.out.print("Email: ");
        String email = scanner.nextLine().trim();
        System.out.print("Password: ");
        String password = scanner.nextLine().trim();

        //the difference between client and employee is the email address. Employee@pets.com
        if (email.contains("@pets.com")) {
            if (employeeUserService.findEmployeeUserLogIn(email, password).isPresent()) {
                System.out.println("Welcome " + employeeUserService.findEmployeeUserLogIn(email, password).get().getFirstName() + "!");
            } else{
                System.out.println("No such Employee User");
            }
            return 2;
        } else {
            if (clientUserService.findClientUserLogIn(email, password).isPresent()) {
                System.out.println("Welcome " + clientUserService.findClientUserLogIn(email, password).get().getFirstName() + "!");
                clientUser = clientUserService.findClientUserLogIn(email, password).get();
                return 1;
            } else {
                System.out.println("No such client User");
                return 0;
            }
        }


    }

    public void handleReviewRemove(){
        handleReviewsList();
        System.out.println("Enter id of the rev you want to delete: ");
        int id = scanner.nextInt();
        reviewService.removeReview(id);
    }

    public void handleReviewsList(){
        reviewService.listAllReviews().forEach(s-> System.out.println(s.toString()));
    }

    public void handleAddReviewForClient(){

        System.out.println("Enter the text:");
        String text = scanner.nextLine();

        Review review = new Review(clientUser.getId(), text);
        Review re = reviewService.addReview(review);
        System.out.println("Added.");

    }

    public void handleUpdateReviewFomClient(){

        System.out.println("Enter id of the rev you want to update");
        int idRe = scanner.nextInt();
        System.out.println("Enter the new text");
        String text1 = scanner.nextLine().trim();
        String text2 = scanner.nextLine().trim();


        reviewService.updateText(idRe, text1+" "+text2);

    }

    public void handleReviewRemoveFromClient(){
        handleListReviewForClient();
        System.out.println("Enter id of the rev you want to delete: ");
        int id = scanner.nextInt();
        reviewService.removeReview(id);


    }

    public void handleListReviewForClient(){
        reviewService.listAllReviewsForUser(clientUser.getId()).forEach(s-> System.out.println(s.toString()));
    }

    public void handleAppointmentListForSpecificUser(){
        appointmentService.listAllAppointments().stream().filter(
                (Appointment a) ->
                        a.getClientId().equals(clientUser.getId())
        ).forEach(s-> System.out.println(s.toString()));
    }

    public void handleAppointmentsList(){
        appointmentService.listAllAppointments().forEach(s-> System.out.println(s.toString()));
    }


    public void handleAppListDateTxt() throws FileNotFoundException, UnsupportedEncodingException {

        writer = new PrintWriter("appDate.txt");

        System.out.println("Enter the day to see all the app yyyy-mm-dd");
        String dateToFind = scanner.nextLine().trim();
        List<Appointment> findIt =  appointmentService.listAllAppointmentsForDateDay(dateToFind);
        findIt.forEach(s-> writer.println(s.toString()));
        if(findIt.size() == 0){
           writer.println("No app.");
        }
        System.out.println("Done. See file");
        writer.close();
    }



    public void handleAppointmentAdd() {
        System.out.println("You have " + appointmentService.calculatePoints(clientUser.getId()) + " points. Do you want to use them? [y/n]");
        String usePointClientDecide = scanner.next();
        if(usePointClientDecide.equals("y")){
            System.out.println("Choose type of appointment:");
            appointmentTypeService.listAllAppointmentsTypes().forEach(s-> System.out.println(s.toString()));

            int typeId = scanner.nextInt();
            System.out.println("Enter date in format like yyy-mm-dd hh:mm :");
            String newDateDay = scanner.next().trim();
            String newDateHour = scanner.nextLine().trim();

            Appointment newApp = new Appointment(clientUser.getId(), typeId, newDateDay+" "+newDateHour);
            Appointment appointment = appointmentService.addAppointment(newApp, true);
            System.out.println("Created Appointment: " + appointment + ".");
        }
        else{
            System.out.println("Choose type of appointment:");
            appointmentTypeService.listAllAppointmentsTypes().forEach(s-> System.out.println(s.toString()));

            int typeId = scanner.nextInt();
            System.out.println("Enter date in format like yyy-mm-dd hh:mm :");
            String newDateDay = scanner.next().trim();
            String newDateHour = scanner.nextLine().trim();

            Appointment newApp = new Appointment(clientUser.getId(), typeId, newDateDay+" "+newDateHour);
            Appointment appointment = appointmentService.addAppointment(newApp, false);
            System.out.println("Created Appointment: " + appointment + ".");
        }

    }

    private void handleEmployeeUserList() {
        employeeUserService.listAllEmployees().forEach(s -> System.out.println(s.toString()));
    }

    public void handleAppointmentDateUpdate()  {
        System.out.println("App ID:");
        int id = scanner.nextInt();
        System.out.println("Enter new date in format yyy-mm-dd hh:mm :");
        String newDateDay = scanner.next().trim();
        String newDateHour = scanner.nextLine().trim();

        appointmentService.updateDate(id, newDateDay+" "+newDateHour);
    }


    public void handleAppointmentTypeUpdate(){
        System.out.println("App ID:");
        int id = scanner.nextInt();
        System.out.println("Enter new type:");
        appointmentTypeService.listAllAppointmentsTypes().forEach(s-> System.out.println(s.toString()));
        int newType = scanner.nextInt();
        appointmentService.updateType(id, newType);
    }


    public void handleAppointmentRemoveFromClient(){
        appointmentService.listAllAppointmentsForUser(clientUser.getId()).forEach(s-> System.out.println(s.toString()));
        System.out.println("App ID:");
        int id = scanner.nextInt();
        appointmentService.removeAppointment(id);
        System.out.println("App Removed");
    }

    public void handleMarkAppASHeld(){
        appointmentService.listAllAppointments().forEach(s-> System.out.println(s.toString()));
        System.out.println("App ID:");
        int id = scanner.nextInt();
        appointmentService.markAsHeld(id);
        System.out.println("ok");


    }

    private void handleEmployeeUserAdd() {
        System.out.println("First name:");
        String firstName = scanner.next().trim();
        System.out.println("Last name:");
        String lastName = scanner.next().trim();
        System.out.println("Password:");
        String password = scanner.next().trim();
        EmployeeUser newEmployeeUser = new EmployeeUser(firstName, lastName, password);
        EmployeeUser employeeUser = employeeUserService.addEmployee(newEmployeeUser);
        System.out.println("Created Employee: " + employeeUser + ".");
    }

    private void handleEmployeeUserUpdateEmail() {
        System.out.println("Employee ID:");
        int id = scanner.nextInt();
        System.out.println("Email address:");
        String emailAddress = scanner.next().trim();
        employeeUserService.updateEmail(id, emailAddress);
        System.out.println("Email updated");
    }

    private void handleEmployeeUserRemove() {
        System.out.println("Employee ID:");
        int id = scanner.nextInt();
        employeeUserService.removeEmployee(id);
        System.out.println("Employee Removed");
    }


    private void handleClientUserList() {
        clientUserService.listAllClientUser().forEach(s -> System.out.println(s.toString()));
    }

    private void handleClientUserAdd() {
        System.out.println("First name:");
        String firstName = scanner.next().trim();
        System.out.println("Last name:");
        String lastName = scanner.next().trim();
        System.out.println("Email:");
        String email = scanner.next().trim();
        System.out.println("Password:");
        String password = scanner.next().trim();
        ClientUser newClientUser = new ClientUser(firstName, lastName, email, password);
        ClientUser clientUser = clientUserService.addClientUser(newClientUser);
        System.out.println("Created clientUser: " + clientUser + ".");
    }

    private void handleClientUserUpdateEmail() {
        System.out.println("handleClientUserList ID:");
        int id = scanner.nextInt();
        System.out.println("Email address:");
        String emailAddress = scanner.next().trim();
        clientUserService.updateEmail(id, emailAddress);
        System.out.println("Email updated");
    }

    private void handleClientUserRemove() {
        System.out.println("handleClientUserList ID:");
        int id = scanner.nextInt();
        clientUserService.removeClientUser(id);
        System.out.println("Client Removed");
    }





}*/