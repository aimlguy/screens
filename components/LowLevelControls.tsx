import React from 'react';

const LowLevelControls: React.FC = () => {
  return (
    <><div className="low-level-controls-screen">
      <div className="controls-container">
        <h3>External Lightings</h3>
        <div className="control-item">
          <span className="control-label">Headlights</span>
          <br />
          <br />
          <br />
          <span className="control-status">ON</span>
        </div>
        <div className="control-item">
          <span className="control-label">Tail Lights</span>
          <span className="control-status">OFF</span>
        </div>
      </div>
      <div className="car-container">
        <img src="/images/Car image.svg" alt="Car" className="car-image" />
        <img src="/images/Line 44.svg" alt="Arrow" className="arrow-image" />
        <img src="/images/Line 43.svg" alt="Arrow1" className="arrow1-image" />
      </div>
    </div><div className="low-level-controls-screen1">
        <div className="controls-container1">
          <h3>External Lightings</h3>
          <div className="control-item1">
            <span className="control-label1">Headlights</span>
            <br />
            <br />
            <br />
            <span className="control-status1">ON</span>
          </div>
          <div className="control-item1">
            <span className="control-label1">Tail Lights</span>
            <span className="control-status1">OFF</span>
          </div>
        </div>
        <div className="car-container1">
          <img src="/images/Line 44.svg" alt="Arrow" className="arrow-image1" />
          <img src="/images/Line 43.svg" alt="Arrow1" className="arrow1-image1" />
        </div>
      </div></>
  )
}

export default LowLevelControls;


