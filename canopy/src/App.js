// canopy/src/App.js
import React from 'react';
import HomePage from './pages/HomePage';
import './styles/App.css';

console.log("App component is rendering"); // Debug log to confirm App is rendered

const App = () => {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
};

export default App;
