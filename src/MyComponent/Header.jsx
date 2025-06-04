import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Title */}
        <div className="navbar-logo">
          <img src="/marquee1.jpg" alt="Logo" />
          <span>God Ram Temple Organizatoin</span>
        </div>

        {/* Hamburger for mobile */}
        <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links */}
        <div className={`navbar-links  ${menuOpen ? 'active' : ''}`}>
          <a href="#about">About</a>
          <a href="#visits">Visits</a>
          <a href="#gallery">Gallery</a>
          <a href="#members">Members</a>
          <span className="navbar-contact">Contact: +91-987 659 8765</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
