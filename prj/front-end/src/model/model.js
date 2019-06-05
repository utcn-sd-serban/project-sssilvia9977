import { EventEmitter } from "events";

//type of user: empl or cl
import RestClient from "../rest/RestClient";



class Model extends EventEmitter{
    constructor() {
        super();
        this.restClient = new RestClient();
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
                held: true,
                discount: 0,
                addedDiscount: false

            }, {
                idAppoint: 2,
                idUser: 2,
                idAppType:2,
                user: "Billy",
                typeName: "Wash",
                duration: 190,
                price: 22,
                dueDate: "2019-09-06 12:22",
                held: false,
                discount: 0,
                addedDiscount: false
            }],



            appType: [{
                idAppType: 1,
                typeName: "Trim",
                duration: 120,
                price: 190

            }, {
                idAppType: 2,
                typeName: "Wash",
                duration: 190,
                price: 220
            }],


            newAppoint: {
                user: "",
                idUser: "",
                typeName: "",
                duration: "",
                price: "",
                dueDate: "",
                held: false,
                discount: 0,
                addedDiscount: false

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
                firstName:"A",
                lastName: "B",
                email: "A.B@example.com",
                password: "AB"
            },{
                idUser:2,
                firstName:"a",
                lastName: "a",
                email: "a",
                password: "a"
            },{
                idUser:3,
                firstName:"E",
                lastName: "F",
                email: "E.F@example.com",
                password: "EF"
            },{
                idUser:4,
                firstName:"G",
                lastName: "H",
                email: "G.H@example.com",
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
                firstName: "",
                lastName: "",
                email: "",
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
            setAppDate: "",

            UserToDelete: "",
            userToDisplay: {
                idUser:0,
                firstName:"",
                lastName: "",
                email: "",
                password: ""
            }



        };

    }


    setAuthorization()
    {
        this.client.auth(this.state.currentUser.email, this.state.currentUser.password);
        this.client.setAuthorization();
    }


    addUser(email, firstName, lastName, password){
        this.restClient.createUser(email, firstName, lastName, password).then(user => {
            this.state = {
                ...this.state,
                appUsers: this.state.appUsers.concat([user])
            };
        });
        this.emit("change", this.state);
    }



     addEmployee(firstName, lastName, password){
        this.restClient.createEmployee(firstName, lastName, password).then(user => {
            this.state = {
                ...this.state,
                employee: this.state.employee.concat([user])
            };
        });
        this.emit("change", this.state);
    }



    deleteUser(){
        let idOfUserToDelete = this.state.appUsers[this.state.UserToDelete].idUser;
        this.restClient.deleteClient(idOfUserToDelete);
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
        const currentAppointment = this.state.appoint[idAppoint];
        this.restClient.markApp(currentAppointment).then(() => {
                this.loadAllAppointsEmpl();
        }

        );




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


    login()
    {
        this.restClient.setAuthorization(this.state.currentUser.email, this.state.currentUser.password);
        this.restClient.login(this.state.currentUser.email, this.state.currentUser.password).then(response =>{
            if (response.status === 200)
            {
                if(this.state.currentUser.email.includes("pets"))
                {
                    window.location.assign("#/empl-start");
                    this.restClient.loadAllUsers(this.state.currentUser.email, this.state.currentUser.password).then(allUs => {
                        this.loadAllAppointsEmpl();
                        this.state = {
                            ...this.state, appUsers: allUs
                        }
                    })

                }
                else
                {
                    window.location.assign("#/cl-start");
                    this.restClient.getUserId(this.state.currentUser.email).then(id => {
                        this.state = {
                            ...this.state,
                            currentUser:{ ...this.state.currentUser, idUser:id }
                        }
                    })
                }

            }
            else
            {
                window.location.assign("#/");
            }
        })
    }


    loadAllAppointsEmpl(){
        return this.restClient.loadAllAppointEmpl(this.state.currentUser.email, this.state.currentUser.password).then(appoint =>{

            this.state = {
                ...this.state, appoint: appoint
            };
            this.emit("change", this.state);
        })
    }


    loadAllAppForClient(){
        return this.restClient.loadAllAppointForClient(this.state.currentUser.email, this.state.currentUser.password).then(usersAppoints =>{

            this.state = {
                ...this.state, usersAppoints: usersAppoints
            };
            this.emit("change", this.state);
        })
    }



    loadAllReviews(){
        return this.restClient.loadAllReviews(this.state.currentUser.email, this.state.currentUser.password).then(reviews =>{

            this.state = {
                ...this.state, reviews: reviews
            };
            this.emit("change", this.state);
        })
    }


    loadAllReviewsForClient(){
        return this.restClient.loadAllReviewsForClient(this.state.currentUser.email, this.state.currentUser.password).then(usersReviews =>{

            this.state = {
                ...this.state, usersReviews: usersReviews
            };
            this.emit("change", this.state);
        })
    }



    loadAllClients(){
        return this.restClient.loadAllUsers(this.state.currentUser.email, this.state.currentUser.password).then(appUsers =>{

            this.state = {
                ...this.state, appUsers: appUsers
            };
            this.emit("change", this.state);
        })
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
        newUserAppointment["idUser"]    =   this.state.currentUser.idUser;
        newUserAppointment["user"]      =   this.state.currentUser.firstName;
        newUserAppointment["typeId"]    =   this.state.setAppType;
        newUserAppointment["duration"]  =   this.state.appType.find((x) => x.idAppType == this.state.setAppType).duration;
        newUserAppointment["price"]     =   this.state.appType.find((x) => x.idAppType == this.state.setAppType).price;
        newUserAppointment["dueDate"]   =   this.state.setAppDate;

        this.restClient.createAppoint(newUserAppointment);


        this.emit("change", this.state);
    }




    addReview() {
        let newUserReview = {};
        newUserReview["idReview"]  = ++this.state.idReviewRemember;
        newUserReview["idUser"]    = this.state.currentUser.idUser;
        newUserReview["text"]      = this.state.setReviewText;
        newUserReview["state"]     = "decline";

        this.restClient.createReview(newUserReview);
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
        debugger
        this.state = {
            ...this.state,
            clientByEmail : this.state.appUsers.find( x => x.emailAddress === (this.state.searchedText.searchedText)  )
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

