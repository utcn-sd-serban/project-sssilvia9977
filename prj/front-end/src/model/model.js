import { EventEmitter } from "events";

//type of user: empl or cl
import RestClient from "../rest/RestClient";

const client = new RestClient("A.B@example.com", "AB");


class Model extends EventEmitter{
    constructor() {
        super();
        this.state = {
            appoint: [{
                idAppoint: 1,
                idUser: 2,
                idAppType:1,
                user: "Billy",
                typeName: "Trim",
                duration: 120,
                price: 19,
                dueDate: "2019-05-06 12:22",
                held: true

            }, {
                idAppoint: 2,
                idUser: 2,
                idAppType:2,
                user: "Billy",
                typeName: "Wash",
                duration: 190,
                price: 22,
                dueDate: "2019-09-06 12:22",
                held: false
            }],



            appType: [{
                idAppType: 1,
                typeName: "Trim",
                duration: 120,
                price: 19

            }, {
                idAppType: 2,
                typeName: "Wash",
                duration: 190,
                price: 22
            }],


            newAppoint: {
                user: "",
                idUser: "",
                typeName: "",
                duration: "",
                price: "",
                dueDate: "",
                held: false
            },

            appointByDate: [],
            searchedDate: "",
            idAppointRemember: 2,
            usersAppoints:[],
            usersReviews: [],
            idReviewRemember: 3,
            setReviewText: "",

            reviews: [{
                idReview: 1,
                idUser:1,
                text: "very very nice",
                state: "approved"
            },{
                idReview: 2,
                idUser:1,
                text: "now not so nice",
                state: "approved"
            },{
                idReview: 3,
                idUser:2,
                text: "this was s**t",
                state: "decline"
            }],

            newReview: {
                user: "",
                idUser: "",
                text: "",
                state: "decline"
            },


            approvedReviews: [],

            appUsers: [{
                idUser:1,
                email: "A.B@example.com",
                firstName:"A",
                lastName: "B",
                password: "AB"
            },{
                idUser:2,
                email: "a",
                firstName:"a",
                lastName: "a",
                password: "a"
            },{
                idUser:3,
                email: "E.F@example.com",
                firstName:"E",
                lastName: "F",
                password: "EF"
            },{
                idUser:4,
                email: "G.H@example.com",
                firstName:"G",
                lastName: "H",
                password: "GH"
            }],

            employee: [{
                idUser:1,
                email: "FE1.LE1@pets.com",
                firstName:"FE1",
                lastName: "LE1",
                password: "1"
            },{
                idUser:2,
                email: "FE2.LE2@pets.com",
                firstName:"FE2",
                lastName: "LE2",
                password: "2"
            }],

            newUser: {
                email: "",
                firstName: "",
                lastName: "",
                password: ""
            },


            newEmployee: {
                firstName: "",
                lastName: "",
                password: ""
            },

            currentUser: {
                idUser: "",
                email: "",
                password: "",
                firstName:""
            },




            idUserRemember:2,
            idEmployeeRemember:2,
            userFound : "",
            typeOfUserFound: "",
            email : "",
            clientByEmail: [],
            searchedText: "",
            setAppType: "",
            setAppDate: ""



        };

    }


    setAuthorization()
    {
        this.client.auth(this.state.currentUser.email, this.state.currentUser.password);
        this.client.setAuthorization();
    }


    addUser(email, firstName, lastName, password){
        this.state = {
            ...this.state,
            appUsers: this.state.appUsers.concat([{
                idUser: ++this.state.idUserRemember,
                email: email,
                firstName: firstName,
                lastName: lastName,
                password: password
            }])
        };
        this.emit("change", this.state);
    }

    deleteUser(){
        //Get the index of the user
        const idPattern = window.location.toString().match('/[0-9]+')[0];

        //get the integer value of the id
        const idToDelete = parseInt(idPattern.substring(1, idPattern.length));

        delete this.state.appUsers[idToDelete];

        this.emit("change", this.state);

    }




    changeState(){
        //Get the index of the user
        const idPattern = window.location.toString().match('/[0-9]+')[0];

        //get the integer value of the id
        const idToChange = parseInt(idPattern.substring(1, idPattern.length));

        if(this.state.reviews.find((x) => x.idReview === idToChange+1).state === "approved"){
            this.state.reviews.find((x) => x.idReview === idToChange+1).state = "decline";
        }else{
            this.state.reviews.find((x) => x.idReview === idToChange+1).state = "approved";
        }
        this.emit("change", this.state);
    }


    markHeld(idAppoint){
        this.state = {
            ...this.state,
            ...this.state.appoint.find((app) => app.idAppoint === idAppoint),
                held: true

        };
        this.emit("change", this.state);

    }

    addEmployee(firstName, lastName, password){
        this.state = {
            ...this.state,
            employee: this.state.employee.concat([{
                id: ++this.state.idEmployeeRemember,
                email: firstName +"." + lastName + "@pets.com",
                firstName: firstName,
                lastName: lastName,
                password: password
            }])
        };
        this.emit("change", this.state);
    }


    logout(){

        this.state.userFound = "";
        this.state.typeOfUserFound = "";
        this.state.usersAppoints = [];
        this.state.usersReviews = [];

        this.state = {
            ...this.state,
            currentUser: {
                ...this.state.currentUser,
                email: "",
                idUser: "",
                password: "",
                firstName: ""
            },
          /*  approvedReviews : {
                ...this.state.approvedReviews,
                text: this.state.reviews.filter(x => x.state === "approved")
            }*/
        };



        this.emit("change", this.state);

    }



    login(){

        this.setAuthorization();
        if( typeof (this.state.appUsers.find((userr) => userr.email === this.state.currentUser.email && userr.password === this.state.currentUser.password)) !== 'undefined')
        {
            this.state.userFound = "yes";
            this.state.typeOfUserFound = "cl";



            this.state = {
                ...this.state,
                usersAppoints : this.state.appoint.filter( x => x.idUser ===
                    this.state.appUsers.find((userr) => userr.email === this.state.currentUser.email && userr.password === this.state.currentUser.password).idUser )
            };
            this.emit("change", this.state);

            this.state = {
                ...this.state,
                usersReviews : this.state.reviews.filter( x => x.idUser ===
                    this.state.appUsers.find((userr) => userr.email === this.state.currentUser.email && userr.password === this.state.currentUser.password).idUser )
            };
            this.emit("change", this.state);

            this.state = {
                ...this.state,
                currentUser: {
                    ...this.state.currentUser,
                    firstName: this.state.appUsers.find(
                        (userr) => userr.email === this.state.currentUser.email && userr.password === this.state.currentUser.password)
                        .firstName,
                    idUser: this.state.appUsers.find(
                        (userr) => userr.email === this.state.currentUser.email && userr.password === this.state.currentUser.password)
                        .idUser,
                }
            };
            this.emit("change", this.state);

        } else if ( typeof (this.state.employee.find((userr) => userr.email === this.state.currentUser.email && userr.password === this.state.currentUser.password)) !== 'undefined'){
            this.state.userFound = "yes";
            this.state.typeOfUserFound = "empl";

            this.state = {
                ...this.state,
                currentUser: {
                    ...this.state.currentUser,
                    firstName: this.state.employee.find(
                        (userr) => userr.email === this.state.currentUser.email && userr.password === this.state.currentUser.password)
                        .firstName,
                    idUser: this.state.employee.find(
                        (userr) => userr.email === this.state.currentUser.email && userr.password === this.state.currentUser.password)
                        .idUser
                }
            };
            this.emit("change", this.state);
        }
        else {
            this.state.userFound= "no";
        }



    }

    changeCurrentUserProperty(property, value) {
        this.state = {
            ...this.state,
            currentUser: {
                ...this.state.currentUser,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }


    changeNewUserProperty(property, value) {
        this.state = {
            ...this.state,
            newUser: {
                ...this.state.newUser,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

    changeNewEmployeeProperty(property, value) {
        this.state = {
            ...this.state,
            newEmployee: {
                ...this.state.newEmployee,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

    addAppoint() {
        let newUserAppointment = {};
        newUserAppointment["idAppoint"] = ++this.state.idAppointRemember;
        newUserAppointment["idUser"] = this.state.currentUser.idUser;
        newUserAppointment["user"] = this.state.currentUser.firstName;
        newUserAppointment["typeName"] = this.state.appType.find((x) => x.idAppType == this.state.setAppType).typeName;
        newUserAppointment["duration"] = this.state.appType.find((x) => x.idAppType == this.state.setAppType).duration;
        newUserAppointment["price"] =  this.state.appType.find((x) => x.idAppType == this.state.setAppType).price;
        newUserAppointment["dueDate"] =  this.state.setAppDate;
        this.state = {
            ...this.state,
            appoint: this.state.appoint.concat([{
                newUserAppointment
            }]),

            usersAppoints: this.state.usersAppoints.concat(newUserAppointment)

        };
        this.emit("change", this.state);
    }




    addReview() {
        let newUserReview = {};
        newUserReview["idReview"] = ++this.state.idReviewRemember;
        newUserReview["idUser"] = this.state.currentUser.idUser;
        newUserReview["text"] =  this.state.setReviewText;
        newUserReview["state"] = "decline";
        this.state = {
            ...this.state,
            reviews: this.state.reviews.concat([{
                newUserReview
            }]),

            usersReviews: this.state.usersReviews.concat(newUserReview)

        };
        this.emit("change", this.state);
    }



    changeNewAppointProperty(property, value) {
        this.state = {
            ...this.state,
            newAppoint: {
                ...this.state.newAppoint,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }



    changeNewReviewProperty(property, value) {
        this.state = {
            ...this.state,
            newReview: {
                ...this.state.newReview,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }


    findByDate(){

        this.state = {
            ...this.state,
            appointByDate : this.state.appoint.filter( x => x.dueDate.contains(this.state.searchedDate.searchedDate) )
        };
        this.emit("change", this.state);

    }





    changeSearchTextProperty(property, value) {
        this.state = {
            ...this.state,
            searchedText: {
                ...this.state.searchedText,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

   changeSetReviewTextProperty(property, value) {
       this.state = {
           ...this.state,
           [property] : value
       };
       this.emit("change", this.state);

    }


    changeSetAppTypeProperty(property, value) {
        this.state = {
            ...this.state,
            [property] : value
        };
        this.emit("change", this.state);
    }




    changeSetAppDateProperty(property, value) {
        this.state = {
            ...this.state,
            [property] : value
        };
        this.emit("change", this.state);
    }



    findByClientEmail(){

        this.state = {
            ...this.state,
            clientByEmail : this.state.appUsers.filter( x => x.email === (this.state.searchedText.searchedText)  )
        };
        this.emit("change", this.state);


    }


    findByDate(){


        this.state = {
            ...this.state,
            appointByDate : this.state.appoint.filter( x => x.dueDate.match(this.state.searchedText.searchedText))
        };
        this.emit("change", this.state);


    }



}

const  model = new Model();

export default model;

