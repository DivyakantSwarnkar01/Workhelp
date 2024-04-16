import React from "react";
import './RollingTxt.css'




function RollingText({ width, height }) {
    return (
      <div className="rolling-text-container bg-red-400" style={{ width, height }}>
        <div className="rolling-text"><p className="text-blue-600"><pre>Read Full Article:  Politico-Judicial nexus in India can lead constitutional disaster for the State.
        </pre> </p> 
        
        </div>
        
      </div>
    );
  }
  
  export default RollingText;