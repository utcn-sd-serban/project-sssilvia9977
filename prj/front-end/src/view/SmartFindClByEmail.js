import React, { Component } from "react";
import model from "../model/model";
import findByEmailPresenter from "../presenter/findByEmailPresenter";
import FindClByEmail from "./FindClByEmail";
import employeeManageClientPresenter from "../presenter/employeeManageClientPresenter";


const mapModelStateToComponentState = modelState => ({
    clientByEmail: modelState.clientByEmail
});

export default class SmartFindClByEmail extends Component {
    constructor() {
        super();
        const x = model.state;
        this.state = mapModelStateToComponentState(model.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        model.addListener("change", this.listener);
        debugger;
    }

    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }

    render() {
        return (
            <FindClByEmail
                onSearchEmailPresenter={findByEmailPresenter.clientByEmail}
                onViewDetails={employeeManageClientPresenter.onViewDetails}
                clientByEmail={this.state.clientByEmail}
                onLogOut={employeeManageClientPresenter.onLogOut}
                onBack={employeeManageClientPresenter.onBack}
            />
        );
    }
}
