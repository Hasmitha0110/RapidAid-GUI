// Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
    const emergencyContacts = [
        { name: "Police Emergency", number: "119" },
        { name: "Ambulance Service", number: "110" },
        { name: "Fire Department", number: "111" },
        { name: "Disaster Management Center", number: "117" }
    ];

    return (
        <div className='contact-wrapper'>
            <h1>Emergency Contacts</h1>
            <div className='emergency-grid'>
                {emergencyContacts.map((contact, index) => (
                    <div key={index} className='emergency-card'>
                        <svg className="emergency-icon" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        <h3>{contact.name}</h3>
                        <p>{contact.number}</p>
                    </div>
                ))}
            </div>

            <div className='contact-info'>
                <div className='contact-method'>
                    <svg className="contact-icon" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                    </svg>
                    <h3>Email Support</h3>
                    <p>support@rapidaid.lk</p>
                </div>
                <div className='contact-method'>
                    <svg className="contact-icon" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <h3>24/7 Hotline</h3>
                    <p>(+94) 71-XXX XXXX</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;