import model from "../model/model";



class EmplManageAppPresenter {


    onBack(){
        window.location.assign("#/empl-start");
    }


    onLogOut(){
        model.logout()
        window.location.assign("#/");
    }



    onMarkHeld(index){
        debugger;
        model.markHeld(index);
    }

}

const manageAppPresenter = new EmplManageAppPresenter();

export default manageAppPresenter;