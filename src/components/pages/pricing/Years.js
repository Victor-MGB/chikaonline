import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

function Years() {
  const [view, setView] = useState('monthly'); // State to manage selected view
  const [data, setData] = useState(null); // State to store fetched data
  const [loading, setLoading] = useState(false); // State to manage loading
  const [error, setError] = useState(null); // State to manage errors

  // Function to fetch data based on the selected view
  const fetchData = async (viewType) => {
    setLoading(true);
    setError(null);

    try {
      // Example API endpoint. Replace with your actual endpoint.
      const response = await fetch(`/api/data?view=${viewType}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when the component mounts or view changes
  useEffect(() => {
    fetchData(view);
  }, [view]);

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
    <div className={` ${currentThemeStyle} flex flex-col items-center`}>
      <section className="flex space-x-4 mt-16">
        <button
          className={`px-4 py-2 rounded-lg font-bold ${view === 'monthly' ? 'bg-red-700 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-blue-600 dark:hover:bg-yellow-600`}
          onClick={() => setView('monthly')}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-bold ${view === 'yearly' ? 'bg-red-300 text-white' : 'bg-red-300 text-gray-800'} hover:bg-blue-600 dark:hover:bg-yellow-600`}
          onClick={() => setView('yearly')}
        >
          Yearly
        </button>
      </section>

      <section className="p-4">
        {loading ? (
          <p>Loading data...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <div>
            {/* Render data based on the selected view */}
            {view === 'monthly' && <MonthlyData data={data} />}
            {view === 'yearly' && <YearlyData data={data} />}
          </div>
        )}
      </section>
    </div>
  );
}

// Placeholder components for displaying data
function MonthlyData({ data }) {
  return <div>Monthly Data: {/* Render monthly data here */}</div>;
}

function YearlyData({ data }) {
  return <div>Yearly Data: {/* Render yearly data here */}</div>;
}

export default Years;
