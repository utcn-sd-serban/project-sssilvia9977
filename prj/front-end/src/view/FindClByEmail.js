import React from "react";
import model from "../model/model"
const FindClByEmail = ({ clientByEmail , onViewDetails, onBack, onLogOut}) => (


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
                                    <a className="navbar-item is-active"

                                       onClick={onBack}>Back

                                    </a>
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
                                <p className="title">Searched by Email</p>

                            </div>


                        </div>
                        <div className="tile is-parent">
                            <div className="tile is-child ">

                                <table className="table  is-striped " >
                                    <thead>
                                    <tr>
                                        <th>Email</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>View Details</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {
                                        clientByEmail.map((user, index) => (
                                            <tr key={index}>
                                                <td>{user.email}</td>
                                                <td>{user.firstName}</td>
                                                <td>{user.lastName}</td>
                                                <td>

                                                    <a className="button is-rounded is-focused"
                                                       onClick={() => onViewDetails(index)}>Details!
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

export default FindClByEmail;

/*




 */