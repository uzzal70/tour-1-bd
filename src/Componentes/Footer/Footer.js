import React from 'react';
import './Footer.css';
const Footer = () =>
{
    return (
        <div className="bg-footer mt-5">
            <footer>
                <div className="container">
                    <div className="row pt-5 pb-4">
                        <div className="col-md-6 col-xs-12 col-sm-6">
                            <h3> Provided Services</h3>
                            <div className="d-flex justify-content-around">
                                <ul className="provided-services text-start">
                                    <li>Photograph</li>
                                    <li>Tourism</li>
                                    <li>Booking</li>
                                </ul>
                                <ul className="provided-services text-start">
                                    <li>TripAdvisor</li>
                                    <li>Agency</li>
                                    <li>Services</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-12 col-sm-6">
                            <h3>Contact Us</h3>
                            <p>
                                Adress: 02 road, Shymoli, Dhaka
                                <br />Phone: (+88) 123 456 123
                                <br />Email: uzzalcse70@gmail.com
                            </p>

                        </div>
                        <div className="col-md-3 col-xs-12 col-sm-6">
                            <h3>Opening Hours</h3>
                            <p>
                                All Days 10am to 10pm
                            </p>
                        </div>
                        <hr />
                        <p>Tour Of BD Copyright &copy; 2021</p>
                    </div>
                </div>
            </footer >
        </div >
    );
};

export default Footer;