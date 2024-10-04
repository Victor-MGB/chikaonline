import React, { useState, useEffect } from 'react';
import { IoSendSharp, IoAddCircleOutline } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa6";
import { RiBillLine } from "react-icons/ri";
import Balance from './Balance';
import Bills from './Bills';

function UserIcon() {
  const [showTransferForm, setShowTransferForm] = useState(false);
  const [transferData, setTransferData] = useState({
    accountNumber: '',
    password: '',
    amount: '',
    currency: 'USD', // default currency
    description: ''
  });

  const [message, setMessage] = useState(''); // Success or error message
  const [isSubmitting, setIsSubmitting] = useState(false); // Submit button state
  const [withdrawalStatus, setWithdrawalStatus] = useState(null); // Track status of the withdrawal

  // Load withdrawal status from localStorage if it exists
  useEffect(() => {
    const savedStatus = localStorage.getItem('withdrawalStatus');
    if (savedStatus) {
      setWithdrawalStatus(savedStatus);
    }
  }, []);

  // Function to handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTransferData({
      ...transferData,
      [name]: value
    });
  };

  // Function to submit the withdrawal form
  const handleTransferSubmit = async (e) => {
    e.preventDefault();

    // Check if a transfer is still pending
    if (withdrawalStatus === 'pending') {
      setMessage('You already have a pending withdrawal.');
      return;
    }

    setIsSubmitting(true); 
    setMessage(''); 
  
    try {
      const response = await fetch('https://banking-system-jc25.onrender.com/api/users/withdrawal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(transferData)
      });
  
      const contentType = response.headers.get('content-type');
      console.log('Response content type:', contentType);
  
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Invalid JSON response from server');
      }
  
      const result = await response.json(); 
      console.log('Response JSON:', result);
  
      if (response.status === 200) {
        setMessage('Withdrawal initiated successfully!');
        setWithdrawalStatus('pending');
        localStorage.setItem('withdrawalStatus', 'pending'); // Persist withdrawal status
      } else {
        setMessage(result.message || 'An error occurred.');
      }
    } catch (error) {
      setMessage('Server error. Please try again later.');
      console.error('Error during withdrawal:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Balance />

      <section className="container top-[10rem] mx-auto mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* Transfer Icon */}
          <div
            className="flex flex-col items-center justify-center bg-white p-4 rounded-lg transition-transform duration-200 hover:scale-105"
            onClick={() => setShowTransferForm(!showTransferForm)}
          >
            <IoSendSharp className="text-4xl text-blue-600 mb-2" />
            <p className="text-lg font-medium text-gray-800">Transfer</p>
          </div>

          <div
            className="flex flex-col items-center justify-center p-4 rounded-lg transition-transform duration-200 hover:scale-105"
            onClick={() => alert("You are not eligible to access this feature.")}
          >
            <IoAddCircleOutline className="text-4xl text-green-600 mb-2" />
            <p className="text-lg font-medium text-gray-800">Add Money</p>
          </div>

          {/* Cards Icon */}
          <div
            className="flex flex-col items-center justify-center bg-white p-4 rounded-lg transition-transform duration-200 hover:scale-105"
            onClick={() => alert("You are not eligible to access this feature.")}
          >
            <FaCreditCard className="text-4xl text-purple-600 mb-2" />
            <p className="text-lg font-medium text-gray-800">Cards</p>
          </div>

          {/* Bills Icon */}
          <div
            className="flex flex-col items-center justify-center bg-white p-4 rounded-lg transition-transform duration-200 hover:scale-105"
            onClick={() => alert("You are not eligible to access this feature.")}
          >
            <RiBillLine className="text-4xl text-yellow-600 mb-2" />
            <p className="text-lg font-medium text-gray-800">Bills</p>
          </div>
        </div>
      </section>

      {/* Transfer Form (Visible when Transfer icon is clicked) */}
      {showTransferForm && (
        <section className="container mx-auto mt-8 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Transfer Funds</h2>
          <form onSubmit={handleTransferSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Account Number
              </label>
              <input
                type="text"
                name="accountNumber"
                value={transferData.accountNumber}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={transferData.password}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Amount
              </label>
              <input
                type="number"
                name="amount"
                value={transferData.amount}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Currency
              </label>
              <select
                name="currency"
                value={transferData.currency}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={transferData.description}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <button
              type="submit"
              className={`w-full bg-blue-600 text-white py-2 px-4 rounded-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Transfer'}
            </button>

            {/* Display success or error message */}
            {message && <p className="mt-4 text-center text-red-500">{message}</p>}

            {/* Show withdrawal status */}
            {withdrawalStatus && (
              <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
                <p className="text-sm font-medium">Withdrawal Status: {withdrawalStatus}</p>
              </div>
            )}
          </form>

          {/* Disable form if there's a pending withdrawal */}
          {withdrawalStatus === 'pending' && (
            <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
              <p className="text-sm font-medium text-red-600">You have a pending withdrawal. Please wait until it is processed.</p>
            </div>
          )}
        </section>
      )}
      <Bills />
    </>
  );
}

export default UserIcon;
