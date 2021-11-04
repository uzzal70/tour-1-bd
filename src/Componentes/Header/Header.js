import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./Header.css";

const Header = () =>
{
    const { user, logOut } = useAuth();
    return (
        <Navbar className="bg-header shadow text-white" collapseOnSelect expand="lg" sticky="top">
            <Container className="d-flex">
                <div className="justify-content-start">
                    <NavLink className="Navbar-brand text-decoration-none" to="/"><span className="text-white fw-bold"><h3 className="border border-3 border-white p-1">Tour 1 BD</h3></span></NavLink>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div className="justify-content-end">
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto">
                            <NavLink className="nav-link text-white" to="/Home">Home</NavLink>
                            <NavLink className="nav-link text-white" to="/Services">Packages</NavLink>
                            <NavLink className="nav-link text-white" to="/AboutUs">About us</NavLink>
                            <NavLink className="nav-link text-white" to="/Photograph">Photograph</NavLink>
                            <span style={{ color: 'crimson', fontSize: '20px' }} className="m-auto fw-bold px-2" >{user.displayName}</span>
                            {
                                user.email ?
                                    <button onClick={logOut} className="bg-danger rounded-pill btn-padding px-3 m-auto">LogOut</button>
                                    :
                                    <NavLink
                                        className="nav-link" to="/Login"><span className="btn-danger rounded-pill px-3 pb-1 ">LogIn</span>
                                    </NavLink>}

                            {/* <NavLink className="nav-link" to="/Logout"><span className="btn-danger rounded-pill px-3 pb-1 ">LogOut</span></NavLink> */}


                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar >
    );
};

export default Header;


