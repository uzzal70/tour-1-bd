import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import PackageDetails from '../PackageDetails/PackageDetails';
import Myorder from './Myorder';

const Myorders = () =>
{
    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(() =>
    {
        fetch('https://powerful-wildwood-02565.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])
    const { userId } = useParams();
    return (
        <div>
            <h1>My Orders Page</h1>
            <div className="service-container m-auto py-4 text-white">
                {
                    services.filter(packagedetail =>
                        packagedetail.id == userId).map(service => <Myorder
                            key={service.id}
                            service={service}
                        ></Myorder>)
                }

            </div>
        </div>
    );
};

export default Myorders;