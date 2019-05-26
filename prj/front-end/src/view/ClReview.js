import React from "react";
import "bulma/css/bulma.css";


const ClReview = ({  onChangeReviewText, onCreate,usersReviews,onViewDetails, onBack , onLogOut}) => (
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
                                <p className="title">Add a review</p>


                            </div>
                            <div className="tile is-child ">

                                <article className="tile is-child">
                                    <p className="control">
                                        <div className="level-left" >
                                            <div  className = "level-item">


                                                <textarea className="textarea is-primary Medium textarea"
                                                          placeholder="Review Text here"
                                                          onChange = {e => onChangeReviewText("setReviewText", e.target.value)}></textarea>


                                            </div>
                                        </div>



                                    </p>

                                    <p className="control">
                                        <a className="button is-rounded is-focused"
                                           onClick={onCreate}>Create Review
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
                                        <th>Text</th>
                                        <th>State</th>
                                        <th>Edit or See </th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {
                                        usersReviews.map((rev, index) => (
                                            <tr key={index}>
                                                <td>{rev.text}</td>
                                                <td>{rev.state}</td>
                                                <td>

                                                    <a className="button is-rounded is-focused"
                                                       onClick={() => onViewDetails(index)}>See more!
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

export default ClReview ;