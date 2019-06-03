import React, { Component } from "react";
import model from "../model/model"
import EmployeeStart from "./EmployeeStart";
import employeeStartPresenter from "../presenter/employeeStartPresenter";

const mapModelStateToComponentState = modelState => ({

});

export default class SmartEmployeeStart extends Component{
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
            <EmployeeStart
                onCreateEmplAcc={employeeStartPresenter.onCreateEmplAcc}
                onDeleteClAcc={employeeStartPresenter.onDeleteClAcc}
                onManageApp={employeeStartPresenter.onManageApp}
                onManageReview={employeeStartPresenter.onManageReview}
                onSeeAppForDate={employeeStartPresenter.onSeeAppForDate}
                onLogOut={employeeStartPresenter.onLogOut}
                onChange={employeeStartPresenter.onChangeSearchedText}


                />
        );
    }

}