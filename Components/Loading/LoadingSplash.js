import React, { useEffect, useState } from "react";
import "./LoadingSplash.css";
import fogImage from "../../Assets/fog.png";

const LoadingSplash = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
    }, 4000); // Start fade-out animation after 4 seconds
  }, []);

  return (
    <div className={`splash-container ${fadeOut ? "fade-out" : ""}`}>
      {/* Multiple fog layers for depth effect */}
      <img src={fogImage} alt="Fog Layer 1" className="fog fog1" />
      <img src={fogImage} alt="Fog Layer 2" className="fog fog2" />
      <img src={fogImage} alt="Fog Layer 3" className="fog fog3" />
      <img src={fogImage} alt="Fog Layer 4" className="fog fog4" />
      <img src={fogImage} alt="Fog Layer 5" className="fog fog5" />

     
    </div>
  );
};

export default LoadingSplash;
