import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return(
        <nav className="navbar">
            <div className="logo">
                <h1>RapidAid</h1>
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
            </ul>
        </nav>
    );
};

export default NavBar;








