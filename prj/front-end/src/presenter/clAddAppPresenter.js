import model from "../model/model";

class ClAddAppPresenter {



   onCreate() {

       model.addAppoint();
        window.location.assign("#/cl-start");

    }

    onChange(property, value) {
        model.changeNewAppointProperty(property, value);

    }

    onChangeSetAppDate(property, value){
       model.changeSetAppDateProperty(property, value);
    }

     onChangeSetAppType(property, value){
       model.changeSetAppTypeProperty(property, value);
    }



    onBack(){
        window.location.assign("#/cl-start");
    }


    onLogOut(){
        model.logout()
        window.location.assign("#/");
    }


}

const clAddAppPresenter = new ClAddAppPresenter();

export default clAddAppPresenter;