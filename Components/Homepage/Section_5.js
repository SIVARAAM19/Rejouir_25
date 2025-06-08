import React from "react";
import styles from "./Section_5.module.css";
import { FaInstagram, FaEnvelope } from "react-icons/fa"; // Social Icons

const Section_5 = () => {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Side - Logo & Name */}
        <div className={styles.brand}>
          <h2 className={styles.heading}>Rejouir 2025</h2>
          <p className={styles.tagline}>The Magic Awaits!</p>
        </div>

        {/* Middle - Quick Links */}
        <div className={styles.links}>
          <a href="#section1" onClick={(e) => scrollToSection(e, "section1")}>Home</a>
          <a href="#section2" onClick={(e) => scrollToSection(e, "section2")}>About</a>
          <a href="#section3" onClick={(e) => scrollToSection(e, "section3")}>Events</a>
          <a href="#section4" onClick={(e) => scrollToSection(e, "section4")}>Merchandise</a>
          <a href="https://webteam.rejouir.in" target="_blank" rel="noopener noreferrer">WebTeam</a>
        </div>

        {/* Right Side - Social Media Icons */}
        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com/rejouir_ptu/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="rejouir2025@ptuniv.edu.in" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Rejouir '25 | All Rights Reserved
      </div>
    </footer>
  );
};

export default Section_5;
