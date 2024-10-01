import React, { useState } from 'react';
import UserFooter from "../Dashboard/UserFooter";

function GenerateStatement() {
  const [accountNumber, setAccountNumber] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [statement, setStatement] = useState(null);
  const [error, setError] = useState(null);

  const handleGenerateStatement = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('https://banking-system-jc25.onrender.com/api/users/generate-statement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accountNumber,
          startDate,
          endDate,
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to generate statement');
      }

      setStatement(data.statement);
    } catch (err) {
      setError(err.message);
      setStatement(null);
    }
  };

  return (
    <>
      <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold">Generate Account Statement</h1>
      <form onSubmit={handleGenerateStatement}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="accountNumber">
            Account Number:
          </label>
          <input
            type="text"
            id="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="startDate">
            Start Date:
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="endDate">
            End Date:
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Generate Statement
        </button>
      </form>

      {error && (
        <div className="text-red-500 mt-4">
          <strong>Error: </strong>{error}
        </div>
      )}

      {statement && (
        <div className="mt-6 p-4 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-bold">Statement Details:</h2>
          <p><strong>Account Number:</strong> {statement.accountNumber}</p>
          <p><strong>Account Type:</strong> {statement.accountType}</p>
          <p><strong>Balance:</strong> {statement.balance}</p>
          <p><strong>Currency:</strong> {statement.currency}</p>
          <p><strong>Period:</strong> {statement.period.startDate} to {statement.period.endDate}</p>

          <h3 className="font-bold mt-4">Transactions:</h3>
          <ul className="list-disc ml-6">
            {statement.transactions.length > 0 ? statement.transactions.map((transaction, index) => (
              <li key={index}>
                <p><strong>Date:</strong> {transaction.date}</p>
                <p><strong>Description:</strong> {transaction.description}</p>
                <p><strong>Amount:</strong> {transaction.amount}</p>
              </li>
            )) : <p>No transactions found for the given period.</p>}
          </ul>
        </div>
      )}
    </div>

    <UserFooter />
    </>
  );
}

export default GenerateStatement;
