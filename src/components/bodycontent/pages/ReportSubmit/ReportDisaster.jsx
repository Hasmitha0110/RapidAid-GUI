import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReportDisaster.css';

const districts = [
  "Colombo", "Gampaha", "Kalutara", "Kandy", "Matale", "Nuwara Eliya",
  "Galle", "Matara", "Hambantota", "Jaffna", "Kilinochchi", "Mannar",
  "Vavuniya", "Mullaitivu", "Batticaloa", "Ampara", "Trincomalee",
  "Kurunegala", "Puttalam", "Anuradhapura", "Polonnaruwa", "Badulla",
  "Monaragala", "Ratnapura", "Kegalle"
];

const disasterTypes = [
  "Landslide", "Floods", "Criminal Activities", "Earthquakes",
  "Hurricane", "Wildfire", "Building Collapse", "Other"
];

const ReportDisaster = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    district: '',
    exactLocation: '',
    disasterType: '',
    description: '',
    injuredOrDead: '',
    numInjuredOrDead: '',
    photos: [],
    otherDisaster: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' || type === 'radio' ? checked ? value : '' : value
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photos: [...e.target.files] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Disaster Report Submitted:", formData);
    alert('Disaster report submitted successfully!');

    
    navigate('/');
  };

  return (
    <div className="report-disaster-wrapper">
      <h1>Report a Disaster</h1>
      <form onSubmit={handleSubmit}>
        <label>Name of the Person:</label>
        <input type="text" name="name" required onChange={handleChange} />

        <label>Contact Number:</label>
        <input type="tel" name="contactNumber" required onChange={handleChange} />

        <label>District:</label>
        <select name="district" required onChange={handleChange}>
          <option value="">Select a District</option>
          {districts.map((district, index) => (
            <option key={index} value={district}>{district}</option>
          ))}
        </select>

        <label>Describe the Exact Location or Share the Location Link:</label>
        <input type="text" name="exactLocation" required onChange={handleChange} />

        <label>Type of Disaster:</label>
        <select name="disasterType" required onChange={handleChange}>
          <option value="">Select a Disaster Type</option>
          {disasterTypes.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>

        {formData.disasterType === 'Other' && (
          <>
            <label>Describe the Disaster:</label>
            <input type="text" name="otherDisaster" onChange={handleChange} />
          </>
        )}

        <label>Briefly Describe the Situation (Optional):</label>
        <textarea name="description" onChange={handleChange}></textarea>

        <label>Add Photos (Optional):</label>
        <input type="file" name="photos" multiple onChange={handleFileChange} />

        <label>Anyone Injured or Dead?</label>
        <div>
          <label>
            <input 
              type="radio" 
              name="injuredOrDead" 
              value="Yes" 
              onChange={handleChange} 
            />
            Yes
          </label>
          <label>
            <input 
              type="radio" 
              name="injuredOrDead" 
              value="No" 
              onChange={handleChange} 
            />
            No
          </label>
        </div>

        {formData.injuredOrDead === 'Yes' && (
          <>
            <label>How Many People (Roughly):</label>
            <input type="number" name="numInjuredOrDead" onChange={handleChange} />
          </>
        )}

        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default ReportDisaster;
