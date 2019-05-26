import React from "react";
import model from "../model/model"
const GenerateRaportAppDate = ({ appointByDate , onBack, onLogOut}) => (


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
                                <p className="title">Searched by date</p>

                            </div>


                        </div>
                        <div className="tile is-parent">
                            <div className="tile is-child ">

                                <table className="table  is-striped " >
                                    <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Type Name</th>
                                        <th>Duration</th>
                                        <th>Price</th>
                                        <th>Due Date</th>
                                        <th>Held</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        appointByDate.map((app, index) => (
                                            <tr key={index}>
                                                <td>{app.user}</td>
                                                <td>{app.typeName}</td>
                                                <td>{app.duration}</td>
                                                <td>{app.price}</td>
                                                <td>{app.dueDate}</td>
                                                <td>{app.held.toString()}</td>
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

export default GenerateRaportAppDate;

/*




 */