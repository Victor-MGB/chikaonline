import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { PiTidalLogo } from "react-icons/pi";
import { IoMdClose } from 'react-icons/io';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Ensure theme is applied on initial load
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <>
      <header className="fixed left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Left Container: Logo */}
          <div className="flex items-center">
            <PiTidalLogo className="font-bold text-4xl text-yellow-700" />
          </div>

          {/* Middle Container: Navigation Links */}
          <nav className="hidden md:flex space-x-6 items-center">
            <NavLink to="/" className="hover:text-blue-600 font-bold uppercase dark:hover:text-yellow-700">Home</NavLink>
            <NavLink to="/credit-cards" className="hover:text-blue-600 font-bold uppercase dark:hover:text-yellow-700">Credit Cards</NavLink>

            <div className="relative">
              <p
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="cursor-pointer flex items-center space-x-1 hover:text-blue-600 font-bold uppercase dark:hover:text-yellow-700"
              >
                <span>Pages</span>
                {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </p>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 z-20">
                  <NavLink to="/pricing" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setIsDropdownOpen(false)}>Pricing</NavLink>
                  <NavLink to="/register" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setIsDropdownOpen(false)}>Open Account</NavLink>
                  <NavLink to="/security" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setIsDropdownOpen(false)}>Security</NavLink>
                  <NavLink to="/faq" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setIsDropdownOpen(false)}>FAQ</NavLink>
                  <NavLink to="/terms-and-services" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setIsDropdownOpen(false)}>Terms and Services</NavLink>
                </div>
              )}
            </div>

            <NavLink to="/services" className="hover:text-blue-600 font-bold uppercase dark:hover:text-yellow-700">Services</NavLink>
            <NavLink to="/contact" className="hover:text-blue-600 font-bold uppercase dark:hover:text-yellow-700">Contact</NavLink>
          </nav>

          {/* Right Container: Search, Theme Toggle, and Open Account Button */}
          <div className="hidden md:flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search for..."
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
            />
            <button onClick={toggleTheme} className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded-md text-gray-800 dark:text-gray-100">
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
            <NavLink to="/register" className="bg-yellow-700 dark:bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600">
              Open account
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 dark:text-gray-200">
              {isMenuOpen ? <IoMdClose size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu: Slide-out */}
        <div
          className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-white dark:bg-gray-800 shadow-md transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
        >
          <nav className="flex flex-col items-start p-4 space-y-4">
            <NavLink to="/" className="hover:text-blue-600 dark:hover:text-yellow-700" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/credit-cards" className="hover:text-blue-600 dark:hover:text-yellow-700" onClick={() => setIsMenuOpen(false)}>Credit Cards</NavLink>

            {/* Pages with Dropdown */}
            <div className="relative w-full">
              <p
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="cursor-pointer flex justify-between items-center w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <span>Pages</span>
                {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </p>
              {isDropdownOpen && (
                <div className="ml-4 w-full flex flex-col space-y-2">
                  <NavLink to="/pricing" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 w-full" onClick={() => setIsMenuOpen(false)}>Pricing</NavLink>
                  <NavLink to="/register" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 w-full" onClick={() => setIsMenuOpen(false)}>Open Account</NavLink>
                  <NavLink to="/security" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 w-full" onClick={() => setIsMenuOpen(false)}>Security</NavLink>
                  <NavLink to="/faq" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 w-full" onClick={() => setIsMenuOpen(false)}>FAQ</NavLink>
                  <NavLink to="/terms-and-services" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 w-full" onClick={() => setIsMenuOpen(false)}>Terms and Services</NavLink>
                </div>
              )}
            </div>

            <NavLink to="/services" className="hover:text-blue-600 dark:hover:text-yellow-700" onClick={() => setIsMenuOpen(false)}>Services</NavLink>
            <NavLink to="/contact" className="hover:text-blue-600 dark:hover:text-yellow-700" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>

            <input
              type="text"
              placeholder="Search for..."
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md w-full"
            />
            <button className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-md w-full">
              Open account
            </button>
          </nav>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setIsMenuOpen(false)}></div>
        )}
      </header>

      {/* Spacing below the fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}

export default Navbar;
