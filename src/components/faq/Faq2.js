import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Faq2() {
  const { theme } = useContext(ThemeContext);

  // Define theme-based styles
  const themeStyles = {
    'light-theme': {
      container: 'bg-gray-100 text-gray-900',
      input: 'bg-white text-gray-900 border border-gray-300 focus:border-gray-500',
      button: 'bg-blue-600 text-white hover:bg-blue-700',
      label: 'text-gray-900',
      terms: 'text-gray-600'
    },
    'dark-theme': {
      container: 'bg-gray-800 text-gray-100',
      input: 'bg-gray-700 text-gray-100 border border-gray-600 focus:border-gray-400',
      button: 'bg-blue-800 text-white hover:bg-blue-700',
      label: 'text-gray-100',
      terms: 'text-gray-400'
    },
    'blue-theme': {
      container: 'bg-blue-900 text-white',
      input: 'bg-blue-800 text-white border border-blue-700 focus:border-blue-500',
      button: 'bg-blue-700 text-white hover:bg-blue-600',
      label: 'text-white',
      terms: 'text-blue-200'
    },
    'green-theme': {
      container: 'bg-green-900 text-white',
      input: 'bg-green-800 text-white border border-green-700 focus:border-green-500',
      button: 'bg-green-700 text-white hover:bg-green-600',
      label: 'text-white',
      terms: 'text-green-200'
    },
  };

  // Extract the theme style
  const currentThemeStyle = themeStyles[theme] || themeStyles['light-theme'];

  // State to manage form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    alert('Message sent successfully!');
  };

  return (
    <>
        <section className={`py-12 ${currentThemeStyle.container}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <p className="mb-6">Do you have any questions? Reach out to us through this form, and we will get back to you as soon as possible.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="fullName" className={`mb-2 ${currentThemeStyle.label}`}>Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`p-2 rounded-md ${currentThemeStyle.input}`}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className={`mb-2 ${currentThemeStyle.label}`}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`p-2 rounded-md ${currentThemeStyle.input}`}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className={`mb-2 ${currentThemeStyle.label}`}>Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`p-2 rounded-md ${currentThemeStyle.input}`}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className={`mb-2 ${currentThemeStyle.label}`}>Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`p-2 rounded-md ${currentThemeStyle.input}`}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className={`mb-2 ${currentThemeStyle.label}`}>Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`p-2 rounded-md ${currentThemeStyle.input}`}
                rows="5"
                required
              />
            </div>
          </div>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="acceptedTerms"
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              className="mr-2"
              required
            />
          </div>
          <button
            type="submit"
            className={`py-2 px-4 rounded-md font-semibold ${currentThemeStyle.button}`}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
    </>
  );
}

export default Faq2;
