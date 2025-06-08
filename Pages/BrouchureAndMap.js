import React, { useEffect, useRef } from "react";
import "./BrouchureAndMap.css";

const BrouchureAndMap = () => {
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const hourRotation = (hours % 12) * 30 + minutes * 0.5;
      const minuteRotation = minutes * 6;
      const secondRotation = seconds * 6;

      if (hourRef.current) hourRef.current.style.transform = `rotate(${hourRotation}deg)`;
      if (minuteRef.current) minuteRef.current.style.transform = `rotate(${minuteRotation}deg)`;
      if (secondRef.current) secondRef.current.style.transform = `rotate(${secondRotation}deg)`;
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-container">
      <div className="clock">
        <div className="roman-number" id="twelve">XII</div>
        <div className="roman-number" id="three">III</div>
        <div className="roman-number" id="six">VI</div>
        <div className="roman-number" id="nine">IX</div>

        <div className="hand hour-hand" ref={hourRef}></div>
        <div className="hand minute-hand" ref={minuteRef}></div>
        <div className="hand second-hand" ref={secondRef}></div>
        <div className="center-dot"></div>
      </div>
      <h1 className="message">⏳ The clock is ticking... Magic is near!</h1>
      <h1 className="message">#StayTuned ✨</h1>
    </div>
  );
};

export default BrouchureAndMap;
