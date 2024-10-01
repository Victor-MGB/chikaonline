import React, { useState } from 'react';
import axios from 'axios';
import 'animate.css';
import AdminHeader from './AdminHeader'

function Particular() {
    const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState(null);

  // Fetch user by ID
  const fetchUserById = async () => {
    setLoading(true);
    setError(null);
    setDeleteMessage(null);
    try {
      const response = await axios.get(`https://banking-system-jc25.onrender.com/api/users/users/${userId}`);
      setUser(response.data);
    } catch (error) {
      setError("Failed to fetch user. Please make sure the user ID is correct.");
    } finally {
      setLoading(false);
    }
  };

  // Delete user by ID
  const deleteUserById = async () => {
    setLoading(true);
    setError(null);
    setDeleteMessage(null);
    try {
      await axios.delete(`https://banking-system-jc25.onrender.com/api/users/users/${userId}`);
      setUser(null);
      setDeleteMessage("User deleted successfully.");
    } catch (error) {
      setError("Failed to delete user.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
        <AdminHeader />

        <div className="p-6 max-w-md mt-[10rem] mx-auto bg-white shadow-md rounded-lg animate__animated animate__fadeIn">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      {/* Input Form */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Enter User ID:</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button
          onClick={fetchUserById}
          className="mt-3 w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          {loading ? "Fetching..." : "Fetch User"}
        </button>
      </div>

      {/* Display User Info */}
      {user && (
        <div className="mt-6 bg-gray-100 p-4 rounded-md animate__animated animate__fadeIn">
          <h2 className="text-xl font-semibold mb-2">{user.fullName}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>KYC Status:</strong> {user.kycStatus}</p>
          <p><strong>Account Created On:</strong> {new Date(user.dateOfAccountCreation).toLocaleDateString()}</p>

          {/* Delete User Button */}
          <button
            onClick={deleteUserById}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
          >
            {loading ? "Deleting..." : "Delete User"}
          </button>
        </div>
      )}

      {/* Error and Success Messages */}
      {error && (
        <p className="mt-4 text-red-500 font-semibold animate__animated animate__shakeX">{error}</p>
      )}
      {deleteMessage && (
        <p className="mt-4 text-green-500 font-semibold animate__animated animate__fadeIn">{deleteMessage}</p>
      )}
    </div>
    </>
  )
}

export default Particular