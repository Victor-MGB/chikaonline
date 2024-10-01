import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import 'animate.css';
import WorldMap from './WorldMap';

function ContactForm() {
  const { theme } = useContext(ThemeContext);

  // Theme-based styles
  const themeStyles = {
    'light-theme': 'bg-white text-gray-800',
    'dark-theme': 'bg-gray-800 text-white',
    'blue-theme': 'bg-blue-900 text-white',
    'green-theme': 'bg-green-900 text-white',
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      fullName: e.target['full-name'].value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log('Form submitted:', data.message);
      } else {
        console.error('Error:', data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  return (
    <>
        <section className={`py-12 px-6 lg:px-20 ${themeStyles[theme]} animate__animated animate__fadeIn`}>
      <div className="max-w-2xl mx-auto p-8 bg-opacity-90 rounded-lg shadow-md animate__animated animate__fadeInUp">
        <h2 className="text-3xl font-bold mb-6 text-center">Drop Us a Message for Any Query</h2>
        <p className="text-center mb-8">
          At Leve Banking Corporation, we are here to assist you with all your queries. Please fill out the form below, and a representative will get in touch with you shortly.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name Field */}
          <div className="animate__animated animate__fadeIn">
            <label className="block text-sm font-medium mb-1" htmlFor="full-name">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              placeholder="Please enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Email Field */}
          <div className="animate__animated animate__fadeIn">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Please enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Phone Field */}
          <div className="animate__animated animate__fadeIn">
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Please enter your number"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Subject Field */}
          <div className="animate__animated animate__fadeIn">
            <label className="block text-sm font-medium mb-1" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Please enter your subject"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Message Field */}
          <div className="animate__animated animate__fadeIn">
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Accept Terms Checkbox */}
          <div className="flex items-center animate__animated animate__fadeIn">
            <input
              type="checkbox"
              id="terms"
              className="mr-2 h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-0"
            />
            <label htmlFor="terms" className="text-sm">
              Accept Terms of Services and Privacy Policy
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center animate__animated animate__fadeIn">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600 animate__animated animate__bounceIn"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>

    <WorldMap />
    </>
  );
}

export default ContactForm;
