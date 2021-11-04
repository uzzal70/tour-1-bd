import React, { useState } from 'react';
import './login.css';
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';


const Login = () =>
{
    const { signInUsingGoogle } = useAuth();
    const { userLogin } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handelGoogleLogin = () =>
    {
        signInUsingGoogle()
            .then(result =>
            {
                history.push(redirect_url)
            })
    }

    // User login email and password 
    const handelUserLogin = e =>
    {
        e.preventDefault();
        userLogin(email, password)
        // .then(result =>
        // {
        history.push(redirect_url)
        // })
    }
    const userHandelEmailchange = e =>
    {
        setEmail(e.target.value);
    }
    const userHandelPasswordchange = e =>
    {
        setPassword(e.target.value);
    }
    return (
        <div>
            <div className="about-bg py-5 text-white">
                <h1>Log In </h1>
            </div>
            <div className="container">
                <div className="col-xs-4 col-lg-4 m-auto mt-5 p-3 bg-success shadow rounded-3">
                    <form onSubmit={handelUserLogin}>
                        <input onBlur={userHandelEmailchange} className='w-100 p-1 mb-2' type="email" name="" id="" placeholder="Your Email" /><br />
                        <input onBlur={userHandelPasswordchange} className='w-100 p-1 mb-2' type="Password" name="" id="" placeholder="Password" /><br />
                        <input className='w-50 rounded-pill btn-outline-secondary shadow mb-2' type="submit" value="Login" />
                    </form>
                    <hr />
                    <p><strong>New Tourist to</strong> <Link className="text-white" to="/register"> Create account</Link> </p>
                    <button
                        className="btn-regular rounded-pill w-50 btn-outline-primary shadow"
                        onClick={handelGoogleLogin}>
                        <i className="fab fa-google">&nbsp; Google Sign In</i>
                    </button>
                    <hr />
                </div>
            </div>

        </div>
    );
};

export default Login;