import React, { useContext } from 'react';
import { FaShieldAlt, FaLock, FaShoppingCart } from 'react-icons/fa'; // Importing icons for visual enhancement
import { ThemeContext } from '../context/ThemeContext';

function Security2() {
    const { theme } = useContext(ThemeContext);

  // Define theme-based styles
  const themeStyles = {
    'light-theme': 'bg-gray-100 text-gray-900',
    'dark-theme': 'bg-gray-900 text-gray-100',
    'blue-theme': 'bg-blue-900 text-white',
    'green-theme': 'bg-green-900 text-white',
  };

  // Extract the theme style
  const currentThemeStyle = themeStyles[theme] || themeStyles['light-theme'];
  return (
    <>
        <section className={`py-12 ${currentThemeStyle}`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold mb-4">Protecting You with Expert Security Advice</h2>

          {/* Security Tips Section */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <FaShieldAlt className="text-blue-500 text-2xl" />
              <div>
                <h3 className="font-semibold">Bank Safely</h3>
                <p>
                  Learn how to bank securely by following our best practices for online and mobile banking. Always keep your software updated and never share your login details.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaLock className="text-green-500 text-2xl" />
              <div>
                <h3 className="font-semibold">Keep Your Details Safe</h3>
                <p>
                  Protect your personal information from phishing scams and suspicious requests. Use strong, unique passwords and enable two-factor authentication for added security.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaShoppingCart className="text-red-500 text-2xl" />
              <div>
                <h3 className="font-semibold">Shop Safely Online</h3>
                <p>
                  Ensure your online shopping is secure by using trusted websites and paying through secure payment methods. Look for the padlock symbol in your browser's address bar.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://templates.envytheme.com/leve/default/assets/img/advice.jpg"
            alt="Security Advice"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
    </>
  )
}

export default Security2