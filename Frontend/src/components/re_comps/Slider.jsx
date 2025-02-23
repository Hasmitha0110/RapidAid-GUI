import React, { useState } from 'react';
import './Slider.css';
import { useNavigate } from 'react-router-dom';
import IncidentImages from './IncidentImages';

const Slider = ({ incidents }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  if (incidents.length === 0) {
    return <p className="slider-non">No active incidents to display.</p>;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % incidents.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? incidents.length - 1 : prevIndex - 1
    );
  };

  const handleCardClick = (incidentId) => {
    navigate(`/incidents`);
  };

  return (
    <div className="slider-container">
      <button className="arrow left-arrow" onClick={prevSlide}>‹</button>
      <div
        className="slider-card"
        onClick={() => handleCardClick(incidents[currentIndex].id)}
      >
        <div
          className="slider-photo"
          style={{backgroundImage: `url(${IncidentImages[incidents[currentIndex].type] || IncidentImages.Other})`,}}
        >
          <div className="slider-info">
            <h3>{incidents[currentIndex].type}</h3>
            <p><strong>Location:</strong> {incidents[currentIndex].location}</p>
            <p><strong>District:</strong> {incidents[currentIndex].district}</p>
            <p><strong>Description:</strong> {incidents[currentIndex].description}</p>
            <p><strong>Affected People:</strong> {incidents[currentIndex].affectedCount}</p>
          </div>
        </div>
      </div>
      <button className="arrow right-arrow" onClick={nextSlide}>›</button>
    </div>
  );
};

export default Slider;
