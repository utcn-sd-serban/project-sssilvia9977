import model from "../model/model";

class ClReviewPresenter {



    onCreate() {
debugger
        model.addReview();
        window.location.assign("#/cl-start");
        debugger

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