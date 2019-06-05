import React, { Component } from "react";
import model from "../model/model"
import clAddAppPresenter from "../presenter/clAddAppPresenter";
import ClReview from "./ClReview";
import clReviewPresenter from "../presenter/clReviewPresenter";


const mapModelStateToComponentState = modelState => ({
    usersReviews: modelState.usersReviews
});

export default class SmartClReview extends Component{
    constructor()
    {
        super();
        this.state = mapModelStateToComponentState(model.state)
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        model.addListener("change", this.listener);
        model.loadAllReviewsForClient();

    }

    componentWillUnmount() {

        model.removeListener("change", this.listener);
    }

    render(){
        return(
            <ClReview
                onCreate={clReviewPresenter.onCreate}
                onChangeReviewText={clReviewPresenter.onChangeSetReviewText}

                onBack = {clReviewPresenter.onBack}
                onLogOut = {clReviewPresenter.onLogOut}

                usersReviews={this.state.usersReviews}
               />
        );
    }

}