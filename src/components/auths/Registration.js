import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import 'animate.css';
import { useNavigate, Link } from 'react-router-dom';

const Registration = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://banking-system-jc25.onrender.com/api/users/register', {
        fullName,
        email,
        password,
      });
      setMessage(response.data.message);
      setSuccess(true);
      navigate('/otp');
    } catch (error) {
      console.error('There was an error!', error);
      setMessage('There was an error with the registration.');
      setSuccess(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://templates.envytheme.com/leve/default/assets/img/page-banner/page-banner-4.jpg')`,
      }}>
      <div className="max-w-md w-full bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">Join Our Secure Banking System</h1>
        <p className="text-center text-gray-600 mb-6">
          Experience secure, fast, and convenient online banking. Register now to access your account!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="flex items-center mb-1 text-gray-600">
              <FaUser className="mr-2 text-blue-600" /> Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="Enter your full name"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="flex items-center mb-1 text-gray-600">
              <FaEnvelope className="mr-2 text-blue-600" /> Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="flex items-center mb-1 text-gray-600">
              <FaLock className="mr-2 text-blue-600" /> Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Create a secure password"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Register
          </button>
        </form>

        {message && (
          <p className={`mt-4 text-center ${success ? 'text-green-600' : 'text-red-600'} animate__animated animate__fadeIn`}>
            {message}
          </p>
        )}

        <div className="mt-6 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">Login here</Link>
        </div>

        <div className="mt-4 text-center">
          <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
