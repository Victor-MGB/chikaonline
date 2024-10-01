import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
// index.js or App.js
import 'animate.css';


function TermsOfService() {
  const { theme } = useContext(ThemeContext);

  // Define theme-based styles
  const themeStyles = {
    'light-theme': {
      container: 'bg-gray-100 text-gray-900',
      heading: 'text-2xl font-bold mb-4',
      subheading: 'text-xl font-semibold mb-2',
      text: 'text-gray-700',
    },
    'dark-theme': {
      container: 'bg-gray-900 text-gray-100',
      heading: 'text-2xl font-bold mb-4 text-white',
      subheading: 'text-xl font-semibold mb-2 text-gray-300',
      text: 'text-gray-300',
    },
    'blue-theme': {
      container: 'bg-blue-900 text-white',
      heading: 'text-2xl font-bold mb-4 text-blue-300',
      subheading: 'text-xl font-semibold mb-2 text-blue-200',
      text: 'text-blue-200',
    },
    'green-theme': {
      container: 'bg-green-900 text-white',
      heading: 'text-2xl font-bold mb-4 text-green-300',
      subheading: 'text-xl font-semibold mb-2 text-green-200',
      text: 'text-green-200',
    },
  };

  // Extract the current theme style
  const currentThemeStyle = themeStyles[theme] || themeStyles['light-theme'];

  return (
    <section
      className={`p-6 rounded-md shadow-md animate__animated animate__fadeIn ${currentThemeStyle.container}`}
    >
      <h2 className={currentThemeStyle.heading}>Terms of Service</h2>
      <div className="space-y-6">
        <div className="animate__animated animate__fadeInUp">
          <h3 className={currentThemeStyle.subheading}>Introduction</h3>
          <p className={currentThemeStyle.text}>
            Welcome to our online banking service. By accessing our platform, you agree to comply with our terms of service. This document outlines the rules and guidelines for using our services, ensuring a secure and efficient experience for all users.
          </p>
        </div>

        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <h3 className={currentThemeStyle.subheading}>Credit Reporting Terms of Service</h3>
          <p className={currentThemeStyle.text}>
            We utilize credit reporting agencies to provide accurate credit-related information. By using our services, you consent to the collection, analysis, and reporting of your credit information as part of our credit assessment process. This helps us offer better financial products tailored to your needs.
          </p>
          <p className={currentThemeStyle.text}>
            Our credit reporting services are designed to maintain the integrity of your financial profile while complying with applicable regulations and protecting your privacy.
          </p>
        </div>

        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <h3 className={currentThemeStyle.subheading}>Data Protection Terms of Service</h3>
          <p className={currentThemeStyle.text}>
            We prioritize your privacy and are committed to safeguarding your personal data. Our data protection policies comply with industry standards and regulations to ensure that your information is stored securely and used only for legitimate purposes related to our banking services.
          </p>
        </div>

        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <h3 className={currentThemeStyle.subheading}>Personal Data We Collect</h3>
          <p className={currentThemeStyle.text}>
            We collect personal data such as your name, contact details, account information, transaction history, and other necessary details to provide our banking services. This data is used to verify your identity, manage your account, and enhance our services.
          </p>
        </div>

        <div className="animate__animated animate__fadeInUp animate__delay-4s">
          <h3 className={currentThemeStyle.subheading}>What We Use Personal Data For</h3>
          <p className={currentThemeStyle.text}>
            Your personal data is utilized to provide you with secure access to your accounts, facilitate transactions, and deliver personalized banking solutions. We also use this data to comply with legal obligations and improve the overall user experience.
          </p>
        </div>

        <div className="animate__animated animate__fadeInUp animate__delay-5s">
          <h3 className={currentThemeStyle.subheading}>Security Information</h3>
          <p className={currentThemeStyle.text}>
            We implement robust security measures to protect your information from unauthorized access, use, or disclosure. Our security protocols include data encryption, regular audits, and secure access controls to ensure your data remains protected at all times.
          </p>
        </div>

        <div className="animate__animated animate__fadeInUp animate__delay-6s">
          <p className={currentThemeStyle.text}>
            This policy was last updated on October 01, 2025. We may update our terms periodically to reflect changes in our services or legal requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TermsOfService;
