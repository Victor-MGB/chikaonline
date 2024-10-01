import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

function AdminHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');

  useEffect(() => {
    // Retrieve the admin email from localStorage
    const email = localStorage.getItem('adminEmail');
    setAdminEmail(email);
  }, []);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Left Container: Admin Email */}
        <div className="flex items-center space-x-4">
          <span className="text-sm text-green-700 font-bold font-semibold">
            Logged in as: {adminEmail || 'Admin'}
          </span>
        </div>

        {/* Middle Container: Navigation Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          <div className="relative">
            <NavLink to="/clients"
              className="flex items-center space-x-1 hover:text-blue-600 font-bold uppercase dark:hover:text-yellow-700"
            >
              <span>Clients</span>
            </NavLink>
          </div>
          <NavLink to="/particular" className="hover:text-blue-600 font-bold uppercase dark:hover:text-yellow-700">Particular User</NavLink>

          <div className="relative inline-block">
            <p
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-1 cursor-pointer hover:text-blue-600 font-bold uppercase dark:hover:text-yellow-700"
            >
              <span>Pages</span>
              {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </p>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 font-bold uppercase bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 z-20">
                <NavLink to="/pricing" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Pricing
                </NavLink>
                <NavLink to="/register" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Open Account
                </NavLink>
                <NavLink to="/security" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Security
                </NavLink>
                <NavLink to="/faq" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  FAQ
                </NavLink>
                <NavLink to="/terms-and-services" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Terms and Services
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/manage" className="hover:text-blue-600 font-bold uppercase dark:hover:text-yellow-700">User Management</NavLink>
          <NavLink to="/notification" className="hover:text-blue-600 font-bold uppercase dark:hover:text-blue-300">Send notification</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 dark:text-gray-200">
            {isMenuOpen ? <IoMdClose size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* ... */}
    </header>
  );
}

export default AdminHeader;
