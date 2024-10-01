import React, { useContext } from 'react';
import { FaCheckCircle, FaDollarSign } from 'react-icons/fa'; // Import FontAwesome icons
import { ThemeContext } from '../../context/ThemeContext';
import Years from './Years';

function Pricing1() {
  const { theme } = useContext(ThemeContext);

  // Define theme-based styles
  const themeStyles = {
    'light-theme': 'bg-gray-100 text-gray-900', // Light theme
    'dark-theme': 'bg-gray-900 text-gray-100', // Dark theme
    'blue-theme': 'bg-blue-900 text-white',    // Blue theme
    'green-theme': 'bg-green-900 text-white',  // Green theme
  };

  // Extract the theme style
  const currentThemeStyle = themeStyles[theme] || themeStyles['light-theme'];

  // Common plan features to render with icons
  const features = [
    'Google analytics',
    'Drag & drop widgets',
    'Mobile + desktop apps',
    'Messenger integration',
    '100 chatBot triggers',
    'Unlimited broadcasts',
    'Visitor info',
    'Quick responses',
    '24/7 live chat',
    'Email integration',
    'Premium support',
    '2 Business mastercards',
    'Up to 4 chat operators',
  ];

  // Function to render features with icons
  const renderFeatures = () =>
    features.map((feature, index) => (
      <li key={index} className="flex items-center space-x-2">
        <FaCheckCircle className="text-green-500" />
        <span>{feature}</span>
      </li>
    ));

  return (
    <div className={`min-h-screen ${currentThemeStyle} py-12`}>
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {[
          { title: 'Basic', price: '$10/m', plan: 'Get Started' },
          { title: 'Advanced', price: '$149/m', plan: 'Get Started' },
          { title: 'Premium', price: '$179/m', plan: 'Get Started' },
        ].map((plan, index) => (
          <div
            key={index}
            className={`shadow-md rounded-lg p-6 text-center transform hover:scale-105 transition-transform ${currentThemeStyle}`}
          >
            <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
            <div className="flex justify-center items-center mb-6">
              <FaDollarSign className="text-2xl text-blue-500" />
              <span className="text-3xl font-bold">{plan.price}</span>
            </div>
            <ul className="text-left space-y-2 mb-6">{renderFeatures()}</ul>
            <button className="mt-4 px-6 py-2 bg-red-700 text-white rounded-md hover:bg-blue-600">
              {plan.plan}
            </button>
          </div>
        ))}
      </section>
      <Years />
    </div>
  );
}

export default Pricing1;
