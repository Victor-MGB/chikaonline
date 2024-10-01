import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminHeader from "../AdminDashboard/AdminHeader";
import 'animate.css'; // Import animate.css for animations

function UserManagement() {
  // User Section State
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [userError, setUserError] = useState(null);

  // Deposit Section State
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [loadingDeposit, setLoadingDeposit] = useState(false);
  const [depositMessage, setDepositMessage] = useState(null);
  const [depositError, setDepositError] = useState(null);

  // Update Deposit Section State
  const [newAmount, setNewAmount] = useState('');
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [updateMessage, setUpdateMessage] = useState(null);
  const [updateError, setUpdateError] = useState(null);

  // Admin Verification Section State
  const [stageAccountNumber, setStageAccountNumber] = useState('');
  const [stageNumber, setStageNumber] = useState('');
  const [loadingVerify, setLoadingVerify] = useState(false);
  const [verifyMessage, setVerifyMessage] = useState(null);
  const [verifyError, setVerifyError] = useState(null);

  // Fetch Users
  useEffect(() => {
    const fetchUsers = async () => {
      setLoadingUsers(true);
      try {
        const response = await axios.get('https://banking-system-jc25.onrender.com/api/users/users');
        setUsers(response.data);
      } catch (err) {
        setUserError('Failed to fetch users.');
      } finally {
        setLoadingUsers(false);
      }
    };
    fetchUsers();
  }, []);

  // Handle Deposit
  const handleDeposit = async (e) => {
    e.preventDefault();
    setLoadingDeposit(true);
    setDepositMessage(null);
    setDepositError(null);
    try {
      const response = await axios.post('https://banking-system-jc25.onrender.com/api/users/deposit', {
        accountNumber,
        amount: parseFloat(amount),
        currency,
      });
      setDepositMessage(response.data.message);
    } catch (err) {
      setDepositError(err.response.data.message || 'Deposit failed.');
    } finally {
      setLoadingDeposit(false);
    }
  };

  // Handle Update Deposit
  const handleUpdateDeposit = async (e) => {
    e.preventDefault();
    setLoadingUpdate(true);
    setUpdateMessage(null);
    setUpdateError(null);
    try {
      const response = await axios.put('https://banking-system-jc25.onrender.com/api/users/update-deposit', {
        accountNumber,
        newAmount: parseFloat(newAmount),
      });
      setUpdateMessage(response.data.message);
    } catch (err) {
      setUpdateError(err.response.data.message || 'Update failed.');
    } finally {
      setLoadingUpdate(false);
    }
  };

  // Handle Admin Stage Verification
  const handleVerifyStage = async (e) => {
    e.preventDefault();
    setLoadingVerify(true);
    setVerifyMessage(null);
    setVerifyError(null);
    try {
      const response = await axios.post('https://banking-system-jc25.onrender.com/api/users/admin/verify-stage', {
        accountNumber: stageAccountNumber,
        stageNumber,
      });
      setVerifyMessage(response.data.message);
    } catch (err) {
      setVerifyError(err.response.data.message || 'Verification failed.');
    } finally {
      setLoadingVerify(false);
    }
  };

  return (
    <>
    <AdminHeader />
      <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-center mb-10">Online Banking System</h1>

      {/* User List Section */}
      <div className="container mx-auto mb-10 p-5 bg-white shadow-lg rounded animate__animated animate__fadeIn">
        <h2 className="text-2xl font-bold mb-4">User List</h2>
        {loadingUsers && <p className="text-gray-500">Loading...</p>}
        {userError && <p className="text-red-500">{userError}</p>}
        <ul>
          {users.map((user) => (
            <li key={user._id} className="p-2 border-b">
              {user.name} - {user.email}
              <h3><small>Account Number:</small> {user?.accounts[0].accountNumber}</h3>
            </li>
          ))}
        </ul>
      </div>

      {/* Deposit Section */}
      <div className="container mx-auto mb-10 p-5 bg-white shadow-lg rounded animate__animated animate__fadeIn">
        <h2 className="text-2xl font-bold mb-4">Make a Deposit</h2>
        <form onSubmit={handleDeposit}>
          <input
            type="text"
            placeholder="Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="border p-2 w-full mb-2"
            required
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 w-full mb-2"
            required
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="border p-2 w-full mb-2"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="NGN">NGN</option>
          </select>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            {loadingDeposit ? 'Depositing...' : 'Deposit'}
          </button>
        </form>
        {depositMessage && <p className="text-green-500 mt-2">{depositMessage}</p>}
        {depositError && <p className="text-red-500 mt-2">{depositError}</p>}
      </div>

      {/* Update Deposit Section */}
      <div className="container mx-auto mb-10 p-5 bg-white shadow-lg rounded animate__animated animate__fadeIn">
        <h2 className="text-2xl font-bold mb-4">Update Deposit</h2>
        <form onSubmit={handleUpdateDeposit}>
          <input
            type="text"
            placeholder="Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="border p-2 w-full mb-2"
            required
          />
          <input
            type="number"
            placeholder="New Amount"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            className="border p-2 w-full mb-2"
            required
          />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            {loadingUpdate ? 'Updating...' : 'Update Deposit'}
          </button>
        </form>
        {updateMessage && <p className="text-green-500 mt-2">{updateMessage}</p>}
        {updateError && <p className="text-red-500 mt-2">{updateError}</p>}
      </div>

      {/* Admin Verification Section */}
      <div className="container mx-auto mb-10 p-5 bg-white shadow-lg rounded animate__animated animate__fadeIn">
        <h2 className="text-2xl font-bold mb-4">Admin Stage Verification</h2>
        <form onSubmit={handleVerifyStage}>
          <input
            type="text"
            placeholder="Account Number"
            value={stageAccountNumber}
            onChange={(e) => setStageAccountNumber(e.target.value)}
            className="border p-2 w-full mb-2"
            required
          />
          <input
            type="number"
            placeholder="Stage Number"
            value={stageNumber}
            onChange={(e) => setStageNumber(e.target.value)}
            className="border p-2 w-full mb-2"
            required
          />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            {loadingVerify ? 'Verifying...' : 'Verify Stage'}
          </button>
        </form>
        {verifyMessage && <p className="text-green-500 mt-2">{verifyMessage}</p>}
        {verifyError && <p className="text-red-500 mt-2">{verifyError}</p>}
      </div>
    </div>
    </>
  );
}

export default UserManagement;
