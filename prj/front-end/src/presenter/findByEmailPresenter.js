import model from "../model/model";

class FindByEmailPresenter {

    onSearchEmailPresenter() {

        model.findByClientEmail();

    }

    onBack(){
        window.location.assign("#/manage-cl-acc");
    }


    onLogOut(){
        model.logout()
        window.location.assign("#/");
    }



}

const findByEmailPresenter = new FindByEmailPresenter();

export default findByEmailPresenter