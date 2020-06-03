import React from 'react';
import './Price.scss'

const Price = () => {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <h1 className="text-center display-4">Pricing Plans</h1>
            </div>

            <section>
                <div className="container">

                    <h1 className="text-center">Choose your offer that suits you</h1>
                    <div className="row">
                        <div className="col-md-3 advance">
                            <h4>Billed Monthly</h4>
                            <h2>Advanced</h2>
                            <h1>$140</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href='/membership/form/advanced'><button>Buy Now</button></a>
                        </div>
                        <div className="col-md-3 basic">
                            <h4>Billed Monthly</h4>
                            <h2>Basic</h2>
                            <h1>$120</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href='/membership/form/basic'><button>Buy Now</button></a>
                        </div>
                        <div className="col-md-3 beginner">
                            <h4>Billed Monthly</h4>
                            <h2>Beginner</h2>
                            <h1>$90</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href='/membership/form/beginner'><button>Buy Now</button></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Price;