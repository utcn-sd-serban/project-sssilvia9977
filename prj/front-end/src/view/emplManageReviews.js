import React from "react";
import "bulma/css/bulma.css";


const EmplManageReviews = ({  reviews, onLogOut, onBack, onViewDetails}) => (


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
                                <p className="title">All the reviews are here</p>
                                <p className="subtitle">Do what you want</p>


                            </div>

                        </div>
                        <div className="tile is-parent">
                            <div className="tile is-child ">

                                <table className="table  is-striped " >
                                    <thead>
                                    <tr>
                                        <th>ReviewID</th>
                                        <th>User</th>
                                        <th>Text</th>
                                        <th>Status</th>
                                        <th>View details</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {
                                        reviews.map((re, index) => (
                                            <tr key={index}>
                                                <td>{re.id}</td>
                                                <td>{re.clientId}</td>
                                                <td>{re.text}</td>
                                                <td>{re.state}</td>
                                                <td>

                                                    <a className="button is-rounded is-focused"
                                                       onClick={() => onViewDetails(index)}>View!
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

export default EmplManageReviews;