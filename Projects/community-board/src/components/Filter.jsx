import React from 'react';
import './Filter.css';

const Filter = ({ onSearchChange }) => {
  return (
    <div className="filter-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search events..."
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <i className="search-icon">🔍</i>
      </div>
    </div>
  );
};

export default Filter; 