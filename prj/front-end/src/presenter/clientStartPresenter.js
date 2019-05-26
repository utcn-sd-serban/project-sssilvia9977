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


    onViewDetails(index) {
        window.location.assign("#/review-cl-details/" + index)
    }

    onLogOut(){
        model.logout();
        window.location.assign("#/");
    }





}

const clientStartPresenter = new ClientStartPresenter();

export default clientStartPresenter;