'use client'; // Add this line at the top

import React, { useState, useEffect } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className="header_top_icon_wrapper"
      onClick={toggleDarkMode}
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? <BsMoonFill /> : <BsSunFill />}
    </button>
  );
};

export default DarkModeToggle;