import React, { Component } from "react";
import model from "../model/model";
import ReviewDetails from "./ReviewDetails";
import emplReviewDetailsPresenter from "../presenter/emplReviewDetailsPresenter";

const mapModelStateToComponentState = (modelState, props) => (
    modelState.reviews[props.match.params.index]

);

export default class SmartEmplReviewDetails extends Component {
    constructor(props) {
        super(props);
        this.state = mapModelStateToComponentState(model.state, props);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState, this.props));
        model.addListener("change", this.listener);
    }


    componentDidUpdate(prev) {
        if(prev.match.params.index !== this.props.match.params.index){
            this.setState(mapModelStateToComponentState(model.state, this.props));
        }
    }


    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }


    render() {
        return (
            <ReviewDetails
                onBack = {emplReviewDetailsPresenter.onBack}
                onLogOut = {emplReviewDetailsPresenter.onLogOut}
               onChangeState = {emplReviewDetailsPresenter.onChangeState}
                text={this.state.text}
                idUser={this.state.idUser}
                state={this.state.state}

            />
        );
    }
}
