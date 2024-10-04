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
          <span className="text-sm text-green-700 font-bold">
            Logged in as: {adminEmail || 'Admin'}
          </span>
        </div>

        {/* Middle Container: Navigation Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          {/* Navigation Links */}
          <NavLink to="/clients" className="hover:text-blue-600 font-bold uppercase">
            Clients
          </NavLink>
          <NavLink to="/particular" className="hover:text-blue-600 font-bold uppercase">
            Particular User
          </NavLink>

          {/* Dropdown Menu */}
          <div className="relative inline-block">
            <p
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-1 cursor-pointer hover:text-blue-600 font-bold uppercase"
            >
              <span>Pages</span>
              {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </p>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-20">
                <NavLink to="/pricing" className="block px-4 py-2 hover:bg-gray-100">
                  Pricing
                </NavLink>
                <NavLink to="/register" className="block px-4 py-2 hover:bg-gray-100">
                  Open Account
                </NavLink>
                <NavLink to="/security" className="block px-4 py-2 hover:bg-gray-100">
                  Security
                </NavLink>
                <NavLink to="/faq" className="block px-4 py-2 hover:bg-gray-100">
                  FAQ
                </NavLink>
                <NavLink to="/terms-and-services" className="block px-4 py-2 hover:bg-gray-100">
                  Terms and Services
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/manage" className="hover:text-blue-600 font-bold uppercase">
            User Management
          </NavLink>
          <NavLink to="/notification" className="hover:text-blue-600 font-bold uppercase">
            Send Notification
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
            {isMenuOpen ? <IoMdClose size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 p-4">
            <NavLink to="/clients" className="block text-gray-600 hover:text-blue-600 font-bold">
              Clients
            </NavLink>
            <NavLink to="/particular" className="block text-gray-600 hover:text-blue-600 font-bold">
              Particular User
            </NavLink>
            <div>
              <p
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 cursor-pointer text-gray-600 hover:text-blue-600 font-bold"
              >
                <span>Pages</span>
                {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </p>
              {isDropdownOpen && (
                <div className="ml-4 flex flex-col space-y-1">
                  <NavLink to="/pricing" className="block text-gray-600 hover:text-blue-600">
                    Pricing
                  </NavLink>
                  <NavLink to="/register" className="block text-gray-600 hover:text-blue-600">
                    Open Account
                  </NavLink>
                  <NavLink to="/security" className="block text-gray-600 hover:text-blue-600">
                    Security
                  </NavLink>
                  <NavLink to="/faq" className="block text-gray-600 hover:text-blue-600">
                    FAQ
                  </NavLink>
                  <NavLink to="/terms-and-services" className="block text-gray-600 hover:text-blue-600">
                    Terms and Services
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink to="/manage" className="block text-gray-600 hover:text-blue-600 font-bold">
              User Management
            </NavLink>
            <NavLink to="/notification" className="block text-gray-600 hover:text-blue-600 font-bold">
              Send Notification
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

export default AdminHeader;
