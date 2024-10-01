import React from 'react';
import { GrTransaction } from "react-icons/gr";
import { useLocation } from 'react-router-dom';
import BankingFeatures from './BankingFeatures';

function RecentTransaction() {
  const location = useLocation();
  const userArray = location.state?.user; // Access user data from location.state
  const user = userArray?.[0]; // Get the first user object from the array

  const transactions = user?.accounts?.[0]?.transactions || []; // Fetch transactions from the first account of the user

  return (
    <>
      <section className="max-w-4xl mx-auto p-4 mt-10">
        <div className="flex justify-between items-center">
          <h4 className="text-xl font-semibold">Recent Transactions</h4>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">View all</button>
        </div>

        <div className="mt-6 space-y-4">
          {transactions.length > 0 ? (
            transactions.map(transaction => (
              <div key={transaction.transactionId} className="bg-white shadow-lg rounded-lg p-4 flex justify-between items-center">
                <GrTransaction className="text-2xl text-gray-500" />
                <div className="flex flex-col">
                  <h4 className="text-lg font-semibold">{user?.fullName}</h4>
                  <p>{transaction.description}</p>
                  {/* Display formatted date */}
                  <p className="text-gray-600 text-sm">
                    {new Date(transaction.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
                <b className={`text-lg ${transaction.type === 'credit' ? 'text-green-500' : 'text-red-500'}`}>
                  {transaction.type === 'credit' ? '+' : '-'}${transaction.amount} {transaction.currency}
                </b>
              </div>
            ))
          ) : (
            <p>No transactions available</p>
          )}
        </div>
      </section>

      <BankingFeatures />
    </>
  );
}

export default RecentTransaction;
