import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from './Service';
import './Services.css';

const Services = () =>
{

    const [services, setServices] = useState([]);
    useEffect(() =>
    {
        fetch('https://powerful-wildwood-02565.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <div className="service-banar py-5 col-sm-12 m-auto">
                <h1>Top 6 best tourisum city of <br /> Bangladesh <br /></h1>

            </div>

            <div className="bg-black  mt-4 container d-flex justify-content-center">
                <Nav className="text-center">
                    <Link className="nav-link text-white" to="/myorder">
                        My Orders
                    </Link>
                    <Link className="nav-link text-white" to="/orderreview">
                        Orders Review
                    </Link>
                    <Link className="nav-link text-white" to="/addnewservice">
                        Add New Service
                    </Link>
                </Nav>
            </div>
            <div className="container">
                <div className="row">
                    <div className="service-container m-auto py-4">
                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </div>

                </div >
            </div>
        </div>
    );
};

export default Services;