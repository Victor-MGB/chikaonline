import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Protect from './Protect';

function Home() {
  const { theme } = useContext(ThemeContext); // Get the current theme from ThemeContext

  // Define theme-based styles
  const themeStyles = {
    'light-theme': 'bg-gray-100 text-gray-800',
    'dark-theme': 'bg-gray-900 text-white',
    'blue-theme': 'bg-blue-900 text-white',
    'green-theme': 'bg-green-900 text-white',
  };

  // Animation control
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 300); // Delay for animation to trigger after page load
  }, []);

  return (
    <>
      <section className={`p-6 ${themeStyles[theme]}`}>
        {/* Container for text content and call to action */}
        <div className={`flex flex-col md:flex-row mt-[4rem] items-center justify-between space-y-6 md:space-y-0 md:space-x-6 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 ease-in-out`}>
          
          {/* Left Container: Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-[3rem] uppercase font-bold mb-4 animate-fadeInUp">
              How we can help you achieve your goals
            </h2>
            <p className="mt-4">
              Our platform provides you with the tools and resources needed to manage your finances efficiently. 
              Explore our services and see how we can assist in achieving your financial objectives with ease and confidence.
            </p>
            <NavLink 
              to='/register' 
              className="inline-block px-[4rem] py-3 bg-yellow-600 text-white mt-[2rem] rounded-md shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105 hover:translate-y-[-2px]"
              aria-label="Register and get started"
            >
              Get Started
            </NavLink>
          </div>

          {/* Right Container: Images */}
          <div className="flex-1 relative flex justify-center items-center">
            <div className={`relative transform ${animate ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} transition-all duration-700 ease-out`}>
              <img 
                src='https://templates.envytheme.com/leve/default/assets/img/main-banner/banner-image-1.png' 
                alt='Financial growth representation' 
                className="max-w-full h-auto rounded-lg"
              />
              {/* Nested Image Inside the First One */}
              <div className="absolute inset-0 flex bottom-[1rem] justify-center items-center">
                <img 
                  src='https://templates.envytheme.com/leve/default/assets/img/main-banner/banner-mobile.png' 
                  alt='Mobile financial services representation' 
                  className={`max-w-full h-[44rem] rounded-lg transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-1000 ease-out delay-300`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Protect />
    </>
  );
}

export default Home;
