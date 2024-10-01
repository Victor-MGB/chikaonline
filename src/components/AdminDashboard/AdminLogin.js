import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FaUser, FaLock } from 'react-icons/fa'; // User and lock icons
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi'; // Error and success icons

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate(); // Initialize the navigate hook

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://banking-system-jc25.onrender.com/admin/login', { email, password });
      setSuccess(true);
      setMessage(res.data.msg);
      
      // Store the token and email in localStorage
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('adminEmail', email); // Store the admin's email
      
      // Navigate to the admin dashboard upon successful login
      navigate('/clients');
    } catch (err) {
      setSuccess(false);
      setMessage(err.response?.data?.msg || 'Something went wrong. Please try again.');
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Admin Login</h2>

        {/* Display Success/Failure Messages */}
        {message && (
          <div
            className={`flex items-center justify-center p-2 rounded-md text-white mb-4 ${success ? 'bg-green-500' : 'bg-red-500'}`}
          >
            {success ? <FiCheckCircle className="mr-2" size={24} /> : <FiAlertCircle className="mr-2" size={24} />}
            {message}
          </div>
        )}

        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter admin email"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;


// // const cors = require('cors');
// const express = require('express');
// const app = express();

// app.use(cors({
//   origin: 'http://localhost:3000', // Allow requests from React dev server
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true // if you're sending cookies or auth headers
// }));

// app.use(express.json());
// app.use('/api', yourApiRoutes); // Mount your routes
