import React, {useState} from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
import Button from "../re_comps/Button";
import Modal from "../re_comps/Modal";


const NavBar = () => {
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isSignupOpen, setSignupOpen] = useState(false);

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
            <div>
                <Button className="login" label="Login" onClick={() => setLoginOpen(true)}/>
                <Button className="signup" label="Sign Up" onClick={() => setSignupOpen(true)}/>
            </div>

            <Modal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} title="Login">
                <form>
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
            </Modal>

            <Modal isOpen={isSignupOpen} onClose={() => setSignupOpen(false)} title="Sign Up">
                <form>
                    <input type="text" placeholder="Username" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Sign Up</button>
                </form>
            </Modal>

        </nav>
    );
};

export default NavBar;








