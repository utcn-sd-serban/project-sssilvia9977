import model from "../model/model";

class CreateEmployeePresenter {

    onCreate() {

        model.addEmployee( model.state.newEmployee.firstName, model.state.newEmployee.lastName, model.state.newEmployee.password);
        model.changeNewEmployeeProperty("firstName", "");
        model.changeNewEmployeeProperty("lastName", "");
        model.changeNewEmployeeProperty("password", "");

        window.location.assign("#/empl-start");

    }

    onChange(property, value) {
        model.changeNewEmployeeProperty(property, value);

    }

    onBack(){
        window.location.assign("#/empl-start");
    }


    onLogOut(){
        model.logout()
        window.location.assign("#/");
    }


}

const createEmployeePresenter = new CreateEmployeePresenter();

export default createEmployeePresenter;