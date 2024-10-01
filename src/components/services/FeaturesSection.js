import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faGlobe, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import Download from '../pages/Download';
import ServiceFaq from './ServiceFaq';

function FeaturesSection() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  // Define theme-based styles
  const themeStyles = {
    'light-theme': {
      container: 'bg-white text-gray-900',
      card: 'bg-gray-100 shadow-md',
      heading: 'text-xl font-bold mb-2 flex items-center',
      text: 'text-gray-700',
      button: 'bg-blue-500 text-white hover:bg-blue-600',
    },
    'dark-theme': {
      container: 'bg-gray-900 text-gray-100',
      card: 'bg-gray-800 shadow-md',
      heading: 'text-xl font-bold mb-2 text-white flex items-center',
      text: 'text-gray-300',
      button: 'bg-blue-600 text-white hover:bg-blue-700',
    },
    'blue-theme': {
      container: 'bg-blue-900 text-white',
      card: 'bg-blue-800 shadow-md',
      heading: 'text-xl font-bold mb-2 text-blue-300 flex items-center',
      text: 'text-blue-200',
      button: 'bg-green-500 text-white hover:bg-green-600',
    },
    'green-theme': {
      container: 'bg-green-900 text-white',
      card: 'bg-green-800 shadow-md',
      heading: 'text-xl font-bold mb-2 text-green-300 flex items-center',
      text: 'text-green-200',
      button: 'bg-blue-500 text-white hover:bg-blue-600',
    },
  };

  // Extract the current theme style
  const currentThemeStyle = themeStyles[theme] || themeStyles['light-theme'];

  // Button click handlers
  const handleGetStarted = () => {
    navigate('/get-started'); // Navigates to the Get Started page
  };

  const handleSeeMoreDetails = () => {
    navigate('/online-banking'); // Navigates to the Online Banking details page
  };

  const handleDownloadApp = () => {
    navigate('/download'); // Navigates to the Download App page
  };

  return (
   <>
     <section
      className={`p-6 space-y-6 animate__animated animate__fadeIn ${currentThemeStyle.container}`}
    >
      {/* Card 1: Protect Your Card */}
      <div className={`p-4 rounded-md animate__animated animate__fadeInUp ${currentThemeStyle.card}`}>
        <h3 className={currentThemeStyle.heading}>
          <FontAwesomeIcon icon={faShieldAlt} className="mr-2" /> Protect Your Card
        </h3>
        <p className={currentThemeStyle.text}>
          In the modern banking world, protecting your card is paramount. Our secure systems ensure your transactions are safe, and your personal information remains confidential. Take advantage of our enhanced security features to keep your card protected at all times.
        </p>
        <button onClick={handleGetStarted} className={`mt-4 px-4 py-2 rounded ${currentThemeStyle.button}`}>
          Get started
        </button>
      </div>

      {/* Card 2: Online Banking */}
      <div className={`p-4 rounded-md animate__animated animate__fadeInUp animate__delay-1s ${currentThemeStyle.card}`}>
        <h3 className={currentThemeStyle.heading}>
          <FontAwesomeIcon icon={faGlobe} className="mr-2" /> Online Banking
        </h3>
        <p className={currentThemeStyle.text}>
          Experience the convenience of managing your finances from anywhere, at any time. Our online banking platform is user-friendly and packed with features to help you track spending, pay bills, and transfer funds effortlessly.
        </p>
        <button onClick={handleSeeMoreDetails} className={`mt-4 px-4 py-2 rounded ${currentThemeStyle.button}`}>
          See more details
        </button>
      </div>

      {/* Card 3: Discover New Features */}
      <div className={`p-4 rounded-md animate__animated animate__fadeInUp animate__delay-2s ${currentThemeStyle.card}`}>
        <h3 className={currentThemeStyle.heading}>
          <FontAwesomeIcon icon={faLightbulb} className="mr-2" /> Discover New Features
        </h3>
        <p className={currentThemeStyle.text}>
          Stay ahead with the latest innovations in digital banking. Discover new features that make banking easier and more secure. From personalized insights to enhanced security measures, explore what our updated platform can offer you.
        </p>
        <button onClick={handleDownloadApp} className={`mt-4 px-4 py-2 rounded ${currentThemeStyle.button}`}>
          Download the app
        </button>
      </div>
    </section>

    <Download />
    <ServiceFaq />
   </>
  );
}

export default FeaturesSection;
