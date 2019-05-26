import model from "../model/model";


const BASE_URL = "http://localhost:8080";

export default class RestClient {


    auth(username, password)
    {
        this.username = username;
        this.password = password;
    }

    setAuthorization() {
        this.authorization = "Basic " + btoa(this.username + ":" + this.password);
    }



    loadAllAppoint(username, password) {
        this.authorization = "Basic " + btoa(username + ":" + password);
        return fetch(BASE_URL + "/appointments", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }

    loadAllUsers()
    {
        return fetch(BASE_URL + "/users", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }

    login(id, email, password)
    {
        const names = email.split('@')[0].split('.');

        return fetch(BASE_URL + "/login", {

            method: "POST",
            body: JSON.stringify({
                id: id,
                firstName: names[0],
                lastName: names[1],
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

    createAppoint(idType, date, username, id) {
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
}