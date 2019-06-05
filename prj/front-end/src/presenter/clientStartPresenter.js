import model from "../model/model";
import findByEmailPresenter from "./findByEmailPresenter";
import generateRaportAppDatePresenter from "./generateRaportAppDatePresenter";


class ClientStartPresenter {




    onAddAppoint(){
        window.location.assign("#/create-app-cl")
    }



    onManageReviews()
    {
        window.location.assign("#/manage-rev-cl" )
    }


    onViewDetails(index) {  //here we need the app id la care ii zice app.id
        debugger
        window.location.assign("#/app-cl-details/" + index)
        debugger
    }

    onLogOut(){
        model.logout();
        window.location.assign("#/");
    }





}

const clientStartPresenter = new ClientStartPresenter();

export default clientStartPresenter;