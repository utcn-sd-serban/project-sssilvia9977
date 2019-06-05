import React from "react";

const Login = ({ onCreateUser, onLogin, onChange, approvedReviews }) => (
    <div >


        <section className="hero is-fullheight is-primary is-bold">
            <div className="hero-body">

                <div className="container is-centered">


                    <div className="tile is-ancestor">
                        <div className="tile is-4 is-vertical is-parent">
                            <div className="tile is-child ">
                                <p className="title"> Log in </p>

                            </div>
                            <div className="tile is-child ">

                                <article className="tile is-child">
                                    <p className="control">
                                        <div className="level-left" >
                                            <div  className = "level-item">
                                                <input
                                                    className="input is-rounded is-focused" type="text" placeholder="Enter email address"
                                                    onChange={ e => onChange("email", e.target.value)  }/>
                                            </div>
                                        </div>
                                    </p>

                                    <p className="control">
                                        <div className="level-left" >
                                            <div  className = "level-item">
                                                <input
                                                    className="input is-rounded is-focused" type="password" placeholder="Enter password"
                                                    onChange={e => onChange("password", e.target.value)}/>
                                            </div>
                                        </div>
                                    </p>

                                    <p className="control">
                                        <div className="level-left" >
                                            <div  className = "level-item">
                                                <a className="button is-rounded is-focused"
                                                   onClick={onLogin}>Log in!
                                                </a>
                                            </div>
                                        </div>
                                    </p>

                                    <p className="control">
                                        <div className="level-left" >
                                            <div  className = "level-item">
                                                <a className="button is-rounded is-focused"
                                                   onClick={onCreateUser}>Create Account!
                                                </a>
                                            </div>
                                        </div>
                                    </p>



                                </article>


                            </div>
                        </div>

                    </div>

                </div>


                    <div className="hero-body">

                        <div className=" level-left">


                            <div className="tile is-ancestor">
                                <div className="tile is-4 is-vertical is-parent">
                                    <div className="tile is-child ">
                                        <p className="title has-text-black-ter is-family-primary"> </p>
                                        <p className="subtitle"></p>

                                    </div>

                                </div>
                                <div className="tile is-parent">
                                    <div className="tile is-child ">


                                        </div>



                                </div>
                            </div>

                        </div>
                    </div>





            </div>


        </section>



    </div>

);

export default Login;


/*
<div className="content">
                                            {
                                                approvedReviews.map((r, index) => (
                                                    <li key = {index}>
                                                        {

                                                            <span className=" is-large" > {r.text}  </span>

                                                        }
                                                    </li>
                                                ))
                                            }


                                        </div>
 */