import React from 'react';
import about_img from "../../power-x-gym/Image & Icon/wells-chan-H-vAxuWxmi8-unsplash.jpg";
import abs from '../../power-x-gym/Image & Icon/Group 87.png'
import cycle from '../../power-x-gym/Image & Icon/Group 88.png'
import gift from '../../power-x-gym/Image & Icon/gift-2.png'
import './Home.scss'

const Home = () => {
    return (
        <div>
            {/* hero */}
            <div class="jumbotron jumbotron-fluid">
                {/* <h1 class="display-4">Power-X</h1> */}
                <div class="container">
                    <p class="lead">THE BEST FITNESS STUDIO IN TOWN</p>
                    {/* <hr class="my-4"/> */}
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a class="btn btn-primary btn-lg" href="/class" role="button">Join Us</a>
                </div>
                
            </div>


            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 progression">
                            <h2>Progression</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="col-md-3 workout">
                            <h2>Workout</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="col-md-3 nutrition">
                            <h2>Nutrition</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* about */}
            <div class="container about">
                <div class="row">
                    <div class="col-md-6">
                        <img src={about_img} class="rounded float-left" alt="..."/>
                    </div>
                    <div class="col-md-6">
                        <h1>About Us</h1>
                        <h2>We are here to dream</h2>
                        <h4>Our team is here to serve you</h4>
                    </div>
                </div>
            </div>

            {/* why choose us */}
            <div className='container why_us'>
                <h1 className='text-center'>Why Choose Us</h1>

                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src={abs} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5>Free Fitness Training</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <img src={cycle} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5>Tons of Cardio and Strength</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <img src={gift} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5>No Commitment Memberships</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;