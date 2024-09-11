import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext
import TestimonialsSlider from './TestimonialSlider';

function WhyChoose() {
  const { theme } = useContext(ThemeContext); // Get the current theme from ThemeContext

  // Define theme-based styles
  const themeStyles = {
    'light-theme': {
      section: 'bg-gray-100 text-gray-800',
      card: 'bg-white text-gray-800',
      highlight: 'text-blue-600',
      textSecondary: 'text-gray-500',
    },
    'dark-theme': {
      section: 'bg-gray-900 text-white',
      card: 'bg-gray-800 text-white',
      highlight: 'text-blue-400',
      textSecondary: 'text-gray-400',
    },
    'blue-theme': {
      section: 'bg-blue-900 text-white',
      card: 'bg-blue-800 text-white',
      highlight: 'text-yellow-400',
      textSecondary: 'text-gray-300',
    },
    'green-theme': {
      section: 'bg-green-900 text-white',
      card: 'bg-green-800 text-white',
      highlight: 'text-yellow-300',
      textSecondary: 'text-gray-200',
    },
  };

  // State to hold current count values
  const [counts, setCounts] = useState({
    customers: 0,
    years: 0,
    branches: 0,
    works: 0,
  });

  // Effect to animate counts
  useEffect(() => {
    // Target values
    const targetValues = {
      customers: 358412,
      years: 25,
      branches: 2545,
      works: 54285,
    };

    // Interval to animate count
    const interval = setInterval(() => {
      setCounts(prevCounts => {
        const newCounts = { ...prevCounts };
        Object.keys(newCounts).forEach(key => {
          if (newCounts[key] < targetValues[key]) {
            newCounts[key] += Math.ceil(targetValues[key] / 100); // Adjust increment rate for a smoother animation
          }
        });
        return newCounts;
      });
    }, 50); // Adjust speed as necessary

    // Clear interval when component unmounts or target is reached
    return () => clearInterval(interval);
  }, []);

  const styles = themeStyles[theme] || themeStyles['light-theme'];

  return (
    <>
      <section className={`p-6 ${styles.section}`}>
        <div className="mb-8 text-center">
          <h6 className={`text-sm font-bold uppercase ${styles.highlight} mb-2`}>Why choose us</h6>
          <h1 className="text-3xl font-bold">
            Our bank has been providing services to its customers for almost 25 years.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {/* Happy Customers */}
          <div className={`p-4 ${styles.card} rounded-lg shadow-md hover:shadow-lg transition duration-300`}>
            <p className="text-4xl font-bold">{counts.customers.toLocaleString()}</p>
            <span className={`text-sm font-medium ${styles.textSecondary}`}>Happy customers</span>
          </div>

          {/* Years in Banking */}
          <div className={`p-4 ${styles.card} rounded-lg shadow-md hover:shadow-lg transition duration-300`}>
            <p className="text-4xl font-bold">{counts.years}</p>
            <span className={`text-sm font-medium ${styles.textSecondary}`}>Years in Banking</span>
          </div>

          {/* Our Branches */}
          <div className={`p-4 ${styles.card} rounded-lg shadow-md hover:shadow-lg transition duration-300`}>
            <p className="text-4xl font-bold">{counts.branches.toLocaleString()}</p>
            <span className={`text-sm font-medium ${styles.textSecondary}`}>Our Branches</span>
          </div>

          {/* Successful Works */}
          <div className={`p-4 ${styles.card} rounded-lg shadow-md hover:shadow-lg transition duration-300`}>
            <p className="text-4xl font-bold">{counts.works.toLocaleString()}</p>
            <span className={`text-sm font-medium ${styles.textSecondary}`}>Successful works</span>
          </div>
        </div>
      </section>

      <TestimonialsSlider />
    </>
  );
}

export default WhyChoose;
