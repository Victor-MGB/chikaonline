import React, { useContext } from 'react';
import { GrStatusGood } from "react-icons/gr";
import { ThemeContext } from '../../context/ThemeContext';
import CreditCard2 from './CreditCard2';
import 'animate.css'; // Import Animate.css

function CreditCard1() {
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
        {/* Image Container */}
        <div className="flex-1 mb-8 md:mb-0">
          <img
            src='https://templates.envytheme.com/leve/default/assets/img/overview-box-1.png'
            alt='ATM Illustration'
            className="w-full h-auto rounded-lg animate__animated animate__fadeInLeft"
          />
        </div>

        {/* Text Container */}
        <div className="flex-1 px-6 md:px-12 animate__animated animate__fadeInRight animate__delay-1s">
          <h6 className={`text-lg font-semibold mb-2 ${currentThemeStyle === 'bg-gray-100 text-gray-800' ? 'text-blue-600' : 'text-blue-400'}`}>
            What is a Credit Card
          </h6>
          <h2 className="text-3xl font-bold mb-4 animate__animated animate__bounceIn">
            A credit card is a thin rectangular piece of plastic or metal purchased from a bank or financial services company.
          </h2>
          <p className={`mb-6 ${currentThemeStyle} animate__animated animate__fadeInUp animate__delay-2s`}>
            A credit card allows the holder to borrow funds from the card issuer up to a certain limit to make purchases or withdraw cash. It is a convenient tool for managing finances, offering rewards, and providing security.
          </p>

          {/* Features List with Icons */}
          <div className="flex gap-4 animate__animated animate__fadeInUp animate__delay-2s">
            <p className="flex items-center text-green-600">
              <GrStatusGood className="mr-2" />
              Secure Transactions
            </p>
            <p className="flex items-center text-green-600">
              <GrStatusGood className="mr-2" />
              Easy Access to Funds
            </p>
            <p className="flex items-center text-green-600">
              <GrStatusGood className="mr-2" />
              Reward Programs
            </p>
            <p className="flex items-center text-green-600">
              <GrStatusGood className="mr-2" />
              Build Credit History
            </p>
          </div>
        </div>
      </section>

      <CreditCard2 />
    </>
  );
}

export default CreditCard1;
