/**
 * Search Section Component - IEEE YESIST Style
 * Search bar with smooth animations and focus effects
 */

import React, { useState } from 'react';
import '../styles/SearchSection.css';

const SearchSection: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Search:', searchValue);
  };

  return (
    <section className="search-section">
      <div className="search-container">
        <h2 className="search-title">Discover More</h2>
        <p className="search-subtitle">Search across our resources and events</p>

        <form onSubmit={handleSearch} className="search-form">
          <div className={`search-input-wrapper ${isFocused ? 'focused' : ''}`}>
            <input
              type="text"
              placeholder="Search events, resources, and more..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="search-input"
            />
            <button
              type="submit"
              className="search-button"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchSection;
