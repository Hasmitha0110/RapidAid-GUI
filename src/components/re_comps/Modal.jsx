import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, title }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user", // Default role
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <button className="close-button" onClick={onClose}>✖</button>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />

          {title === "Sign Up"  && (
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          {/* Role Selector */}
          {(title === "Sign Up" || title === "Login") && (
            <select
              name="role"
              onChange={handleChange}
              value={formData.role}
              required
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          )}

          <button type="submit">{title}</button>
        </form>

        {/* Forgot Password Link */}
        {title === "Login" && (
          <p className="forgot-password">
            <a href="#">Forgot Password?</a>
          </p>
        )}

        {/* Social Media Login */}
        <div className="social-login">
          <p>Or log in with:</p>
          <button className="social-button google">Google</button>
          <button className="social-button facebook">Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
