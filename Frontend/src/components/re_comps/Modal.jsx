import React, { useState } from "react";
import axios from "axios";
import "./Modal.css";

const Modal = ({ isOpen, onClose, title, onAuthSuccess }) => {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: "",
        role: "user"
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const endpoint = title === 'Sign Up' ? '/signup' : '/login';
            const response = await axios.post(
                `http://localhost:4000${endpoint}`,
                title === 'Sign Up' ? formData : {
                    username: formData.username,
                    password: formData.password
                }
            );
            onAuthSuccess(response.data);
            onClose();
        } catch (error) {
            alert(error.response?.data?.error || 'Authentication failed');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{title}</h2>
                <button className="close-button" onClick={onClose}>✖</button>
                
                <form onSubmit={handleSubmit}>
                    {title === "Sign Up" && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                        />
                    )}
                    
                    <input
                        type="text"
                        placeholder="Username"
                        value={formData.username}
                        onChange={(e) => setFormData({...formData, username: e.target.value})}
                        required
                    />
                    
                    <input
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        required
                    />

                    {title === "Sign Up" && (
                        <select
                            value={formData.role}
                            onChange={(e) => setFormData({...formData, role: e.target.value})}
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    )}

                    <button type="submit">{title}</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;

