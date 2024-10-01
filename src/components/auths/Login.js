import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import 'animate.css';
import { useNavigate, NavLink } from 'react-router-dom';

const Login = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading spinner
    setMessage(''); // Reset message

    const body = {
      accountNumber,
      password,
    };

    try {
      const response = await fetch('https://banking-system-jc25.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setSuccess(true);

        // Delay navigation slightly to simulate loading
        setTimeout(() => {
          navigate('/dashboard', { state: { user: data.user } });
        }, 1000); // 1-second delay for smoother transition
      } else {
        setMessage(data.message || 'Login failed');
        setSuccess(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred during login');
      setSuccess(false);
    } finally {
      setLoading(false); // Hide loading spinner after request completes
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-white mt-10">
      <h1 className="text-2xl font-semibold text-center mb-4">Login to Your Account</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="flex items-center">
            <FaUser className="mr-2 text-gray-600" /> Account Number
          </label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="flex items-center">
            <FaLock className="mr-2 text-gray-600" /> Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Logging in...' : 'Login'} {/* Show loading text */}
        </button>
      </form>

      {loading && (
        <div className="flex justify-center mt-4">
          {/* Loading spinner animation */}
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      )}

      {message && (
        <p
          className={`mt-4 text-center ${
            success ? 'text-green-600' : 'text-red-600'
          } animate__animated animate__fadeIn`}
        >
          {message}
        </p>
      )}

      {/* Navigation Links */}
      <div className="flex justify-between mt-4">
        <NavLink to="/forgot-password" className="text-blue-600 hover:underline">
          Forgot Password?
        </NavLink>
        <NavLink to="/reset-password" className="text-blue-600 hover:underline">
          Reset Password
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
