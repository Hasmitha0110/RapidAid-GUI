import React, { useState } from 'react';
import './IncidentCard.css';

const IncidentCard = ({ incident, onDelete }) => {
  const [affectedCount, setAffectedCount] = useState(incident.affectedCount);
  const [isExpanded, setIsExpanded] = useState(false);

  // Handle "I'm suffering from the same" button click
  const handleAffectClick = () => {
    setAffectedCount(affectedCount + 1);
  };

  // Handle delete button click
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this report?')) {
      onDelete(incident.id);
    }
  };

  // Toggle expanded section
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="incident-card">
      <div
        className="incident-photo"
        style={{ backgroundImage: `url(src/assets/${incident.type}.png)` }}
      >
        <div className="incident-info">
          <h3 onClick={toggleExpanded} className="clickable-title">
            {incident.type} {isExpanded ? '⊼' : '⊻'}
          </h3>
          <p><strong>Location:</strong> {incident.location}, {incident.district}</p>
          <p><strong>Date:</strong> {incident.date}</p>
          <p><strong>Description:</strong> {incident.description}</p>
          <p className="af-count"><strong>Affected People:</strong> {affectedCount}</p>
        </div>
      </div>

      <div className="incident-actions">
        <button onClick={handleAffectClick}>I'm suffering from the same</button>
        <button onClick={handleDelete} className="delete-btn">Delete Report</button>
      </div>

      {isExpanded && (
        <div className="emergency-responses">
          <h4>Emergency Team Responses:</h4>
          <ul>
            <li>Stay calm and seek shelter immediately.</li>
            <li>Follow evacuation routes provided by local authorities.</li>
            <li>Help is on the way. Expected arrival: 30 minutes.</li>
            <li>Extraction point: Main City Square, near the police station.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default IncidentCard;
