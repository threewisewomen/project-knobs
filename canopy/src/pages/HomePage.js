// canopy/src/pages/HomePage.js
import React from 'react';
import HelloWorld from '../components/HelloWorld';
console.log("HomePage component is rendering");

const HomePage = () => {
  return (
    <div>
      <HelloWorld />
    </div>
  );
};
console.log("Home page rendering completed");
export default HomePage;
