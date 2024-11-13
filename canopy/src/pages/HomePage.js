// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Header />
      <h1 className="homepage-title">Welcome to Project Knobs</h1>
      <p className="homepage-subtitle">Customize your guitar knobs with us!</p>
      <div className="homepage-content">
        {/* Additional homepage content here */}
      </div>
    </div>
  );
};

export default HomePage;
