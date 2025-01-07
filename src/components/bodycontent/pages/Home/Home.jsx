import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-wrapper">
            <div className="content-sections">
                {/* Left Section */}
                <div className="left-section">
                  <div>
                    <h3>Why RapidAid?</h3>
                    <p>
                        RapidAid provides a streamlined way to report and manage disasters. Our system ensures that emergency services respond faster and more efficiently to incidents.
                    </p>
                  </div>
                </div>
                {/* Report Button in the Center */}
                <div className="report-button-container">
                    <button className="report-button">Report Disaster</button>
                </div>

                {/* Right Section */}
                <div className="right-section">
                    <h3>What We Offer</h3>
                    <p>
                        Our platform provides real-time updates on ongoing incidents, a resource management system, and seamless communication between responders and affected parties.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
