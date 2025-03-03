import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';
import Button from '../../../re_comps/Button';
import Slider from '../../../re_comps/Slider';


const Home = () => {
  const [incidents, setIncidents] = useState([]);

  // Fetch incidents from backend
  useEffect(() => {
    axios.get('http://localhost:4000/incidents')
      .then(response => setIncidents(response.data))
      .catch(error => console.error('Error fetching incidents:', error));
  }, []);

  // Get 10 most affected incidents
  const mostAffectedIncidents = incidents
    .filter(incident => incident.status === 'Active')
    .sort((a, b) => b.affectedCount - a.affectedCount)
    .slice(0, 10);

  return (
    <div className="home-wrapper">
      <div className="content-sections">
        {/* Left Section */}
        <div className="left-section">
          <div>
            <h3>RapidAid</h3>
            <p>Disaster Management & Emergency Responce System</p>
            {/* <p>
                        RapidAid provides a streamlined way to report and manage disasters. Our system ensures that emergency services respond faster and more efficiently to incidents.
                    </p> */}
          </div>
        </div>
        {/* Report Button in the Center */}
        <div className="report-button-container">
          <Link to="/report-disaster">
            <Button className="report-button" label="Report Disaster" />
          </Link>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h3>Why RapidAid?</h3>
          <p>
            RapidAid provides a streamlined way to report and manage disasters. Our system ensures that emergency services respond faster and more efficiently to incidents.
          </p>
          {/* <h3>What We Offer</h3>
                    <p>
                        Our platform provides real-time updates on ongoing incidents, a resource management system, and seamless communication between responders and affected parties.
                    </p> */}
        </div>
      </div>

      <h2 className="most-affect">Most Affected Incidents</h2>
      <Slider incidents={mostAffectedIncidents} />

  
<div className="feature-cards">
  <div className="feature-card">
    <div className="card-icon">
      <svg viewBox="0 0 24 24">
        <path d="M13 14h-2v-4h2m0 8h-2v-2h2M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z"/>
      </svg>
    </div>
    <h3>Rapid Reporting System</h3>
    <p>Submit disaster reports in 3 simple steps with GPS location tagging and photo evidence uploads</p>
    <div className="steps">
      <span className="step">1. Describe Incident</span>
      <span className="step">2. Add Location</span>
      <span className="step">3. Submit Alert</span>
    </div>
  </div>

  <div className="feature-card">
    <div className="card-icon">
      <svg viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    </div>
    <h3>Live Crisis Mapping</h3>
    <p>Real-time visualization of active incidents with color-coded severity levels and resource allocation status</p>
    <div className="key-points">
      <span>• Heatmap Analysis</span>
      <span>• Response Tracking</span>
    </div>
  </div>

  <div className="feature-card">
    <div className="card-icon">
      <svg viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    </div>
    <h3>Unified Response Platform</h3>
    <p>Integrated communication channel connecting citizens, first responders, and government agencies</p>
    <div className="key-benefits">
      <span>✓ Emergency Broadcasts</span>
      <span>✓ Crowdsourced Updates</span>
      <span>✓ Official Alerts</span>
    </div>
  </div>
</div>

    </div>
  );
}

export default Home;
