import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Resources.css';
import IncidentCard from '../../../re_comps/IncidentCard';

const Resources = () => {
  const [incidents, setIncidents] = useState([]);
  const [filteredIncidents, setFilteredIncidents] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [filters, setFilters] = useState({
    status: '',
    district: '',
    date: '',
    sort: ''
  });

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [incidentsRes, districtsRes] = await Promise.all([
          axios.get('http://localhost:4000/incidents'),
          axios.get('http://localhost:4000/districts')
        ]);
        
        setIncidents(incidentsRes.data);
        setFilteredIncidents(incidentsRes.data);
        setDistricts(districtsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  // Apply filters to incidents
  const applyFilters = async () => {
    try {
      let dateParam;
      if (filters.date) {
        const selectedDate = new Date(filters.date);
        const utcDate = new Date(Date.UTC(
          selectedDate.getUTCFullYear(),
          selectedDate.getUTCMonth(),
          selectedDate.getUTCDate()
        ));
        dateParam = utcDate.toISOString();
      }
  
      const params = {
        status: filters.status || undefined,
        district: filters.district || undefined,
        sort: filters.sort || undefined,
        date: dateParam
      };
  
      const response = await axios.get('http://localhost:4000/incidents', {
        params: Object.fromEntries(
          Object.entries(params).filter(([_, v]) => v !== undefined)
        )
      });
      
      setFilteredIncidents(response.data);
    } catch (error) {
      console.error('Filter error:', error);
    }
  };

  return (
    <div className="resources-wrapper">
      <h1>All Incidents</h1>

      {/* Filters */}
      <div className="filter-container">
        <div className="filter-group">
          <label>Status:</label>
          <select name="status" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="filter-group">
          <label>District:</label>
          <select name="district" onChange={handleFilterChange}>
            <option value="">All</option>
            {districts.map(district => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Sort by Affected:</label>
          <select name="sort" onChange={handleFilterChange}>
            <option value="">-- Select --</option>
            <option value="asc">Lowest First</option>
            <option value="desc">Highest First</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Date:</label>
          <input 
            type="date" 
            name="date" 
            onChange={handleFilterChange}
            value={filters.date}
          />
        </div>

        <button className="apply-button" onClick={applyFilters}>
          Apply Filters
        </button>
      </div>

      {/* Display Filtered Incidents */}
      <div className="incident-list">
        {filteredIncidents.length > 0 ? (
          filteredIncidents.map(incident => (
            <IncidentCard
              key={incident.id}
              incident={incident}
              showStatus={true}
              showActions={false}
              readOnlyComments={true}
            />
          ))
        ) : (
          <p className="no-results">No incidents found matching your filters.</p>
        )}
      </div>
    </div>
  );
};

export default Resources;
