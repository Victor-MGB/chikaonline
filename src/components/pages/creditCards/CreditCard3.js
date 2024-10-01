import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import 'animate.css'; // Import Animate.css

function CreditCard3() {
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
        <div className="flex-1 mb-8 md:mb-0 animate__animated animate__fadeInLeft">
          <img
            src='https://templates.envytheme.com/leve/default/assets/img/using-card.png'
            alt='Using Credit Card'
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Container */}
        <div className="flex-1 md:pl-8 animate__animated animate__fadeInRight">
          <h2 className="text-3xl font-bold mb-4 animate__animated animate__bounceIn">
            Using Your Credit Card
          </h2>
          <p className="mb-6 animate__animated animate__fadeInUp animate__delay-1s">
            Credit cards are versatile tools that can be used for a variety of purposes. Whether you're making everyday purchases or planning a trip, here's how you can make the most of your credit card:
          </p>

          <div className="space-y-6">
            <div className="animate__animated animate__fadeInUp animate__delay-2s">
              <h3 className="text-xl font-semibold mb-2">1. Balance Transfers</h3>
              <p>
                Transfer existing credit card balances to your new card to consolidate debt and potentially lower your interest rate.
              </p>
            </div>
            <div className="animate__animated animate__fadeInUp animate__delay-2s">
              <h3 className="text-xl font-semibold mb-2">2. Everyday Spending</h3>
              <p>
                Use your credit card for daily expenses to earn rewards, build credit, and manage your budget more effectively.
              </p>
            </div>
            <div className="animate__animated animate__fadeInUp animate__delay-3s">
              <h3 className="text-xl font-semibold mb-2">3. Large Purchases</h3>
              <p>
                Finance big-ticket items with your credit card to spread the cost over time and take advantage of purchase protection.
              </p>
            </div>
            <div className="animate__animated animate__fadeInUp animate__delay-3s">
              <h3 className="text-xl font-semibold mb-2">4. Travel</h3>
              <p>
                Use your credit card for travel expenses to benefit from travel rewards, insurance, and international acceptance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CreditCard3;
