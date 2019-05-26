import React, { Component } from "react";
import model from "../model/model"
import employeeStartPresenter from "../presenter/employeeStartPresenter";
import ClientStart from "./ClientStart";
import clientStartPresenter from "../presenter/clientStartPresenter";

const mapModelStateToComponentState = modelState => ({
    usersAppoints: modelState.usersAppoints
});

export default class SmartClientStart extends Component{
    constructor()
    {
        super();
        this.state = mapModelStateToComponentState(model.state)
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        model.addListener("change", this.listener);

    }

    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }

    render(){
        return(
            <ClientStart
                usersAppoints={this.state.usersAppoints}

                onViewDetails={clientStartPresenter.onViewDetails}
                onAddAppoint={clientStartPresenter.onAddAppoint}
                onManageReviews={clientStartPresenter.onManageReviews}
                onLogOut={clientStartPresenter.onLogOut}


            />
        );
    }

}