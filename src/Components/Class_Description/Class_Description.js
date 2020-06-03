import React from 'react';
import tools from '../../power-x-gym/Image & Icon/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg'
import { useParams } from 'react-router-dom';
import './Class_Description.scss'

const Class_Description = () => {
    const {pack}=useParams()
    console.log(pack)
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
                <h1 class="text-center display-4">{pack}</h1>
            </div>

            {/* schedule */}
            <div className="container schedule">
                    <div className='row'>
                    <div className='col-md-6'>
                        <img src={tools} alt=""/>
                    </div>

                    

                    <div className='col-md-6'>
                    <h1 class='text-center'>Class Schedule</h1>

                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="card">
                                <div className="card-body">
                                    <p>Monday</p>
                                    <p>8.00 AM to 9.00 AM</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className="card">
                                <div className="card-body">
                                    <p>Tuesday</p>
                                    <p>10.00 AM to 11.00 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="card">
                                <div className="card-body">
                                    <p>Wednesday</p>
                                    <p>7.00 AM to 8.00 AM</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className="card">
                                <div className="card-body">
                                    <p>Thursday</p>
                                    <p>5.00 PM to 6.00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="card">
                                <div className="card-body">
                                    <p>Friday</p>
                                    <p>6.00 AM to 7.00 AM</p>
                                </div>
                            </div>
                        </div>


                        <div className='col-md-6'>
                            <div className="card">
                                <div className="card-body">
                                    <p>Saturday</p>
                                    <p>7.00 PM to 8.00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    </div>

                    

                </div>
            </div>
            
        </div>
    );
};

export default Class_Description;