// src/components/MenuItem.js
import React from 'react';

const MenuItem = ({ label, onClick }) => {
  return (
    <li className="menu-item" onClick={onClick}>
      {label}
    </li>
  );
};

export default MenuItem;
