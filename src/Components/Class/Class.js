import React from 'react';
import Header from '../Header/Header';
import './Class.scss'

const Class = () => {
    return (
        <div>

            {/* hero */}
            <div class="jumbotron jumbotron-fluid">
                <h1 class="text-center display-4">Our Classes</h1>
            </div>

            <div class="container programs">

                <div class="row">
                    <div class='col-md-5 yoga'>
                        <a href="/class-description/yoga">Yoga Training</a>
                    </div>

                    <div class='col-md-5 cardio'>
                        <a href="/class-description/cardio">Cardio training</a>
                    </div>
                </div>

                <div class="row">
                    <div class='col-md-5 psycho'>
                        <a href="/class-description/psycho">Psycho Training</a>
                    </div>

                    <div class='col-md-5 self'>
                        <a href="/class-description/self-defence">Self-Defence</a>
                    </div>
                </div>

                <div class="row">
                    <div class='col-md-5 advanced'>
                        <a href="/class-description/advanced-gym">Advanced Gym</a>
                    </div>

                    <div class='col-md-5 strength'>
                        <a href="/class-description/strength-training">Strength Training</a>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Class;