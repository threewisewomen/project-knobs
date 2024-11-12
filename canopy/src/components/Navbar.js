// src/components/Navbar.js
import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <nav className="navigationWrapper">
      <div className="logoWrapper">
        <span className="stylish">Project</span>
        <span className="logo">Knobs</span>
      </div>
      <ul className="navigation">
        <li className="parent">
          <a className="link" href="#">Home</a>
        </li>
        <li className="parent">
          <a className="link" href="#">Contact</a>
        </li>
        <li
          className={`parent ${activeMenu === 'products' ? 'active' : ''}`}
          onClick={() => toggleMenu('products')}
        >
          <a className="link" href="#"><i className="fas fa-minus"></i> Products <i className="fas fa-plus"></i></a>
          <ul className="subnavigation">
            <li><a className="link" href="#">Guitar Knobs</a></li>
            <li><a className="link" href="#">Potentiometer Caps</a></li>
            <li><a className="link" href="#">Custom Knobs</a></li>
          </ul>
        </li>
        <li
          className={`parent ${activeMenu === 'about' ? 'active' : ''}`}
          onClick={() => toggleMenu('about')}
        >
          <a className="link" href="#"><i className="fas fa-minus"></i> About Us <i className="fas fa-plus"></i></a>
          <ul className="subnavigation">
            <li><a className="link" href="#">Our Story</a></li>
            <li><a className="link" href="#">Mission</a></li>
            <li><a className="link" href="#">Team</a></li>
          </ul>
        </li>
        <li className="parent">
          <a className="link" href="#">Login</a>
        </li>
        <li className="parent">
          <a className="link" href="#">Cart</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
