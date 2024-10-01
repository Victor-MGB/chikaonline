// OTPVerificationForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { FaEnvelope, FaKey } from 'react-icons/fa';
import 'animate.css';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://banking-system-jc25.onrender.com/api/users/verify-otp', {
        email,
        otp,
      });
      setMessage(response.data.message);
      setSuccess(true);
      // Navigate to Login page here, if using react-router
      navigate('/login')
    } catch (error) {
      console.error('There was an error!', error);
      setMessage('There was an error with OTP verification.');
      setSuccess(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-white mt-10">
      <h1 className="text-2xl font-semibold text-center mb-4">Verify Your OTP</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="flex items-center">
            <FaEnvelope className="mr-2 text-gray-600" /> Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="otp" className="flex items-center">
            <FaKey className="mr-2 text-gray-600" /> OTP
          </label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
          Verify OTP
        </button>
      </form>
      {message && (
        <p className={`mt-4 text-center ${success ? 'text-green-600' : 'text-red-600'} animate__animated animate__fadeIn`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Otp;
