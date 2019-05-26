import React, { Component } from "react";
import model from "../model/model"
import ClAddAppoint from "./ClAddAppoint";
import clAddAppPresenter from "../presenter/clAddAppPresenter";


const mapModelStateToComponentState = modelState => ({
    appType: modelState.appType,
    usersAppoints: modelState.usersAppoints

});

export default class SmartClAddApp extends Component{
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
            <ClAddAppoint
                onCreate={clAddAppPresenter.onCreate}
                onChangeAppType={clAddAppPresenter.onChangeSetAppType}
                onChangeAppDate={clAddAppPresenter.onChangeSetAppDate}

                onBack = {clAddAppPresenter.onBack}
                onLogOut = {clAddAppPresenter.onLogOut}

                appType={this.state.appType}
            />
        );
    }

}