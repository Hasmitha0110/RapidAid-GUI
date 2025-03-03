import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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

  const [errors, setErrors] = useState({});
  const [photoPreviews, setPhotoPreviews] = useState([]);

  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    // Handle photo uploads
    const handleFileChange = (e) => {
      const files = Array.from(e.target.files);
      setFormData({ ...formData, photos: files });
  
      // Generate image previews
      const filePreviews = files.map(file => URL.createObjectURL(file));
      setPhotoPreviews(filePreviews);
    };  

  // Form validation
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.contactNumber.trim()) newErrors.contactNumber = "Contact number is required.";
    if (!/^\d{10}$/.test(formData.contactNumber.trim())) newErrors.contactNumber = "Enter a valid 10-digit number.";
    if (!formData.district) newErrors.district = "Please select a district.";
    if (!formData.disasterType) newErrors.disasterType = "Please select a type of disaster.";
    if (!formData.exactLocation.trim()) newErrors.exactLocation = "Please provide the exact location.";
    if (!formData.description.trim()) newErrors.description = "Please provide a brief description.";
    if (formData.disasterType === 'Other' && !formData.otherDisaster.trim()) newErrors.otherDisaster = "Please describe the disaster.";
    if (!formData.injuredOrDead) newErrors.injuredOrDead = "Please select an option.";
    if (formData.injuredOrDead === 'Yes' && !formData.numInjuredOrDead) newErrors.numInjuredOrDead = "Please provide the number.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      // Send data to backend
      await axios.post('http://localhost:4000/incidents', {
        type: formData.disasterType === 'Other' ? formData.otherDisaster : formData.disasterType,
        district: formData.district,
        location: formData.exactLocation,
        description: formData.description,
        status: 'Active' // New reports default to active
      });

      alert('Disaster report submitted successfully!');
      navigate('/'); // Redirect to Home page
    } catch (error) {
      console.error('Error submitting disaster report:', error);
      alert('Failed to submit the report.');
    }
  };

  return (
    <div className="report-disaster-wrapper">
      <h1>Report a Disaster</h1>
      <form onSubmit={handleSubmit}>
        <label>Name of the Person:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span className="error-text">{errors.name}</span>}

        <label>Contact Number:</label>
        <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
        {errors.contactNumber && <span className="error-text">{errors.contactNumber}</span>}

        <label>District:</label>
        <select name="district" value={formData.district} onChange={handleChange}>
          <option value="">Select a District</option>
          {districts.map((district, index) => (
            <option key={index} value={district}>{district}</option>
          ))}
        </select>
        {errors.district && <span className="error-text">{errors.district}</span>}

        <label>Exact Location:</label>
        <input type="text" name="exactLocation" value={formData.exactLocation} onChange={handleChange} />
        {errors.exactLocation && <span className="error-text">{errors.exactLocation}</span>}

        <label>Type of Disaster:</label>
        <select name="disasterType" value={formData.disasterType} onChange={handleChange}>
          <option value="">Select a Disaster Type</option>
          {disasterTypes.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>
        {errors.disasterType && <span className="error-text">{errors.disasterType}</span>}

        {formData.disasterType === 'Other' && (
          <>
            <label>Describe the Disaster:</label>
            <input type="text" name="otherDisaster" value={formData.otherDisaster} onChange={handleChange} />
            {errors.otherDisaster && <span className="error-text">{errors.otherDisaster}</span>}
          </>
        )}

        <label>Briefly Describe the Situation:</label>
        <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        {errors.description && <span className="error-text">{errors.description}</span>}

        <label>Add Photos (optional)</label>
        <input type="file" name="photos" multiple onChange={handleFileChange} />

        {/* Photo previews */}
        <div className="photo-preview-container">
          {photoPreviews.map((preview, index) => (
            <img key={index} src={preview} alt={`Preview ${index + 1}`} className="photo-preview" />
          ))}
        </div>


        <label>Anyone Injured or Dead?</label>
        <div>
          <label>
            <input type="radio" name="injuredOrDead" value="Yes" checked={formData.injuredOrDead === 'Yes'} onChange={handleChange} /> Yes
          </label>
          <label>
            <input type="radio" name="injuredOrDead" value="No" checked={formData.injuredOrDead === 'No'} onChange={handleChange} /> No
          </label>
        </div>
        {errors.injuredOrDead && <span className="error-text">{errors.injuredOrDead}</span>}

        {formData.injuredOrDead === 'Yes' && (
          <>
            <label>How Many People (Roughly):</label>
            <input type="number" name="numInjuredOrDead" value={formData.numInjuredOrDead} onChange={handleChange} />
            {errors.numInjuredOrDead && <span className="error-text">{errors.numInjuredOrDead}</span>}
          </>
        )}

        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default ReportDisaster;
