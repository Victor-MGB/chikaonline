import React, { useContext, useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { FaSun, FaMoon, FaTint, FaLeaf, FaChevronDown } from 'react-icons/fa'; // Icons from react-icons

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const themes = [
    { name: 'light-theme', icon: <FaSun />, label: 'Light' },
    { name: 'dark-theme', icon: <FaMoon />, label: 'Dark' },
    { name: 'blue-theme', icon: <FaTint />, label: 'Blue' },
    { name: 'green-theme', icon: <FaLeaf />, label: 'Green' },
  ];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <button
        onClick={toggleDropdown}
        className="p-2 rounded-full bg-gray-800 text-white shadow-md hover:bg-gray-700"
        aria-label="Toggle theme dropdown"
      >
        <FaChevronDown />
      </button>

      {isDropdownOpen && (
        <div className="absolute top-full mt-2 right-0 w-32 bg-white rounded-lg shadow-lg">
          <h2 className="p-2 text-center text-lg font-semibold border-b">Select Theme</h2>
          <div className="flex flex-col p-2 gap-1">
            {themes.map((th) => (
              <button
                key={th.name}
                onClick={() => {
                  toggleTheme(th.name);
                  setIsDropdownOpen(false);
                }}
                className={`flex items-center justify-between p-2 rounded-lg hover:bg-gray-200 ${
                  theme === th.name ? 'bg-gray-300' : ''
                }`}
                aria-label={`Switch to ${th.label} theme`}
              >
                {th.icon} <span className="ml-2">{th.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
