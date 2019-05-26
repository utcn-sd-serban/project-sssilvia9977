import model from "../model/model";
import findByEmailPresenter from "./findByEmailPresenter";
import generateRaportAppDatePresenter from "./generateRaportAppDatePresenter";


class EmployeeStartPresenter {



    onCreateEmplAcc(){
        window.location.assign("#/create-empl-acc")
    }

    onDeleteClAcc(){
        window.location.assign("#/manage-cl-acc" )
    }

    onManageApp()
    {
        window.location.assign("#/manage-apps" )
    }

    onManageReview()
    {
        window.location.assign("#/manage-rev" )
    }

    onSeeAppForDate()
    {
        generateRaportAppDatePresenter.onSearchDatePresenter();
        window.location.assign("#/find-app-date")
    }


    onLogOut(){
        model.logout();
        window.location.assign("#/");
    }

    onChangeSearchedText(property, value)
    {
        model.changeSearchTextProperty(property, value);
    }




}

const employeeStartPresenter = new EmployeeStartPresenter();

export default employeeStartPresenter;