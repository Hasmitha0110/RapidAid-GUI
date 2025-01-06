import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return(
        <nav className="navbar">
            <div className="logo">
                <img src="src\assets\logo.png" alt="RapidAid Logo" />
                <div className="logotext">
                    <h1>RapidAid</h1>
                    {/* <h6>Disaster Management &<br/>Emergency Responce System</h6> */}
                </div>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li>
                    <Link to="/incidents" className="nav-link">Incidents</Link>
                </li>
                <li>
                    <Link to="/resources" className="nav-link">Resources</Link>
                </li>
                <li>
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
            </ul>
            <div className="prof">
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </nav>
    );
};

export default NavBar;








