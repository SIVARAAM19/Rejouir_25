import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import './Navbar.css';
import ptuLogo from '../../Assets/ptu-logo.png';
import logo2025 from '../../Assets/2025logo.png';
import musicFile from '../../Assets/harry_potter_loop.mp3'; // Import your music file

const Navbar = ({ handleNavigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const menuItemsRef = useRef([]);
  const menuTl = useRef();
  const audioRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    menuTl.current = gsap.timeline({ paused: true });

    menuTl.current.fromTo(
      menuItemsRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' }
    );

    if (isOpen) {
      menuTl.current.play();
    } else {
      menuTl.current.reverse();
    }
  }, [isOpen]);

  return (
    <div className="top-glass-bar">
      <audio ref={audioRef} src={musicFile} loop></audio>

      <span className="harry-text">Rejouir '25</span>
      <button className="music-toggle" onClick={toggleMusic}>
        {isPlaying ? '🔊' : '🔇'}
      </button>

      <img src={ptuLogo} alt="PTU Logo" className="ptu-logo" />

      {/* Gate Pass Button with SVG Icon */}
      <button className="gate-pass-btn" onClick={() => handleNavigation(window.open('https://forms.gle/eKzMZcBGCPjqosXL7', '_blank'))}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pass-fill" viewBox="0 0 16 16">
          <path d="M10 0a2 2 0 1 1-4 0H3.5A1.5 1.5 0 0 0 2 1.5v13A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 12.5 0zM4.5 5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1m0 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1"/>
        </svg>
        Gate Pass
      </button>

      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? 'X' : '☰'}
      </button>

      <div className={`fullscreen-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-container">
          <div className="sidebar">
          <img src={logo2025} alt="2025 Logo" className="sidebar-logo" />
          <span className="leo-text">Puducherry Technological University</span>
            </div> 
            <div className="menu-grid">
  {[
    'HOME',
    'EVENTS HUB',
    'PRO SHOWS',
    'MERCHANDISE',
    'MEMORIES & MOMENTS',
    'TEAM',
  ].map((item, index) => (
    <div
    key={item}
    className="menu-item"
    onClick={() => {
      if (item === 'MERCHANDISE') {
        window.open('https://forms.gle/Hp7z6pmWPsZkLyEU6', '_blank');
      } else if (item === 'MEMORIES & MOMENTS') {
        window.open('https://gallery.rejouir.in','_blank');
      } else {
        handleNavigation(item === 'HOME' ? '/' : `/${item.replace(/ /g, '')}`);
      }
    }}
    ref={(el) => (menuItemsRef.current[index] = el)}
  >
    <span>{item}</span>
  </div>
  
  ))}
</div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
