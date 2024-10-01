import React from 'react';
import 'animate.css';

const DeleteUserModal = ({ isOpen, onClose, onDelete, userName }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-96 animate__animated animate__fadeIn">
                <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
                <p className="mb-4">
                    Are you sure you want to delete the user <strong>{userName}</strong>? This action cannot be undone.
                </p>
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2 hover:bg-gray-400 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onDelete}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteUserModal;
