import React from 'react';
import './App.css';
import {HashRouter, Switch, Route} from "react-router-dom";
import SmartLogin from "./view/SmartLogin";
import SmartCreateUser from "./view/SmartCreateUser";
import SmartClientStart from "./view/SmartClientStart";
import SmartEmployeeStart from "./view/SmartEmployeeStart";
import SmartEmployeeCreate from "./view/SmartEmployeeCreate";
import SmartEmployeeManageClient from "./view/SmartEmployeeManageClient";
import SmartFindClByEmail from "./view/SmartFindClByEmail";
import SmartClientDetails from "./view/SmartClientDetails";
import SmartManageApp from "./view/SmartManageApp";
import SmartEmplManageReviews from "./view/SmartEmplManageReviews";
import SmartEmplReviewDetails from "./view/SmartEmplReviewDetails";
import SmartGenerateRaportAppDate from "./view/SmartGenerateRaportAppDate";
import SmartClAddApp from "./view/SmartClAddApp";
import SmartClReview from "./view/SmartClReview";
import SmartClSeeAppDetails from "./view/SmartClSeeAppDetails";




const App = () => (
    <div className = "App">
      <HashRouter >
        <Switch>
          <Route exact = {true} component={SmartLogin} path = "/" />
            <Route exact = {true} component={SmartCreateUser} path = "/create-user" />
            <Route exact = {true} component={SmartClientStart} path = "/cl-start" />
            <Route exact = {true} component={SmartEmployeeStart} path = "/empl-start" />
            <Route exact = {true} component={SmartEmployeeCreate} path = "/create-empl-acc" />
            <Route exact = {true} component={SmartEmployeeManageClient} path = "/manage-cl-acc" />
            <Route exact = {true} component={SmartFindClByEmail} path = "/find-cl-email" />
            <Route exact = {true} component={SmartClientDetails} path = "/client-details/:index" />
            <Route exact = {true} component={SmartEmplReviewDetails} path = "/review-details/:index" />
            <Route exact = {true} component={SmartManageApp} path = "/manage-apps" />
            <Route exact = {true} component={SmartEmplManageReviews} path = "/manage-rev" />
            <Route exact = {true} component={SmartGenerateRaportAppDate} path = "/find-app-date" />
            <Route exact = {true} component={SmartClAddApp} path = "/create-app-cl" />
            <Route exact = {true} component={SmartClReview} path = "/manage-rev-cl" />
           <Route exact = {true} component={SmartClSeeAppDetails} path = "/app-cl-details/:index" />

        </Switch>



      </HashRouter>


    </div>
);

export default App;
