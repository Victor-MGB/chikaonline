import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import axios from 'axios';

const Footer = () => {

  const handleLogout = async () => {
    try {
      const response = await axios.post('https://banking-system-jc25.onrender.com/api/users/logout', {}, {
        withCredentials: true // If cookies are being used
      });
      console.log(response.data.message);
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  const whatsappNumber = "09077955363"; // Replace with your admin's WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Admin%2C%20I%20need%20assistance.`;

  return (
    <footer className="bg-gray-800 mt-[3rem] text-white p-4 text-center bottom-0 w-full">
      <div className="flex justify-center items-center space-x-4">
        <span>&copy; {new Date().getFullYear()} Your Bank Name. All rights reserved.</span>

        {/* WhatsApp Icon */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-300"
          aria-label="Contact Admin on WhatsApp"
        >
          <FaWhatsapp className="text-3xl" />
        </a>

        {/* Logout Icon */}
        <button
          onClick={handleLogout}
          className="text-black-900 text-bold font-bold rounded-sm px-4 hover:text-red-300 flex items-center space-x-2"
          aria-label="Logout"
        >
          <FiLogOut className="text-3xl" />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
