import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";
import { ThemeContext } from '../../context/ThemeContext';

function CreditCard() {
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
        <section className={`relative w-full h-screen ${themeStyles[theme]}`}>
      {/* Hero Section with Image */}
      <div className="absolute inset-0">
        <img
          src='https://i.pinimg.com/564x/56/16/b6/5616b6ddb6b1f304e326ba88615e50b9.jpg'
          alt='Man with credit card'
          className="w-full h-full object-cover"
        />

        {/* Overlay Container */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-6">
          <h3 className="text-4xl font-bold mb-4 text-white">Credit Card</h3>
          <div className="flex items-center space-x-2 text-white">
            <NavLink to="/" className="text-sm hover:text-1xl font-bold uppercase">Home</NavLink>
            <GoDotFill className="text-sm text-yellow-700" />
            <p className="text-sm hover:text-red-500 text-yellow-700 font-bold">Credit Card</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default CreditCard;
