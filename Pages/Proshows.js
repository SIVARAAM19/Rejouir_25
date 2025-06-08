import React from "react";
import "./Proshows.css";
import concertImage from "../Assets/prolive.jpg"; // Import image from Assets
import backgroundImage from "../Assets/probg1.png"; // Import background image

const ConcertBooking = () => {
  const handleBookingClick = () => {
    window.open("https://docs.google.com/forms/d/12KlLuriBAP24r4T-0uGxG0n8fyumiAhRWwivk_hliN8/edit?pli=1", "_blank");
  };

  return (
    <div className="page-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="concert-container">
        <div className="concert-image">
          <img src={concertImage} alt="Concert" />
        </div>
        <div className="concert-details">
          <h2>Sridharsena & Reshma Shyam Live!</h2>
          <p>Come experience the thrill of live performances that will leave you mesmerized!</p>
          <div className="concert-info">
            <p><strong>April 3 | 5.30 PM | PTU CAMPUS</strong></p>
          </div>
          <button className="book-btn" onClick={handleBookingClick}>Book Tickets</button>
          <p className="note"><span className="underline">NOTE:</span> This PROSHOW is exclusive only for PTU students</p>
        </div>
      </div>
    </div>
  );
};

export default ConcertBooking;