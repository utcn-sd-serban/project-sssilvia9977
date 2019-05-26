import model from "../model/model";
import findByEmailPresenter from "./findByEmailPresenter";



class ManageAppPresenter {


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

const manageAppPresenter = new ManageAppPresenter();

export default manageAppPresenter;