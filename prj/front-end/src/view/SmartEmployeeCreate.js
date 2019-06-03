import React, { Component } from "react";
import model from "../model/model"
import CreateEmployee from "./createEmployee";
import createEmployeePresenter from "../presenter/createEmployeePresenter";


const mapModelStateToComponentState = modelState => ({
    firstName: modelState.newEmployee.firstName,
    lastName: modelState.newEmployee.lastName,
    password: modelState.newEmployee.password

});

export default class SmartEmployeeCreate extends Component{
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
            <CreateEmployee
                onCreate={createEmployeePresenter.onCreate}
                onChange={createEmployeePresenter.onChange}

                onBack = {createEmployeePresenter.onBack}
                onLogOut = {createEmployeePresenter.onLogOut}

                firstName={this.state.firstName}
                lastName={this.state.lastName}
                password={this.state.password} />
        );
    }

}