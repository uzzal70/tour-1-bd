import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Services/Service';
import './Home.css';
import '../Services/Services.css'

const Home = () =>
{
    const [services, setServices] = useState([]);
    useEffect(() =>
    {
        fetch('https://powerful-wildwood-02565.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div >
            <div className="banar container-fluid">
                <div className="m-auto pt-5">
                    <h2 className="text-info m-auto text-uppercase">Enjoy your<br /></h2>
                    <h1> <span className="text-color text-uppercase">Holiday </span></h1>
                    <h2> <span className="text-white text-uppercase">with our Agency </span></h2>
                </div>
            </div>
            <div className="p-0 m-0 bg-danger py-2 mt-2">
                <h2 className="text-uppercase">Our Packages</h2>
            </div>
            <div className="my-5">
                <div className="container m-auto">
                    <Row className="service-container m-auto py-4">
                        {
                            services.slice(0, 6).map(service => <Service
                                key={service.id} service={service}></Service>)
                        }
                    </Row>
                </div>
            </div>
            <div className="container bg-tourist-guid py-5">
                <h1>Tourist Guide Team Mambers</h1>
                <div className="row team pt-5">
                    <div className="col m-auto">
                        <img src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg" alt="" className="img-fluid rounded-circle border border-4 border-info" />
                        <h5>Atif Aslam</h5>
                    </div>
                    <div className="col m-auto">
                        <img src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=" alt="" className="img-fluid rounded-circle border border-4 border-info" />
                        <h5>Kalam Hosan</h5>
                    </div>
                    <div className="col m-auto">
                        <img src="https://image.shutterstock.com/image-photo/handsome-mid-adult-man-smiling-260nw-710258758.jpg" alt="" className="img-fluid rounded-circle border border-4 border-info" />
                        <h5>Maruf Hque</h5>
                    </div>
                    <div className="col m-auto">
                        <img src="https://media-eng.dhakatribune.com/uploads/2019/11/tahsan-web-1574170968575.gif" alt="" className="img-fluid rounded-circle border border-4 border-info" />
                        <h5>Arif Islam</h5>
                    </div>

                </div>
            </div>
            <div className="container my-5">
                <div className="row p-0 m-0 d-flex">
                    <div className="col-xs-12 col-sm-6 px-3 m-0 m-auto">
                        <h2 className="text-info">Popular Tourist Spots</h2>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 g-4">

                        <div class="col">
                            <div className="card h-100">
                                <img src="http://tourtoday.com.bd/wp-content/uploads/2017/03/bicnakandi-sylhet.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-white">Bichanakandi – Sylhet</h5>
                                    <p class="card-text">Bichanakandi is one of outstanding geographical tourist place between India and Bangladesh bo...</p>
                                    <button className="rounded-pill">Read more</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="card h-100">
                                <img src="http://tourtoday.com.bd/wp-content/uploads/2017/04/Dream-Holyday-Park-Narsingdi-.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-white">Dream Holiday Park – Narsingd</h5>
                                    <p class="card-text">Dream Holiday Park in Narsingdi, Really you will enjoy here international standard service...</p>
                                    <button className="rounded-pill">Read more</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="card h-100">
                                <img src="http://tourtoday.com.bd/wp-content/uploads/2017/04/Tamanna-World-Family-Park.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-white">Tamanna World Family Park </h5>
                                    <p class="card-text">Tamanna World Family Park is most popular and famous park in Dhaka which is located beside...</p>
                                    <button className="rounded-pill">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <br /><br />
            </div>
        </div>
    );
};

export default Home;