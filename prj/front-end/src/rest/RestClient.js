import model from "../model/model";


const BASE_URL = "http://localhost:8080";

export default class RestClient {


    setAuthorization(username, password) {
        this.username = username;
        this.password = password;
        this.authorization = "Basic " + btoa(this.username + ":" + this.password);
    }



    loadAllAppointEmpl(username, password) {
        this.authorization = "Basic " + btoa(username + ":" + password);
        return fetch(BASE_URL + "/appointments-empl", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }



    loadAllAppointForClient(username, password) {
        this.authorization = "Basic " + btoa(username + ":" + password);
        return fetch(BASE_URL + "/appointments-cl/"+username, {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }


    loadAllReviews(username, password) {
        this.authorization = "Basic " + btoa(username + ":" + password);
        return fetch(BASE_URL + "/reviews-empl", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());

    }


    loadAllReviewsForClient(username, password) {
        this.authorization = "Basic " + btoa(username + ":" + password);
        return fetch(BASE_URL + "/reviews-cl/"+username, {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }




    loadAllUsers()
    {
        return fetch(BASE_URL + "/clients-empls", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }

    login(email, password)
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


    createReview(rev) {
        debugger;
        return fetch(BASE_URL + "/create-review", {
            method: "POST",
            body: JSON.stringify({
                clientId: rev.idUser,
                text : rev.text,
                state: "decline"
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => {
            });
    }


    createAppoint(app) {
        return fetch(BASE_URL + "/create-appointment", {
            method: "POST",
            body: JSON.stringify({
                id: app.idAppoint,
                clientId: app.idUser,
                typeId : app.typeId,
                dateString: app.dueDate,
                held : false,
                discount : 0,   //TODO: modifica aici cand pui butonul
                addedDiscount : false
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }


    getUserId(email){
        return fetch(BASE_URL + "/get-id/" + email , {
            method: "GET",
            headers: {
                "Authorization": this.authorization
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


    createEmployee(firstName, lastName, password)
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



   changeState() //n am incercat
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


    deleteClient(id)
    {
        debugger
        return fetch(BASE_URL + "/delete-cl/" + id, {
            method: "DELETE",
            headers: {
                "Authorization": this.authorization
            }

        }).then(response => response.json());
    }



    markApp(app){
        debugger;
        return fetch(BASE_URL + "/mark", {
            method: "POST",
            body: JSON.stringify({
                id: app.id,
                clientId: app.clientId,
                typeId: app.typeId,
                dateString: app.dateString,
                held: app.held,
                discount: app.discount,
                addedDiscount : app.addedDiscount
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response);
    }



}