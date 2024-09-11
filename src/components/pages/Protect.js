import React, { useContext } from 'react';
import { MdWifiProtectedSetup } from "react-icons/md";
import { RiPresentationLine } from "react-icons/ri";
import { FaCcDiscover } from "react-icons/fa";
import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext
import Business from './Business';

function Protect() {
    const { theme } = useContext(ThemeContext); // Get the current theme from ThemeContext

  // Define theme-based styles
  const themeStyles = {
    'light-theme': 'bg-white text-gray-800',
    'dark-theme': 'bg-gray-900 text-white',
    'blue-theme': 'bg-blue-900 text-white',
    'green-theme': 'bg-green-900 text-white',
  };
  return (
    <>
        <section className={`p-6 ${themeStyles[theme]}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card: Protect Your Card */}
        <div className={`flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 ${themeStyles[theme]}`}>
          <span className="text-4xl text-yellow-600 mb-4"><MdWifiProtectedSetup /></span>
          <h4 className="text-xl font-semibold mb-2">Protect your card</h4>
          <p className="text-center">
            Secure your card with our advanced protection measures, keeping your information safe from unauthorized access.
          </p>
        </div>

        {/* Card: Online Banking */}
        <div className={`flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 ${themeStyles[theme]}`}>
          <span className="text-4xl text-blue-600 mb-4"><RiPresentationLine /></span>
          <h4 className="text-xl font-semibold mb-2">Online banking</h4>
          <p className="text-center">
            Access your bank account anytime, anywhere with our secure and convenient online banking services.
          </p>
        </div>

        {/* Card: Discover New Features */}
        <div className={`flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 ${themeStyles[theme]}`}>
          <span className="text-4xl text-green-600 mb-4"><FaCcDiscover /></span>
          <h4 className="text-xl font-semibold mb-2">Discover new features</h4>
          <p className="text-center">
            Explore our latest features designed to enhance your banking experience and provide greater financial control.
          </p>
        </div>
      </div>
    </section>

    <Business />
    </>
  )
}

export default Protect