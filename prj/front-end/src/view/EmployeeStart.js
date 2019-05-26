import React from "react";

const EmployeeStart = ({  onCreateEmplAcc, onDeleteClAcc, onManageApp, onManageReview, onSeeAppForDate ,searchedText, onChange:onChangeSearchedText, onLogOut}) => (
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
                                <p className="title">  Heellllo  my employee </p>

                            </div>
                            <div className="tile is-child ">

                                <article className="tile is-child">
                                    <p className="control">
                                        <div className="level-left" >
                                            <div  className = "level-item">
                                                <a className="button is-rounded is-focused"
                                                   onClick={onCreateEmplAcc}>Create Employee Account
                                                </a>
                                            </div>
                                        </div>
                                    </p>

                                    <p className="control">
                                        <div className="level-left" >
                                            <div  className = "level-item">
                                                <a className="button is-rounded is-focused"
                                                   onClick={onDeleteClAcc}>Manage Client Accounts!
                                                </a>
                                            </div>
                                        </div>
                                    </p>

                                    <p className="control">
                                        <div className="level-left" >
                                            <div  className = "level-item">
                                                <a className="button is-rounded is-focused"
                                                   onClick={onManageApp}>Manage appointments!
                                                </a>
                                            </div>
                                        </div>
                                    </p>


                                    <p className="control">
                                        <div className="level-left" >
                                            <div  className = "level-item">
                                                <a className="button is-rounded is-focused"
                                                   onClick={onManageReview}>Manage Reviews!
                                                </a>
                                            </div>
                                        </div>
                                    </p>

                                    <p className="control">
                                        <div className="level-left" >
                                            <div  className = "level-item">
                                                <a className="button is-rounded is-focused"
                                                   onClick={onSeeAppForDate}>Generate rapport for  date!
                                                </a>
                                            </div>
                                        </div>
                                    </p>


                                    <article className="tile is-child">
                                    <p className="control">
                                        <div className="level-left" >
                                            <div  className = "level-item">
                                                <input
                                                    className="input is-rounded is-focused" type="text" placeholder="Enter date"
                                                    value={searchedText} onChange = {e => onChangeSearchedText("searchedText", e.target.value)}/>
                                            </div>
                                        </div>
                                    </p>




                                </article>
                                </article>



                            </div>
                        </div>

                    </div>
                </div>

            </div>




        </section>










    </div>

);

export default EmployeeStart;