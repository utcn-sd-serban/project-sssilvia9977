import React, { Component } from "react";
import model from "../model/model";
import clientDetailsPresenter from "../presenter/ClientDetailsPresenter";
import ClSeeAppDetails from "./ClSeeAppDetails";
import clSeeAppDetails from "../presenter/clSeeAppDetails";

const mapModelStateToComponentState = (modelState, props) => (
     modelState.usersAppoints[props.match.params.index]

);

export default class SmartClSeeAppDetails extends Component {
    constructor(props) {
        super(props);
        debugger;
        this.state = mapModelStateToComponentState(model.state, props);
        const x = model.state.appType[0];
        const y = model.state.usersAppoints;
        /*this.state.appType.typeName = model.state.appType[model.state.usersAppoints[props.match.params.index].typeId - 1].typeName;
        this.state.appType.price = model.state.appType[model.state.usersAppoints[props.match.params.index].typeId - 1].price;
        this.state.appType.duration = model.state.appType[model.state.usersAppoints[props.match.params.index].typeId - 1].duration;*/

        this.a = model.state.appType[model.state.usersAppoints[props.match.params.index].typeId - 1].typeName;
        this.b = model.state.appType[model.state.usersAppoints[props.match.params.index].typeId - 1].price;
        this.c= model.state.appType[model.state.usersAppoints[props.match.params.index].typeId - 1].duration;


        debugger;
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
            <ClSeeAppDetails
                onBack = {clSeeAppDetails.onBack}
                onLogOut = {clSeeAppDetails.onLogOut}

                typeName={this.a}
                typePrice={this.b}
                typeDuration={this.c}
                appDueDate={this.state.dateString}
                appWasHeld={this.state.held.toString()}
                appDiscountPrice={this.state.discount}
                appUsedDiscount={this.state.addedDiscount.toString()}

            />
        );
    }
}
