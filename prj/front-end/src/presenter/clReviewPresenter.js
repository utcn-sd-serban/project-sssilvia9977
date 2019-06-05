import model from "../model/model";

class ClReviewPresenter {



    onCreate() {
        window.location.assign("#/cl-start");
        model.addReview();


    }

    onChange(property, value) {
        model.changeNewAppointProperty(property, value);

    }

    onChangeSetReviewText(property, value){
        model.changeSetReviewTextProperty(property, value);

    }


    onBack(){
        window.location.assign("#/cl-start");
    }


    onLogOut(){
        model.logout()
        window.location.assign("#/");
    }


}

const clReviewPresenter = new ClReviewPresenter();

export default clReviewPresenter;