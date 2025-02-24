import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Resources.css';
import IncidentCard from '../../../re_comps/IncidentCard';

const Resources = () => {
  const [incidents, setIncidents] = useState([]);
  const [filteredIncidents, setFilteredIncidents] = useState([]);
  const [filters, setFilters] = useState({
    status: '',
    district: '',
    date: ''
  });

  // Fetch all incidents on mount
  useEffect(() => {
    axios.get('http://localhost:4000/incidents')
      .then(response => {
        setIncidents(response.data);
        setFilteredIncidents(response.data);
      })
      .catch(error => console.error('Error fetching incidents:', error));
  }, []);

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  // Apply filters to incidents
  const applyFilters = () => {
    axios.get('http://localhost:4000/incidents', { params: filters })
      .then(response => setFilteredIncidents(response.data))
      .catch(error => console.error('Error applying filters:', error));
  };

  // Get unique districts for the dropdown
  const uniqueDistricts = [...new Set(incidents.map((incident) => incident.district))];

  return (
    <div className="resources-wrapper">
      <h1>All Incidents</h1>

      {/* Filters */}
      <div className="filter-container">
        <label>Status:</label>
        <select name="status" onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <label>District:</label>
        <select name="district" onChange={handleFilterChange}>
          <option value="">All</option>
          {uniqueDistricts.map((district) => (
            <option key={district} value={district}>{district}</option>
          ))}
        </select>

        <label>Date:</label>
        <input type="date" name="date" onChange={handleFilterChange} />

        <button onClick={applyFilters}>Apply Filters</button>
      </div>

      {/* Display Filtered Incidents */}
      <div className="incident-list">
        {filteredIncidents.length > 0 ? (
          filteredIncidents.map((incident) => (
            <IncidentCard
              key={incident.id}
              incident={incident}
              showStatus={true}
              showActions={false} // Disable delete/report actions
              readOnlyComments={true} // Disable adding/deleting comments
            />
          ))
        ) : (
          <p>No incidents found.</p>
        )}
      </div>
    </div>
  );
};

export default Resources;
