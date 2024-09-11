import React, { useContext } from 'react';
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext

function Download() {
  const { theme } = useContext(ThemeContext);

  // Define theme-based styles
  const themeStyles = {
    'light-theme': 'bg-gray-100 text-gray-800',
    'dark-theme': 'bg-gray-900 text-white',
    'blue-theme': 'bg-blue-900 text-white',
    'green-theme': 'bg-green-900 text-white',
  };

  return (
    <>
        <section className={`p-8 flex flex-col items-center ${themeStyles[theme]}`}>
      <div className="mb-6 text-center">
        <h4 className="text-2xl font-bold">Download our App to get all kinds of banking benefits from anywhere</h4>
      </div>

      <div className="flex gap-6">
        <div className={`flex items-center space-x-2 p-4 rounded-lg shadow-lg ${themeStyles[theme]} hover:bg-opacity-90 transition transform hover:scale-105`}>
          <FaApple className={`text-3xl ${theme === 'light-theme' ? 'text-gray-800' : 'text-current'}`} />
          <div>
            <p className={`text-sm ${theme === 'light-theme' ? 'text-gray-500' : 'text-current'}`}>Download on</p>
            <h4 className="text-lg font-semibold">Apple Store</h4>
          </div>
        </div>

        <div className={`flex items-center space-x-2 p-4 rounded-lg shadow-lg ${themeStyles[theme]} hover:bg-opacity-90 transition transform hover:scale-105`}>
          <FaGooglePlay className={`text-3xl ${theme === 'light-theme' ? 'text-green-500' : 'text-current'}`} />
          <div>
            <p className={`text-sm ${theme === 'light-theme' ? 'text-gray-500' : 'text-current'}`}>Download on</p>
            <h4 className="text-lg font-semibold">Google Play</h4>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Download;
