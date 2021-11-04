import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Service from '../Services/Service';

const PackageDetails = () =>
{
    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(() =>
    {
        fetch('https://powerful-wildwood-02565.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])
    // ----------user add---------

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>
    {
        console.log(data);
        axios.post('https://powerful-wildwood-02565.herokuapp.com/users', data)
            .then(res =>
            {
                if (res.data) {
                    alert('added successfully');
                    reset();
                }
            })
    };
    // -----------------------------------
    const { packagedetailsId } = useParams();
    console.log(packagedetailsId);
    return (

        <div className="container">
            <h1 className="py-4 bg-dark text-info">Packages Details{packagedetailsId}</h1>
            <div className="row my-5">
                <div className="col m-auto">
                    <div className="service-container m-auto py-4 text-white">
                        {
                            services.filter(packagedetail =>
                                packagedetail.id == packagedetailsId).map(service => <Service
                                    key={service.id}
                                    service={service}
                                ></Service>)
                        }

                    </div>
                </div>

                <div className="col-xs-12 col-sm-7 pt-5 pb-2 h-auto bg-secondary form-border">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="w-100 my-1 p-2 rounded" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                        <input className="w-100 my-1 p-2 rounded" {...register("email", { required: true, maxLength: 20 })} placeholder="Email" />
                        <textarea className="w-100 p-2 rounded" {...register("description")} placeholder="Description" />
                        <input className="w-100 p-2 mb-2 rounded" {...register("location")} placeholder="Location" />
                        <input className="w-100 p-2 rounded" type="day" {...register("day")} placeholder="Day & Date" />
                        <input className="btn btn-outline-warning my-2 fw-bold rounded-pill px-5" type="submit" value="Confirm Booking" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;
