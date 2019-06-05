import model from "../model/model";


class ClientDetailsPresenter {


    onDelete(){
        debugger;
       model.deleteUser();
        window.location.assign("#/manage-cl-acc");
    }


    onBack(){
        window.location.assign("#/manage-cl-acc");
    }


    onLogOut(){
        model.logout()
        window.location.assign("#/");
    }



}

const clientDetailsPresenter = new ClientDetailsPresenter();

export default clientDetailsPresenter