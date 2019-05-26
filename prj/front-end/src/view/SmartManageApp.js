import React, { Component } from "react";
import model from "../model/model";
import ManageApp from "./ManageApp";
import manageAppPresenter from "../presenter/manageAppPresenter";

const mapModelStateToComponentState = (modelState, props) => (
    modelState.appoint[props.match.params.index]

);

export default class SmartManageApp extends Component {
    constructor(props) {
        super(props);

        this.state = mapModelStateToComponentState(model.state, props);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState, this.props));

        model.addListener("change", this.listener);
    }

    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }


    componentDidUpdate(prev) {
        if(prev.match.params.index !== this.props.match.params.index){
            this.setState(mapModelStateToComponentState(model.state, this.props));
        }
    }


    render() {
        return (
            <ManageApp
                onBack={manageAppPresenter.onBack}
                idAppoint={model.state.appoint.idAppoint}
                onLogOut={manageAppPresenter.onLogOut}
                onMarkHeld={manageAppPresenter.onMarkHeld}
                appoint={model.state.appoint} />
        );
    }
}



/*
import React, { Component } from "react";
import model from "../model/model";
import ManageApp from "./ManageApp";
import manageAppPresenter from "../presenter/manageAppPresenter";

const mapModelStateToComponentState = modelState => ({
    appoint: modelState.appoint

});

export default class SmartManageApp extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(model.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        model.addListener("change", this.listener);
    }

    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }

    render() {
        return (
            <ManageApp
                onBack={manageAppPresenter.onBack}
             //   idAppoint={this.state.idAppoint}
                onLogOut={manageAppPresenter.onLogOut}
                onMarkHeld={manageAppPresenter.onMarkHeld}
                appoint={this.state.appoint} />
        );
    }
}

 */