import model from "../model/model";


const BASE_URL = "http://localhost:8080";

export default class RestClient {


    setAuthorization(username, password) {
        this.username = username;
        this.password = password;
        this.authorization = "Basic " + btoa(this.username + ":" + this.password);
    }



    loadAllAppointEmpl(username, password) {     //dece pnm nu merge, nu stiu
        this.authorization = "Basic " + btoa(username + ":" + password);
        return fetch(BASE_URL + "/appointments-empl", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }



    loadAllReviews(username, password) { //merge
        debugger
        this.authorization = "Basic " + btoa(username + ":" + password);
        return fetch(BASE_URL + "/reviews-empl", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
        debugger
    }




    loadAllUsers()    //nu merge
    {
        return fetch(BASE_URL + "/clients-empls", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }

    login(email, password)    //merge
    {
        return fetch(BASE_URL + "/login-client", {

            method: "POST",
            body: JSON.stringify({
                emailAddress: email,
                password: password
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type" : "application/json"
            }
        }).then(response => {

            return response;
        });
    }

    createAppoint(idType, date, username, id) {   //n am incercat
        return fetch(BASE_URL + "/create-question", {
            method: "POST",
            body: JSON.stringify({
                id: id,
                user: username,
                idType: idType
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }

    createUser(email, firstName, lastName, password)   //merge
    {
        return fetch(BASE_URL + "/create-client", {
            method: "POST",
            body: JSON.stringify({
                emailAddress: email,
                firstName: firstName,
                lastName: lastName,
                password: password
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }


    createEmployee(firstName, lastName, password)  //merge
    {
        return fetch(BASE_URL + "/create-empl", {
            method: "POST",
            body: JSON.stringify({
                emailAddress: firstName + "."+lastName + "@pets.com",
                firstName: firstName,
                lastName: lastName,
                password: password
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }


   changeState() //cum fac chestia asta
    {
        return fetch(BASE_URL + "/update-review-state/{id}", {
            method: "POST",
            body: JSON.stringify(),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }







}