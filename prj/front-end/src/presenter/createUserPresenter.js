import model from "../model/model";

class CreateUserPresenter {

    onCreate() {
        debugger;
        model.addUser(model.state.newUser.email, model.state.newUser.firstName, model.state.newUser.lastName, model.state.newUser.password);
        model.changeNewUserProperty("email", "");
        model.changeNewUserProperty("firstName", "");
        model.changeNewUserProperty("lastName", "");
        model.changeNewUserProperty("password", "");
        window.location.assign("#/");
    }

    onChange(property, value) {
        model.changeNewUserProperty(property, value);
    }


    onBack(){
        window.location.assign("#/");
    }


}

const createUserPresenter = new CreateUserPresenter();

export default createUserPresenter;