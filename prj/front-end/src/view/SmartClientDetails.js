import React, { Component } from "react";
import model from "../model/model";
import ClientDetails from "./ClientDetails";
import clientDetailsPresenter from "../presenter/ClientDetailsPresenter";

const mapModelStateToComponentState = (modelState, props) => (
    modelState.appUsers[props.match.params.index]

);

export default class SmartClientDetails extends Component {
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
            <ClientDetails
                onDelete = {clientDetailsPresenter.onDelete}
                onBack = {clientDetailsPresenter.onBack}
                onLogOut = {clientDetailsPresenter.onLogOut}
                email={this.state.email}
                firstName={this.state.firstName}
                lastName={this.state.lastName}

            />
        );
    }
}
