import model from "../model/model";



class EmplManageReviewsPresenter {


    onBack(){
        window.location.assign("#/empl-start");
    }


    onLogOut(){
        model.logout()
        window.location.assign("#/");
    }


    onViewDetails(index) {
        window.location.assign("#/review-details/" + index)
    }

}

const emplManageReviewsPresenter = new EmplManageReviewsPresenter();

export default emplManageReviewsPresenter;