import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'animate.css';

const ResetPassword = () => {
  const { token } = useParams(); // Get the token from the URL
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(`https://your-api-url.com/reset-password/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setSuccess(true);
      } else {
        setMessage(data.message || 'Failed to reset password');
        setSuccess(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred');
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-white mt-10 animate__animated animate__fadeIn">
      <h1 className="text-2xl font-semibold text-center mb-4">Reset Password</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">New Password</label>
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
          disabled={loading}
        >
          {loading ? 'Resetting...' : 'Reset Password'}
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

export default ResetPassword;
