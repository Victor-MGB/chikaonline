import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left Container: Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 md:h-10" />
        </div>

        {/* Middle Container: Navigation Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          <div className="relative">
            <NavLink to="/"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-1 hover:text-blue-600 font-bold uppercase dark:hover:text-yellow-700"
            >
              <span>Home</span>
              {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </NavLink>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 z-10">
                <NavLink to="/sub-link-1" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setIsDropdownOpen(false)}>Sub Link 1</NavLink>
                <NavLink to="/sub-link-2" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setIsDropdownOpen(false)}>Sub Link 2</NavLink>
                <NavLink to="/sub-link-3" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setIsDropdownOpen(false)}>Sub Link 3</NavLink>
              </div>
            )}
          </div>
          <NavLink to="/credit-cards" className="hover:text-blue-600 font-bold uppercase dark:hover:text-yellow-700">Credit Cards</NavLink>
          <NavLink to="/pages" className="hover:text-blue-600 dark:hover:text-blue-300">Pages</NavLink>
          <NavLink to="/services" className="hover:text-blue-600 dark:hover:text-blue-300">Services</NavLink>
          <NavLink to="/loans" className="hover:text-blue-600 dark:hover:text-blue-300">Loans</NavLink>
          <NavLink to="/blog" className="hover:text-blue-600 dark:hover:text-blue-300">Blog</NavLink>
          <NavLink to="/contact" className="hover:text-blue-600 dark:hover:text-blue-300">Contact</NavLink>
        </nav>

        {/* Right Container: Search and Button */}
        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search for..."
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
          />
          <button className="bg-yellow-700 dark:bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600">
            Open account
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 dark:text-gray-200">
            {isMenuOpen ? <IoMdClose size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu: Slide-out from Left */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-white dark:bg-gray-800 shadow-md transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <nav className="flex flex-col items-start p-4 space-y-4">
          <div className="relative w-full">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex justify-between items-center w-full hover:text-blue-600 dark:hover:text-blue-300"
            >
              <span>Home</span>
              {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isDropdownOpen && (
              <div className="mt-2 space-y-2 w-full">
                <NavLink to="/sub-link-1" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 w-full" onClick={() => {setIsDropdownOpen(false); setIsMenuOpen(false);}}>Sub Link 1</NavLink>
                <NavLink to="/sub-link-2" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 w-full" onClick={() => {setIsDropdownOpen(false); setIsMenuOpen(false);}}>Sub Link 2</NavLink>
                <NavLink to="/sub-link-3" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 w-full" onClick={() => {setIsDropdownOpen(false); setIsMenuOpen(false);}}>Sub Link 3</NavLink>
              </div>
            )}
          </div>
          <NavLink to="/credit-cards" className="hover:text-blue-600 dark:hover:text-blue-300" onClick={() => setIsMenuOpen(false)}>Credit Cards</NavLink>
          <NavLink to="/pages" className="hover:text-blue-600 dark:hover:text-blue-300" onClick={() => setIsMenuOpen(false)}>Pages</NavLink>
          <NavLink to="/services" className="hover:text-blue-600 dark:hover:text-blue-300" onClick={() => setIsMenuOpen(false)}>Services</NavLink>
          <NavLink to="/loans" className="hover:text-blue-600 dark:hover:text-blue-300" onClick={() => setIsMenuOpen(false)}>Loans</NavLink>
          <NavLink to="/blog" className="hover:text-blue-600 dark:hover:text-blue-300" onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
          <NavLink to="/contact" className="hover:text-blue-600 dark:hover:text-blue-300" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          <input
            type="text"
            placeholder="Search for..."
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 w-full"
          />
          <button className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 w-full">
            Open account
          </button>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}

export default Navbar;
