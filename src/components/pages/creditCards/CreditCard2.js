import React, { useContext } from 'react';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { ThemeContext } from '../../context/ThemeContext';
import CreditCard3 from './CreditCard3';
import 'animate.css'; // Import Animate.css

function CreditCard2() {
  const { theme } = useContext(ThemeContext);

  // Define theme-based styles
  const themeStyles = {
    'light-theme': 'bg-gray-100 text-gray-800',
    'dark-theme': 'bg-gray-900 text-white',
    'blue-theme': 'bg-blue-900 text-white',
    'green-theme': 'bg-green-900 text-white',
  };

  // Extract the theme style
  const currentThemeStyle = themeStyles[theme] || themeStyles['light-theme'];

  return (
    <>
      <section className={`flex flex-col md:flex-row items-center justify-between p-8 ${currentThemeStyle}`}>
        {/* Text Container */}
        <div className="flex-1 mb-8 md:mb-0 md:pr-8 animate__animated animate__fadeInLeft">
          <h6 className={`text-lg font-semibold mb-2 ${currentThemeStyle === 'bg-gray-100 text-gray-800' ? 'text-blue-600' : 'text-blue-400'}`}>
            How Do Credit Cards Work
          </h6>
          <h2 className="text-3xl font-bold mb-4 animate__animated animate__bounceIn">
            Credit cards can be used to make purchases online or in stores and pay bills.
          </h2>
          <p className="mb-6 animate__animated animate__fadeInUp animate__delay-1s">
            Credit cards offer a convenient way to manage your finances and make payments. They can be used for a variety of transactions, both online and offline, and often come with benefits such as rewards programs and fraud protection.
          </p>

          {/* Feature List */}
          <div className="flex flex-col md:flex-row gap-4 animate__animated animate__fadeInUp animate__delay-2s">
            <p className="flex items-center text-green-600">
              <RiVerifiedBadgeFill className="mr-2" />
              Secure Transactions
            </p>
            <p className="flex items-center text-green-600">
              <RiVerifiedBadgeFill className="mr-2" />
              Reward Programs
            </p>
            <p className="flex items-center text-green-600">
              <RiVerifiedBadgeFill className="mr-2" />
              Easy Bill Payments
            </p>
            <p className="flex items-center text-green-600">
              <RiVerifiedBadgeFill className="mr-2" />
              Build Credit History
            </p>
          </div>
        </div>

        {/* Image Container */}
        <div className="flex-1 animate__animated animate__fadeInRight">
          <img
            src='https://templates.envytheme.com/leve/default/assets/img/payment-box.png'
            alt='Credit Card Illustration'
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      <CreditCard3 />
    </>
  );
}

export default CreditCard2;
