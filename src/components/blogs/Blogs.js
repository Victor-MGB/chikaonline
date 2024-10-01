import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";
import { FiArrowLeft, FiArrowRight, FiSend } from "react-icons/fi";
import { ThemeContext } from '../context/ThemeContext';

function Blogs() {
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
      <section className={`relative w-full min-h-screen ${themeStyles[theme]} animate__animated animate__fadeIn`}>
        {/* Hero Section with Image */}
        <div className="absolute inset-0">
          <img
            src='https://templates.envytheme.com/leve/default/assets/img/page-banner/page-banner-5.jpg'
            alt='Man with credit card'
            className="w-full h-full object-cover"
          />

          {/* Overlay Container */}
          <div className={`absolute inset-0 ${themeStyles[theme]} bg-opacity-80 flex flex-col items-center justify-center p-6 animate__animated animate__zoomIn`}>
            <h3 className="text-4xl font-bold mb-4">Blogs</h3>
            <div className="flex items-center space-x-2">
              <NavLink to="/" className="text-sm hover:text-xl font-bold uppercase">
                Home
              </NavLink>
              <GoDotFill className="text-sm text-yellow-700" />
              <p className="text-sm hover:text-red-500 font-bold">Blogs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6 animate__animated animate__fadeInLeft">
          <img 
            src='https://templates.envytheme.com/leve/default/assets/img/blog-details.jpg' 
            alt='_banner' 
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <p className="text-gray-600 mb-2">John Anderson • September 24, 2024 • 0 Comments</p>
          <h4 className="text-xl font-semibold mb-4">The benefits that we get through credit cards</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>
          <NavLink to="/" className="text-blue-500 hover:underline flex items-center">
            <FiArrowLeft className="mr-2" /> Prev Post
          </NavLink>
          <NavLink to="/" className="text-blue-500 hover:underline flex items-center mt-2">
            <FiArrowRight className="mr-2" /> Next Post
          </NavLink>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 animate__animated animate__fadeInRight">
          <input type='text' placeholder='Search' className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <h5 className="text-lg font-bold mb-4">Categories</h5>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Advice</li>
            <li>Credit Cards</li>
            <li>Financial</li>
            <li>Making Money</li>
            <li>Personal Finance</li>
            <li>Online Banking</li>
            <li>Mobile Banking</li>
          </ul>
          <h5 className="text-lg font-bold mb-4">Recent Posts</h5>
          <ul className="list-none text-gray-700 mb-4 space-y-2">
            <li>June 10, 2024 - Bank is the best way to save in the future</li>
            <li>June 21, 2024 - Why do you need to open a bank account?</li>
            <li>June 30, 2024 - The benefits that we get through credit cards.</li>
            <li>May 10, 2024 - Financing loans available to small businesses</li>
            <li>May 21, 2024 - 5 Ways you can prepare your business for success</li>
            <li>May 30, 2024 - Tips for saving money and better guide for investment</li>
          </ul>
          <h5 className="text-lg font-bold mb-4">Popular Tags</h5>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2 py-1 bg-gray-200 rounded-md text-sm">Banking</span>
            <span className="px-2 py-1 bg-gray-200 rounded-md text-sm">Credit Cards</span>
            <span className="px-2 py-1 bg-gray-200 rounded-md text-sm">Saving</span>
            <span className="px-2 py-1 bg-gray-200 rounded-md text-sm">Mobile Banking</span>
            <span className="px-2 py-1 bg-gray-200 rounded-md text-sm">Security</span>
            <span className="px-2 py-1 bg-gray-200 rounded-md text-sm">Costs</span>
            <span className="px-2 py-1 bg-gray-200 rounded-md text-sm">Account</span>
            <span className="px-2 py-1 bg-gray-200 rounded-md text-sm">Business</span>
          </div>
          <input type='text' placeholder='Newsletter' className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <button className="w-full bg-blue-600 text-white p-2 rounded-md flex items-center justify-center hover:bg-blue-700 transition duration-300">
            <FiSend className="mr-2" /> Submit Newsletter
          </button>
        </div>
      </section>
    </>
  );
}

export default Blogs;
