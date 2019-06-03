import React, { Component } from "react";
import model from "../model/model";
import EmplManageReviews from "./emplManageReviews";
import emplManageReviewsPresenter from "../presenter/emplManageReviewsPresenter";

const mapModelStateToComponentState = modelState => ({
    reviews: modelState.reviews

});

export default class SmartEmplManageReviews extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(model.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        model.addListener("change", this.listener);
        model.loadAllReviews();
    }

    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }

    render() {
        return (
            <EmplManageReviews
                onViewDetails={emplManageReviewsPresenter.onViewDetails}
                onBack={emplManageReviewsPresenter.onBack}
                onLogOut={emplManageReviewsPresenter.onLogOut}

                reviews={this.state.reviews}
                />
        );
    }
}
