import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Security2 from './Security2';

function Security1() {
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
      <div className="md:w-1/2 flex justify-center">
          <img
            src="https://templates.envytheme.com/leve/default/assets/img/security.jpg"
            alt="Bank Security"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
        
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold mb-4">Our Commitment to Your Security</h2>
          <p>
            At Central City Bank, the security of your financial information is our top priority. We employ advanced encryption technologies and continuously monitor our systems to protect your accounts from unauthorized access. Our multi-factor authentication and real-time alerts keep you informed of any suspicious activity.
          </p>
          <p>
            We are committed to maintaining your trust by providing a safe and secure banking experience. Whether you are managing your funds online or through our mobile app, rest assured that your data is safeguarded against threats.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Data encryption to protect sensitive information.</li>
            <li>Regular security audits to maintain high standards.</li>
            <li>24/7 monitoring of all transactions for unusual activities.</li>
            <li>Personalized alerts and fraud detection systems.</li>
            <li>Secure login with multi-factor authentication.</li>
          </ul>
        </div>

      </div>
    </section>

    <Security2 />
    </>
  )
}

export default Security1