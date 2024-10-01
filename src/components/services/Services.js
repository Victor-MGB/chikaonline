import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";
import { ThemeContext } from '../context/ThemeContext';
import FeaturesSection from './FeaturesSection';

function Security() {
  const { theme } = useContext(ThemeContext);

  // Define theme-based styles
  const themeStyles = {
    'light-theme': 'bg-gray-100 text-gray-800',
    'dark-theme': 'bg-gray-900 text-white',
    'blue-theme': 'bg-blue-900 text-white',
    'green-theme': 'bg-green-900 text-white',
  };

  // Corrected return statement
  return (
    <>
         <section className={`relative w-full min-h-screen ${themeStyles[theme]}`}>
        {/* Hero Section with Image */}
        <div className="absolute inset-0">
          <img
            src='https://templates.envytheme.com/leve/default/assets/img/page-banner/page-banner-2.jpg'
            alt='Man with credit card'
            className="w-full h-full object-cover"
          />

          {/* Overlay Container */}
          <div className={`absolute inset-0 ${themeStyles[theme]} bg-opacity-80 flex flex-col items-center justify-center p-6`}>
            <h3 className="text-4xl font-bold mb-4">FAQ</h3>
            <div className="flex items-center space-x-2">
              <NavLink to="/" className="text-sm hover:text-xl font-bold uppercase">
                Home
              </NavLink>
              <GoDotFill className="text-sm text-yellow-700" />
              <p className="text-sm hover:text-red-500 font-bold">FAQ</p>
            </div>
          </div>
        </div>
      </section>

    <FeaturesSection/>
    </>
  );
}

export default Security;
