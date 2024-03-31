import React from "react";
import './RollingText.jsx';




function RollingText({ width, height }) {
    return (
      <div className="rolling-text-container" style={{ width, height }}>
        <div className="rolling-text">Your Rolling Text Here</div>
      </div>
    );
  }
  
  export default RollingText;