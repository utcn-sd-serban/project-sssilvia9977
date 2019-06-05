import model from "../model/model";


class ClSeeAppDetails {



    onBack(){
        window.location.assign("#/cl-start");
    }


    onLogOut(){
        model.logout()
        window.location.assign("#/");
    }



}

const clSeeAppDetails = new ClSeeAppDetails();

export default clSeeAppDetails