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

      <div class="feature-cards">
        <div class="card">
          <h3>Report Incidents</h3>
          <p>Quickly report disasters and emergencies with detailed information.</p>
        </div>
        <div class="card">
          <h3>Track Resources</h3>
          <p>Monitor available resources and allocate them effectively.</p>
        </div>
        <div class="card">
          <h3>Emergency Alerts</h3>
          <p>Receive real-time alerts and notifications about ongoing emergencies.</p>
        </div>
      </div>

    </div>
  );
}

export default Home;
