import React, { useState } from 'react';
import { FaPhone, FaClock } from 'react-icons/fa';
import './TopBar.css';

const TopBar = () => {
  const [language, setLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'tw', name: 'Twi' },
    { code: 'fr', name: 'French' },
    { code: 'zh', name: 'Chinese' }
  ];

  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-left">
          <div className="language-selector">
            <label htmlFor="language-select">Language:</label>
            <select
              id="language-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="language-dropdown"
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="topbar-right">
          <div className="topbar-item">
            <FaPhone className="topbar-icon" />
            <span>+233 244 445 555</span>
          </div>

          <span className="topbar-separator">||</span>

          <div className="topbar-item">
            <FaClock className="topbar-icon" />
            <span>Mon-Sun || 8:00-6:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
