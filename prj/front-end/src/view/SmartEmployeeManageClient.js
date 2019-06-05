import React, { Component } from "react";
import model from "../model/model";
import EmployeeManageClient from "./EmployeeManageClient";
import employeeManageClientPresenter from "../presenter/employeeManageClientPresenter";
import findByEmailPresenter from "../presenter/findByEmailPresenter";

const mapModelStateToComponentState = modelState => ({
    appUsers: modelState.appUsers

});

export default class SmartEmployeeManageClient extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(model.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        model.addListener("change", this.listener);
        model.loadAllClients();
    }

    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }

    render() {
        return (
            <EmployeeManageClient
                onViewDetails={employeeManageClientPresenter.onViewDetails}
                onSearchClientByEmail={employeeManageClientPresenter.onSearchClientByEmail}
                onBack={employeeManageClientPresenter.onBack}
                onLogOut={employeeManageClientPresenter.onLogOut}
                onChange={employeeManageClientPresenter.onChangeSearchedText}
                appUsers={this.state.appUsers} />
        );
    }
}
