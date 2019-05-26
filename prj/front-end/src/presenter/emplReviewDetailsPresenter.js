import model from "../model/model";


class EmplReviewDetailsPresenter {


    onChangeState(){
        model.changeState();
        window.location.assign("#/manage-rev");
    }

    onBack(){
        window.location.assign("#/manage-rev");
    }


    onLogOut(){
        model.logout()
        window.location.assign("#/");
    }



}

const emplReviewDetailsPresenter = new EmplReviewDetailsPresenter();

export default emplReviewDetailsPresenter