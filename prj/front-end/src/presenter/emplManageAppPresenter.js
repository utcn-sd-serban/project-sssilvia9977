import model from "../model/model";



class EmplManageAppPresenter {


    onBack(){
        window.location.assign("#/empl-start");
    }


    onLogOut(){
        model.logout()
        window.location.assign("#/");
    }



    onMarkHeld(){
        model.markHeld(model.state.idAppoint);
    }

}

const manageAppPresenter = new EmplManageAppPresenter();

export default manageAppPresenter;