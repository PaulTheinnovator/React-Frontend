import React from 'react';
import '../styles/main.css';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">PM AI Technologies</div>
        <ul className="nav-links">
          <li><a href="/" className='header-home'>Home</a></li>
          <li><a href="about" className='header-about'>About</a></li>
          <li><a href="services" className='header-services'>Services</a></li>
          <li><a href="contact" className='header-contact'>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
