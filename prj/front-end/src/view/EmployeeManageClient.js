import React from "react";
import "bulma/css/bulma.css";


const EmployeeManageClient = ({ onChange: onChangeSearchedText, appUsers ,onViewDetails , onSearchClientByEmail ,searchedText, onBack, onLogOut}) => (


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
                                <p className="title">All the users are here</p>
                                <p className="subtitle">Do what you want</p>


                            </div>
                            <div className="tile is-child ">

                                <article className="tile is-child">
                                    <p className="control">
                                        <div className="level-left" >
                                            <div  className = "level-item">
                                                <input
                                                    className="input is-rounded is-focused" type="text" placeholder="Search email"
                                                    value={searchedText} onChange = {e => onChangeSearchedText("searchedText", e.target.value)}/>
                                            </div>
                                        </div>
                                    </p>

                                    <p className="control">
                                        <a className="button is-rounded is-focused"
                                           onClick={onSearchClientByEmail}>Search by email
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
                                        <th>idUser</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Pass</th>
                                        <th>View Details</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {
                                        appUsers.map((user, index) => (
                                            <tr key={index}>
                                                <td>{user.idUser}</td>
                                                <td>{user.firstName}</td>
                                                <td>{user.lastName}</td>
                                                <td>{user.email}</td>
                                                <td>{user.password}</td>
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

export default EmployeeManageClient;