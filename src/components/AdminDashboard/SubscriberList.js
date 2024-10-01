import React, { useEffect, useState } from 'react';
import 'animate.css';

const SubscriberList = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [unsubscribers, setUnsubscribers] = useState([]);
  const [loadingSubscribers, setLoadingSubscribers] = useState(true);
  const [loadingUnsubscribers, setLoadingUnsubscribers] = useState(true);

  useEffect(() => {
    // Fetch subscribers
    const fetchSubscribers = async () => {
      try {
        const response = await fetch('https://banking-system-jc25.onrender.com/newsletter/admin/subscribers'); 
        const data = await response.json();
        if (response.ok) {
          setSubscribers(data.subscribers);
        }
      } catch (error) {
        console.error('Error fetching subscribers:', error);
      } finally {
        setLoadingSubscribers(false);
      }
    };

    // Fetch unsubscribers
    const fetchUnsubscribers = async () => {
      try {
        const response = await fetch('https://banking-system-jc25.onrender.com/admin/unsubscribers');
        const data = await response.json();
        if (response.ok) {
          setUnsubscribers(data.unsubscribers);
        }
      } catch (error) {
        console.error('Error fetching unsubscribers:', error);
      } finally {
        setLoadingUnsubscribers(false);
      }
    };

    fetchSubscribers();
    fetchUnsubscribers();
  }, []);

  return (
    <div className="p-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-md max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 animate__animated animate__fadeIn text-center">
        Newsletter Subscribers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Subscribers Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-4 text-gray-700 animate__animated animate__fadeIn">Active Subscribers</h3>
          {loadingSubscribers ? (
            <p className="text-gray-500 animate__animated animate__fadeIn">Loading subscribers...</p>
          ) : (
            <ul className="space-y-3">
              {subscribers.length > 0 ? (
                subscribers.map((subscriber, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-300"
                  >
                    <span className="text-gray-800">{subscriber.email}</span>
                    <span className="text-sm text-gray-500">Subscribed on {new Date(subscriber.subscriptionDate).toLocaleDateString()}</span>
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No active subscribers found.</li>
              )}
            </ul>
          )}
        </div>

        {/* Unsubscribers Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-4 text-gray-700 animate__animated animate__fadeIn">Unsubscribed Users</h3>
          {loadingUnsubscribers ? (
            <p className="text-gray-500 animate__animated animate__fadeIn">Loading unsubscribers...</p>
          ) : (
            <ul className="space-y-3">
              {unsubscribers.length > 0 ? (
                unsubscribers.map((unsubscriber, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-300"
                  >
                    <span className="text-gray-800">{unsubscriber.email}</span>
                    <span className="text-sm text-gray-500">Unsubscribed on {new Date(unsubscriber.unsubscriptionDate).toLocaleDateString()}</span>
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No unsubscribers found.</li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriberList;
