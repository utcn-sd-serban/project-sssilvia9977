import model from "../model/model";

class GenerateRaportAppDatePresenter {

    onSearchDatePresenter() {

        model.findByDate();

    }

    onBack(){
        window.location.assign("#/empl-start");
    }


    onLogOut(){
        model.logout()
        window.location.assign("#/");
    }



}

const generateRaportAppDatePresenter = new GenerateRaportAppDatePresenter();

export default generateRaportAppDatePresenter