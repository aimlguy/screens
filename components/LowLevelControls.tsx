import React from 'react';

const LowLevelControls: React.FC = () => {
  return (
    <div className="low-level-controls-screen">
      <div className="controls-container">
        <h3>Low Level Controls</h3>
        <div className="control-item">
          <span className="control-label">Autonomous</span>
          <span className="control-detail">Level 1 out of 5</span>
          <span className="control-status">ON</span>
        </div>
        <div className="control-item">
          <span className="control-label">Manual Mode</span>
          <span className="control-status">OFF</span>
        </div>
        <div className="control-item">
          <span className="control-label">Hardware Mode</span>
          <span className="control-status">OFF</span>
        </div>
        <p className="control-hint">Click to switch modes</p>
      </div>
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car" className="car-image" />
        <img src="/images/Line 44.svg" alt="Arrow" className="arrow-image" />
        <img src="/images/Line 43.svg" alt="Arrow1" className="arrow1-image" />
      </div>
    </div>
  );
};

export default LowLevelControls;
