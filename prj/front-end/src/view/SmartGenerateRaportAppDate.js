import React, { Component } from "react";
import model from "../model/model";
import findByEmailPresenter from "../presenter/findByEmailPresenter";
import FindClByEmail from "./FindClByEmail";
import employeeManageClientPresenter from "../presenter/employeeManageClientPresenter";
import GenerateRaportAppDate from "./generateRaportAppDate";
import employeeStartPresenter from "../presenter/employeeStartPresenter";
import generateRaportAppDatePresenter from "../presenter/generateRaportAppDatePresenter";


const mapModelStateToComponentState = modelState => ({
    appointByDate: modelState.appointByDate
});

export default class SmartGenerateRaportAppDate extends Component {
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
            <GenerateRaportAppDate
                onSearchDatePresenter={generateRaportAppDatePresenter.onSearchDatePresenter}
                appointByDate={this.state.appointByDate}
                onLogOut={generateRaportAppDatePresenter.onLogOut}
                onBack={generateRaportAppDatePresenter.onBack}
            />
        );
    }
}
