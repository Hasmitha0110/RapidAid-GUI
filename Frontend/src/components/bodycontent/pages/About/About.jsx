// About.jsx
import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about-wrapper'>
            <div className='about-hero'>
                <h1>About RapidAid</h1>
                <p>Your trusted partner in disaster management</p>
            </div>

            <div className='mission-section'>
                <div className='mission-content'>
                    <h2>Our Mission</h2>
                    <p>To provide real-time emergency coordination and resource management through innovative technology.</p>
                    <div className='stats-grid'>
                        <div className='stat-card'>
                            <svg className="stat-icon" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                            </svg>
                            <h3>Rapid Response</h3>
                            <p>Average emergency response under 15 minutes</p>
                        </div>
                        <div className='stat-card'>
                            <svg className="stat-icon" viewBox="0 0 24 24">
                                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                            </svg>
                            <h3>Community Driven</h3>
                            <p>5000+ active responders nationwide</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='features-section'>
                <h2>Key Features</h2>
                <div className='features-grid'>
                    <div className='feature-card'>
                        <div className='feature-icon-box'>
                            <svg className="feature-icon" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm2-8h-4v2h4v2h-4v2h-2v-6h6v-2z"/>
                            </svg>
                        </div>
                        <h3>Real-time Alerts</h3>
                        <p>Instant notifications with precise location tracking for emergency services</p>
                    </div>
                    <div className='feature-card'>
                        <div className='feature-icon-box'>
                            <svg className="feature-icon" viewBox="0 0 24 24">
                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                            </svg>
                        </div>
                        <h3>Smart Analytics</h3>
                        <p>Data-driven insights for effective resource allocation</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;