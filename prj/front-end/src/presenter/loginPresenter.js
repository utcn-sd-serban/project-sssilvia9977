import model from "../model/model";

class LoginPresenter {

    onInitRev(){
        model.initApprovedReviews();
    }

    onLogin() {
        model.login();
        model.changeNewUserProperty("email", "");
        model.changeNewUserProperty("password", "");

        if(model.state.userFound === "yes" && model.state.typeOfUserFound === "empl"){
            window.location.assign("#/empl-start");
        } else if (model.state.userFound === "yes" && model.state.typeOfUserFound === "cl"){
            window.location.assign("#/cl-start");
        } else
            {
            window.location.assign("#/create-user");
        }

    }

    onChange(property, value) {
        model.changeCurrentUserProperty(property, value);
    }

    onCreateUser(){
        window.location.assign("#/create-user")
    }

}

const loginPresenter = new LoginPresenter();

export default loginPresenter;