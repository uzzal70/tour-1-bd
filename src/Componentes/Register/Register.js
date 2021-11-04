import React, { useState } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';

const Register = () =>
{
    const { registerUsingEmail } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handelRegistration = e =>
    {
        e.preventDefault();
        console.log('registration');
        registerUsingEmail(email, password)
        // .then(result =>
        // {
        history.push(redirect_url)
        // })
    }
    const handelEmailchange = e =>
    {
        setEmail(e.target.value);
    }
    const handelPasswordchange = e =>
    {
        setPassword(e.target.value);
    }
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <div className="about-bg py-5 text-white fw-bold">
                <h1>You are new Tourist please create an account </h1>
            </div>
            <div className="container">
                <div className="col-xs-4 col-lg-4 m-auto mt-5 p-3 bg-info rounded-3">
                    <form onSubmit={handelRegistration}>
                        <input className='w-100 p-1 mb-2' type="name" name="" id="" placeholder="Your Name" /><br />
                        <input onBlur={handelEmailchange} className='w-100 p-1 mb-2' type="email" name="" id="" placeholder="Your Email" /><br />
                        <input onBlur={handelPasswordchange} className='w-100 p-1 mb-2' type="Password" name="" id="" placeholder="Password" /><br />
                        <input className='w-50 rounded-pill btn-outline-secondary shadow mb-2' type="submit" value="Register" />
                    </form>
                    <hr />
                    <p><strong>All redy have an account to </strong> <Link className="text-white" to="/login">LogIn</Link> </p>
                    <button className="btn-regular btn-outline-primary shadow rounded-pill w-50" onClick={signInUsingGoogle}> Google Sign In</button>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Register;