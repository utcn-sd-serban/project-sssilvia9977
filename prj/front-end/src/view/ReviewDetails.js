import React from "react";

const ReviewDetails = ({ clientId,text, state, onBack, onLogOut,onChangeState}) => (

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


                            <p className="title is-1">Review</p>

                            <p className="title is-2 is-spaced">User id:</p>
                            <span className="subtitle is-3"> { clientId }</span>
                            <br />

                            <p className="title is-2 is-spaced">Review: </p>
                            <span className="subtitle is-3"> { text }</span>
                            <br />
                            <br />


                            <p className="title is-2 is-spaced">State</p>
                            <span className="subtitle is-3"> { state }</span>
                            <br />
                            <br />




                        </div>


                    </div>

                    <div className="tile is-parent">
                        <article className="tile is-child notification is-success">
                            <div className="content">
                                <a className="button is-rounded is-focused"
                                   onClick={onChangeState}>Change State!
                                </a>

                            </div>
                        </article>
                    </div>

                </div>
            </div>



        </section>


    </div>



);


export default ReviewDetails;