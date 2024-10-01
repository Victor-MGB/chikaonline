import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";
import { ThemeContext } from '../context/ThemeContext';
import Contact1 from './Contact1';
import 'animate.css';

function Security() {
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
      {/* Hero Section with Image */}
      <section className={`relative w-full min-h-screen ${themeStyles[theme]} animate__animated animate__fadeIn`}>
        <div className="absolute inset-0">
          <img
            src='https://templates.envytheme.com/leve/default/assets/img/page-banner/page-banner-4.jpg'
            alt='Bank security banner'
            className="w-full h-full object-cover animate__animated animate__fadeInUp"
          />
          {/* Overlay Container */}
          <div className={`absolute inset-0 ${themeStyles[theme]} bg-opacity-80 flex flex-col items-center justify-center p-6 animate__animated animate__fadeIn`}>
            <h3 className="text-4xl font-bold mb-4 animate__animated animate__fadeInDown">Security</h3>
            <div className="flex items-center space-x-2 animate__animated animate__fadeInUp">
              <NavLink to="/" className="text-sm hover:text-xl font-bold uppercase">
                Home
              </NavLink>
              <GoDotFill className="text-sm text-yellow-700" />
              <p className="text-sm hover:text-red-500 font-bold">Security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-12 px-4 lg:px-20 space-y-10 animate__animated animate__fadeIn">
        <div className={`p-6 ${themeStyles[theme]} rounded-lg shadow-lg animate__animated animate__fadeIn`}>
          <img src='https://templates.envytheme.com/leve/default/assets/img/blog-details.jpg' alt='Banking security' className="rounded-lg w-full mb-4 animate__animated animate__zoomIn" />
          <p className="text-sm text-gray-500 mb-2 animate__animated animate__fadeIn">John Anderson September 24, 2024 | 0 Comments</p>
          <h2 className="text-2xl font-bold mb-4 animate__animated animate__fadeInLeft">The Benefits of Secure Online Banking</h2>
          <p className="leading-relaxed animate__animated animate__fadeInRight">
            In today's digital world, the security of your banking transactions is paramount. At Leve Banking Corporation, we prioritize protecting your personal information and financial assets with advanced security measures. Our secure online banking services offer you the convenience of managing your finances from anywhere, without compromising on safety.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2 animate__animated animate__fadeInUp">How Do We Ensure Your Security?</h3>
          <p className="leading-relaxed mb-4 animate__animated animate__fadeIn">
            Our robust security protocols include encryption, multi-factor authentication, and continuous monitoring to safeguard your data against unauthorized access. We employ state-of-the-art technology and adhere to strict security standards to ensure that your banking experience is both secure and seamless.
          </p>
          <blockquote className="pl-4 border-l-4 border-yellow-500 italic animate__animated animate__fadeIn">
            “At Leve Banking Corporation, your security is our top priority. We are committed to providing a secure and trustworthy banking environment for all our customers.”
          </blockquote>
        </div>
      </section>

      {/* Contact Section */}
      <Contact1 />
    </>
  );
}

export default Security;
