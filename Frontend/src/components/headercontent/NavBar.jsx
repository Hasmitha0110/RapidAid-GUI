import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
import Button from "../re_comps/Button";
import Modal from "../re_comps/Modal";


const NavBar = () => {
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isSignupOpen, setSignupOpen] = useState(false);
    const [user, setUser] = useState(null);

    // Check for existing session on component mount
    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if(savedUser) setUser(JSON.parse(savedUser));
    }, []);

    const handleAuthSuccess = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <nav className="navbar">
            {/* Logo and regular nav links */}
            <div className="logo">
                <img src="src/assets/logo.png" alt="RapidAid Logo" />
                <div className="logotext">
                    <h1>RapidAid</h1>
                </div>
            </div>
            
            <ul className="nav-links">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/incidents" className="nav-link">Incidents</Link></li>
                <li><Link to="/resources" className="nav-link">Resources</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>

            {/* Authentication Section */}
            <div className="auth-section">
                {user ? (
                    <div className="user-info">
                        <span>Welcome, {user.name} <small>({user.role})</small></span>
                        
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div className="auth-buttons">
                        <Button className="login" label="Login" onClick={() => setLoginOpen(true)}/>
                        <Button className="signup" label="Sign Up" onClick={() => setSignupOpen(true)}/>
                    </div>
                )}
            </div>

            {/* Modals */}
            <Modal 
                isOpen={isLoginOpen} 
                onClose={() => setLoginOpen(false)}
                title="Login"
                onAuthSuccess={handleAuthSuccess}
            />
            <Modal 
                isOpen={isSignupOpen} 
                onClose={() => setSignupOpen(false)}
                title="Sign Up"
                onAuthSuccess={handleAuthSuccess}
            />
        </nav>
    );
};

export default NavBar;

