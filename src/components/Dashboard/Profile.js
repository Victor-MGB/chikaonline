import React from 'react';
import { useLocation } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  const user = location.state?.user; // Retrieve user data from state

  return (
    <div className="max-w-md mx-auto p-4 mt-10">
      <h1 className="text-3xl font-semibold mb-6">Welcome, {user?.fullName}</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
      
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Account Number:</strong> {user?.accounts[0].accountNumber}</p>
        <p><strong>Balance:</strong> {user?.accounts[0].balance} {user?.accounts[0].currency}</p>
        <p><strong>KYC Status:</strong> {user?.kycStatus}</p>
        <p><strong>Date of Account Creation:</strong> {new Date(user?.dateOfAccountCreation).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default Profile;
