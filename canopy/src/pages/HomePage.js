// src/pages/HomePage.js
import React from 'react';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Project Knobs</h1>
      <p>Customize your guitar knobs with us!</p>
      {/* Add more content for your homepage here */}
    </div>
  );
};

export default HomePage;
