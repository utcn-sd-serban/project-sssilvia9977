import React from "react";

const ClSeeAppDetails = ({ typeName, typePrice, typeDuration, appDueDate, appWasHeld, appDiscountPrice, appUsedDiscount, onBack, onLogOut}) => (

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


                            <p className="title is-1">This is the appointment:</p>



                            <p className="title is-2 is-spaced">Due Date:</p>
                            <span className="subtitle is-3"> { appDueDate }</span>
                            <br />
                            <br />


                            <p className="title is-2 is-spaced">Type Name:</p>
                            <span className="subtitle is-3"> { typeName }</span>
                            <br />

                            <p className="title is-2 is-spaced">Price:</p>
                            <span className="subtitle is-3"> { typePrice }</span>
                            <br />
                            <br />


                            <p className="title is-2 is-spaced">Duration:</p>
                            <span className="subtitle is-3"> { typeDuration }</span>
                            <br />
                            <br />


                            <p className="title is-2 is-spaced">Was held?</p>
                            <span className="subtitle is-3"> { appWasHeld }</span>
                            <br />
                            <br />


                            <p className="title is-2 is-spaced">Discount:</p>
                            <span className="subtitle is-3"> { appDiscountPrice }</span>
                            <br />
                            <br />



                            <p className="title is-2 is-spaced">Did you use the discount?</p>
                            <span className="subtitle is-3"> { appUsedDiscount }</span>
                            <br />
                            <br />

                        </div>


                    </div>



                </div>
            </div>



        </section>


    </div>



);


export default ClSeeAppDetails;

