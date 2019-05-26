import React from "react";
import "bulma/css/bulma.css";


const ClAddAppoint = ({  appType,onChangeAppType, onChangeAppDate, onCreate, onBack , onLogOut}) => (
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
                                <p className="title">Add an appointment</p>
                                <p className="subtitle">Enter the idd dof the app type and the date</p>


                            </div>
                            <div className="tile is-child ">

                                <article className="tile is-child">
                                    <p className="control">
                                        <div className="level-left" >
                                            <div  className = "level-item">
                                                <input
                                                    className="input is-rounded is-focused" type="text" placeholder="App type ID"
                                                    onChange = {e => onChangeAppType("setAppType", e.target.value)}/>
                                            </div>
                                        </div>


                                        <div className="level-left" >
                                            <div  className = "level-item">
                                                <input
                                                    className="input is-rounded is-focused" type="text" placeholder="Date yyyy-mm-dd hh:mm"
                                                    onChange = {e => onChangeAppDate("setAppDate", e.target.value)}/>
                                            </div>
                                        </div>

                                    </p>

                                    <p className="control">
                                        <a className="button is-rounded is-focused"
                                           onClick={onCreate}>Create
                                        </a>
                                    </p>

                                </article>


                            </div>
                        </div>
                        <div className="tile is-parent">
                            <div className="tile is-child ">

                                <table className="table  is-striped " >
                                    <thead>
                                    <tr>
                                        <th>Type ID</th>
                                        <th>Type Name</th>
                                        <th>Duration</th>
                                        <th>Price</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {
                                        appType.map((app, index) => (
                                            <tr key={index}>
                                                <td>{app.idAppType}</td>
                                                <td>{app.typeName}</td>
                                                <td>{app.duration}</td>
                                                <td>{app.price}</td>


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

export default ClAddAppoint ;