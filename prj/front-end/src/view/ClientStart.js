import React from "react";
import "bulma/css/bulma.css";


const ClientStart = ({ usersAppoints, onViewDetails, onAddAppoint, onManageReviews  ,onLogOut}) => (
    <div >


        <section className="hero is-fullheight is-primary is-bold">


            <section className="hero is-link is-medium">

                <div className="hero-head">
                    <nav className="navbar">
                        <div className="container">
                            <div className="navbar-brand">

                                         <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                                                <span></span>
                                                 <span></span>
                                                      <span></span>
                                                      </span>
                            </div>
                            <div id="navbarMenuHeroA" className="navbar-menu">
                                <div className="navbar-end">

                                    <a className="navbar-item"

                                       onClick={onLogOut}>Log out

                                    </a>
                                    <a className="navbar-item">

                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

            </section>


            <div className="hero-body">

                <div className="container is-centered">


                    <div className="tile is-ancestor">
                        <div className="tile is-4 is-vertical is-parent">
                            <div className="tile is-child ">
                                <p className="title">All your appointments are here</p>
                                <p className="subtitle">Do what you want</p>
                                <p className="control">
                                    <div className="level-left" >
                                        <div  className = "level-item">
                                            <a className="button is-rounded is-focused"
                                               onClick={onAddAppoint}>Add an appointment
                                            </a>
                                        </div>
                                    </div>
                                </p>

                                <p className="control">
                                    <div className="level-left" >
                                        <div  className = "level-item">
                                            <a className="button is-rounded is-focused"
                                               onClick={onManageReviews}>See your Reviews
                                            </a>
                                        </div>
                                    </div>
                                </p>


                            </div>

                        </div>
                        <div className="tile is-parent">
                            <div className="tile is-child ">

                                <table className="table  is-striped " >
                                    <thead>
                                    <tr>
                                        <th>Type name</th>
                                        <th>Duration</th>
                                        <th>Price</th>
                                        <th>Due Date</th>
                                        <th>View Details</th>
                                    </tr>
                                    </thead>


                                    <tbody>
                                    {
                                        usersAppoints.map((app, index) => (
                                            <tr key={index}>
                                                <td>{app.typeName}</td>
                                                <td>{app.duration}</td>
                                                <td>{app.price}</td>
                                                <td>{app.dueDate}</td>
                                                <td>

                                                    <a className="button is-rounded is-focused"
                                                       onClick={() => onViewDetails(index)}>See more!
                                                    </a>

                                                </td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>


                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </section>



    </div>
);

export default ClientStart ;