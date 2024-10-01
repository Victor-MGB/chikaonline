import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from './AdminHeader';
import 'animate.css';
import DeleteUserModal from "./DeleteUserModal";
function Clients() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedUser] = useState(null);


    // Fetch users data from the backend
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get("https://banking-system-jc25.onrender.com/api/users/users"); // Replace with your actual API URL
                setUsers(res.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching users:", error);
                setError("Failed to load user data");
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <div className="text-center py-10 text-lg font-semibold">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center py-10">{error}</div>;
    }

      // Function to handle user deletion
      const handleDeleteUser = async (id) => {
        try {
            await axios.delete(`https://banking-system-jc25.onrender.com/api/users/${id}`);
            setUsers(users.filter(user => user._id !== id));
            setModalOpen(false);
        } catch (error) {
            console.error("Error deleting user:", error);
            setError("Failed to delete user.");
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <AdminHeader />

            <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-8 lg:px-16 animate__animated animate__fadeIn">
                <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">All Users Dashboard</h1>

                {users.length === 0 ? (
                    <p className="text-center text-gray-500">No users found</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {users.map((user) => (
                            <div key={user._id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                            <b>{user._id}</b>
                                <h2 className="text-xl font-bold text-gray-800">{user.fullName}</h2>
                                <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
                                <p className="text-gray-600"><strong>KYC Status:</strong> {user.kycStatus}</p>
                                <p className="text-gray-600"><strong>Account Created On:</strong> {new Date(user.dateOfAccountCreation).toLocaleDateString()}</p>

                                {/* Accounts */}
                                <h3 className="text-lg font-semibold mt-4 text-blue-600">Accounts</h3>
                                {user.accounts.length === 0 ? (
                                    <p className="text-gray-500">No accounts available</p>
                                ) : (
                                    user.accounts.map((account) => (
                                        <div key={account.accountId} className="mt-2 p-3 border rounded-lg bg-gray-50">
                                            <p className="text-gray-600"><strong>Account Number:</strong> {account.accountNumber}</p>
                                            <p className="text-gray-600"><strong>Account Type:</strong> {account.type}</p>
                                            <p className="text-gray-600"><strong>Balance:</strong> ${account.balance} {account.currency}</p>

                                            {/* Transactions */}
                                            <h4 className="text-lg font-medium mt-2 text-blue-600">Transactions</h4>
                                            {account.transactions.length === 0 ? (
                                                <p className="text-gray-500">No transactions available</p>
                                            ) : (
                                                <ul className="space-y-2">
                                                    {account.transactions.map((transaction) => (
                                                        <li key={transaction.transactionId} className="text-sm text-gray-600">
                                                            <p><strong>Date:</strong> {new Date(transaction.date).toLocaleString()}</p>
                                                            <p><strong>Type:</strong> {transaction.type}</p>
                                                            <p><strong>Amount:</strong> ${transaction.amount} {transaction.currency}</p>
                                                            <p><strong>Description:</strong> {transaction.description}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))
                                )}

                                {/* Notifications */}
                                <h3 className="text-lg font-semibold mt-4 text-blue-600">Notifications</h3>
                                {user.notifications.length === 0 ? (
                                    <p className="text-gray-500">No notifications available</p>
                                ) : (
                                    user.notifications.map((notification) => (
                                        <div key={notification.notificationId} className="mt-2 p-3 border rounded-lg bg-gray-50">
                                            <p className="text-gray-600"><strong>Message:</strong> {notification.message}</p>
                                            <p className="text-gray-600"><strong>Date:</strong> {new Date(notification.date).toLocaleString()}</p>
                                            <p className="text-gray-600"><strong>Read:</strong> {notification.read ? "Yes" : "No"}</p>
                                        </div>
                                    ))
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

              {/* Delete Confirmation Modal */}
              <DeleteUserModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onDelete={() => handleDeleteUser(selectedUser._id)}
                userName={selectedUser ? selectedUser.fullName : ''}
            />
        </>
    );
}

export default Clients;
