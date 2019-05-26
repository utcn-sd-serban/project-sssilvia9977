import model from "../model/model";
import findByEmailPresenter from "./findByEmailPresenter";



class EmployeeManageClientPresenter {



    onViewDetails(index){
        window.location.assign("#/client-details/" + index)
    }

    onChangeSearchedText(property, value)
    {
        model.changeSearchTextProperty(property, value);
    }

    onSearchClientByEmail(){

        findByEmailPresenter.onSearchEmailPresenter();
        window.location.assign("#/find-cl-email")
    }



    onBack(){
        window.location.assign("#/empl-start");
    }


    onLogOut(){
        model.logout()
        window.location.assign("#/");
    }


}

const employeeManageClientPresenter = new EmployeeManageClientPresenter();

export default employeeManageClientPresenter;