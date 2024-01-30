import React, { useState } from 'react';
import { ReactComponent as Icon } from '../../Assets/search-icon.svg';
import './SearchBar.css'; // Don't forget to create the corresponding CSS file

export const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSearchBar = () => {
    setIsExpanded(!isExpanded);
  };
  const iconStyles = {
    color: 'white',
    width: '40px',
    height: '40px',
  };

  return (
    <div className={`search-container ${isExpanded ? 'expanded' : ''}`}>
      <div className="search-icon" onClick={toggleSearchBar}>
      <Icon style={iconStyles} />
      </div>
      <input
        type="text"
        className={`search-bar ${isExpanded ? 'expanded' : ''}`}
        placeholder="Search..."
      />
    </div>
  );
};


