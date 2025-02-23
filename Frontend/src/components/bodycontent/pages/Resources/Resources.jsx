import React, { useState } from 'react';
import './Resources.css';
import IncidentCard from '../../../re_comps/IncidentCard';
import DummyData from '../../../re_comps/DummyData';

const Resources = () => {
  const [filteredIncidents, setFilteredIncidents] = useState(DummyData);
  const [filters, setFilters] = useState({
    status: '',
    district: '',
    date: ''
  });

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };



  // Apply filters
  const applyFilters = () => {
    let result = DummyData;

    if (filters.status) {
      result = result.filter((incident) => incident.status === filters.status);
    }

    if (filters.district) {
      result = result.filter((incident) => incident.district === filters.district);
    }

    if (filters.date) {
      result = result.filter((incident) => incident.date === filters.date);
    }

    setFilteredIncidents(result);
  };

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
          {Array.from(new Set(DummyData.map((incident) => incident.district))).map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
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
              showActions={false} />
          ))
        ) : (
          <p>No incidents found.</p>
        )}
      </div>
    </div>
  );
};

export default Resources;
