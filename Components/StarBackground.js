import React from "react";
import "./StarBackground.css"; // Import the CSS file

const StarBackground = () => {
  return (
    <div className="stars-wrapper">
      {[...Array(3)].map((_, s) => (
        <svg
          key={`stars-${s}`}
          className={`stars stars-${s + 1}`}
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          {[...Array(200)].map((_, i) => {
            const cx = `${Math.round(Math.random() * 10000) / 100}%`;
            const cy = `${Math.round(Math.random() * 10000) / 100}%`;
            const r = Math.round((Math.random() + 0.5) * 10) / 10;
            return <circle key={`star-${i}`} className="star" cx={cx} cy={cy} r={r} />;
          })}
        </svg>
      ))}
      <svg className="extras" width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <radialGradient id="comet-gradient" cx="0" cy=".5" r="0.5">
            <stop offset="0%" stopColor="rgba(255,255,255,.8)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <g transform="rotate(-135)">
          <ellipse className="comet comet-a" fill="url(#comet-gradient)" cx="0" cy="0" rx="150" ry="2" />
        </g>
        <g transform="rotate(20)">
          <ellipse className="comet comet-b" fill="url(#comet-gradient)" cx="100%" cy="0" rx="150" ry="2" />
        </g>
        <g transform="rotate(300)">
          <ellipse className="comet comet-c" fill="url(#comet-gradient)" cx="40%" cy="100%" rx="150" ry="2" />
        </g>
      </svg>
      <div className="thunder-flash"></div>
    </div>
  );
};

export default StarBackground;
