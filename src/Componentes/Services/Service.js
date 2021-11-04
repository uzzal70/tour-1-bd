import React from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router';
import './Services.css';

const Service = (props) =>
{
    const { picture, name, tourday, description, cost, location, id } = props.service;

    return (
        <div className="row">
            <div className="card shadow text-center p-0 m-0 pb-3 text-white">
                <img src={picture} alt="" className="m-auto img-fluid" style={{ width: '100%', height: '200px', }} />
                <h4 className="text-black text-start ps-2">{name}</h4>
                <h4 className="text-black text-start ps-2">{tourday}</h4>
                <h6 className="text-start ps-2"><strong>{'>>'}</strong> {description}</h6>
                <p className="text-secondary">Location: {location}</p>
                <h5 style={{ color: 'crimson' }}>Package: $ {cost}</h5>
                <Link to={`/packagedetails/${id}`}>
                    <button
                        className="btn btn-info m-auto w-50 fw-bold">
                        Book Now
                    </button>
                </Link>
                <p>
                    <a href="www.facebook.com"><i className="fab fa-facebook text-primary"></i></a>
                    <a href="www.facebook.com"><i className="fab fa-instagram"></i></a>
                    <a href="www.facebook.com"><i className="fab fa-linkedin"></i></a>
                    <a href="www.facebook.com"><i className="fab fa-whatsapp text-info"></i></a>
                </p>
            </div>

        </div>

    );
};

export default Service;