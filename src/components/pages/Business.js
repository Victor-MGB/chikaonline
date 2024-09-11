import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext
import WhyChoose from './WhyChoose';
function Business() {
    const { theme } = useContext(ThemeContext); // Get the current theme from ThemeContext

  // Define theme-based styles
  const themeStyles = {
    'light-theme': 'bg-gray-100 text-gray-800',
    'dark-theme': 'bg-gray-900 text-white',
    'blue-theme': 'bg-blue-900 text-white',
    'green-theme': 'bg-green-900 text-white',
  };
  return (
    <>
         <section className={`p-6 md:flex items-center justify-between space-y-6 md:space-y-0 md:space-x-6 ${themeStyles[theme]}`}>
        {/* Left Container: Image */}
        <div className="flex-1 flex justify-center items-center">
          <img 
            src='https://templates.envytheme.com/leve/default/assets/img/banking/banking-1.png' 
            alt='Business Banking' 
            className="max-w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Container: Text and Ratings */}
        <div className="flex-1 text-center md:text-left">
          <h6 className="text-sm font-bold uppercase text-blue-600 mb-2">Business Banking</h6>
          <h2 className="text-3xl font-bold mb-4">
            We operate our banking services in many countries around the world
          </h2>
          <p className="mb-4">
            Our business banking solutions are designed to support companies of all sizes. We provide comprehensive services, 
            including account management, financial consulting, and international transactions to help your business grow globally.
          </p>

          {/* Rating with Icons */}
          <div className="flex justify-center md:justify-start space-x-1">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </div>
        </div>
      </section>

      <WhyChoose />
    </>
  )
}

export default Business