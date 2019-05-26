import React from "react";

const CreateEmployee = ({  firstName, lastName, password, onCreate, onChange , onBack, onLogOut}) => (



    <div >




        <section className="hero is-fullheight is-primary is-bold">

            <section className="hero is-small  is-bold">
                <div className="hero-body">

                    <div className="container is-centered">


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




                    </div>
                </div>



            </section>



            <div className="hero-body">

                <div className="container is-centered">


                    <div className="tile is-ancestor">
                        <div className="tile is-4 is-vertical is-parent">
                            <div className="tile is-child ">
                                <p className="title">  Create an employee account </p>

                            </div>
                            <div className="tile is-child ">

                                <article className="tile is-child">
                                    <p className="control">
                                        <div className="level-left" >
                                            <div  className = "level-item">
                                                <input
                                                    className="input is-rounded is-focused" type="text" placeholder="Enter firstName"
                                                    value={firstName} onChange={ e => onChange("firstName", e.target.value)  }/>

                                            </div>
                                        </div>
                                    </p>

                                    <p className="control">
                                        <div className="level-left" >
                                            <div  className = "level-item">
                                                <input
                                                    className="input is-rounded is-focused" type="text" placeholder="Enter lastName"
                                                    value={lastName} onChange={e => onChange("lastName", e.target.value)}/>
                                            </div>
                                        </div>
                                    </p>



                                    <p className="control">
                                        <div className="level-left" >
                                            <div  className = "level-item">
                                                <input
                                                    className="input is-rounded is-focused" type="text" placeholder="Enter password"
                                                    value={password} onChange={e => onChange("password", e.target.value)} />
                                            </div>
                                        </div>
                                    </p>

                                    <p className="control">
                                        <div className="level-left" >
                                            <div  className = "level-item">
                                                <a className="button is-rounded is-focused"
                                                   onClick={onCreate}>Create!
                                                </a>
                                            </div>
                                        </div>
                                    </p>

                                </article>


                            </div>
                        </div>

                    </div>
                </div>

            </div>




        </section>










    </div>

);

export default CreateEmployee;