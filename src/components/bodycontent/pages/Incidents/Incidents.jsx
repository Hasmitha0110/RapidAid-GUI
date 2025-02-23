import React, { useState } from 'react';
import './Incidents.css';
import IncidentCard from '../../../re_comps/IncidentCard';
import DummyData from '../../../re_comps/DummyData';

const Incidents = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [incidents, setIncidents] = useState(DummyData);

  // Handle delete report
  const handleDeleteIncident = (id) => {
    setIncidents(incidents.filter((incident) => incident.id !== id));
  };

  // Get unique active districts
  const activeDistricts = Array.from(
    new Set(
      incidents
        .filter((incident) => incident.status === 'Active')
        .map((incident) => incident.district)
    )
  );

  const handleFilterChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  // Filter active incidents by selected district
  const filteredIncidents = incidents.filter(
    (incident) =>
      incident.status === 'Active' &&
      (selectedDistrict === '' || incident.district === selectedDistrict)
  );

  return (
    <div className="incidents-wrapper">
      <h1>Active Incidents</h1>

      {/* District Filter */}
      <div className="filter-container">
        <label>Filter by District:</label>
        <select value={selectedDistrict} onChange={handleFilterChange}>
          <option value="">All Districts</option>
          {activeDistricts.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>

      {/* Incident List or No Data Message */}
      <div className="incident-list">
        {filteredIncidents.length > 0 ? (
          filteredIncidents.map((incident) => (
            <IncidentCard
              key={incident.id}
              incident={incident}
              onDelete={handleDeleteIncident}
              showStatus={false}
              showActions={true}
            />
          ))
        ) : (
          <p className="no-incidents-message">No Active Incidents Found.</p>
        )}
      </div>
    </div>
  );
};

export default Incidents;
