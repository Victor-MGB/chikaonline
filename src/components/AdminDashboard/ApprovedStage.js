import React, { useState, useEffect } from "react";
import { FaCheck, FaTimes, FaMoneyBillWave } from "react-icons/fa";

function ApprovedStage() {
  const [pendingWithdrawals, setPendingWithdrawals] = useState([]);

  // Fetch pending withdrawals when the component mounts
  useEffect(() => {
    fetch("https://banking-system-jc25.onrender.com/api/users/admin/withdrawals")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.pendingWithdrawals)) {
          setPendingWithdrawals(data.pendingWithdrawals);
        } else {
          console.error("Unexpected response format:", data);
        }
      })
      .catch((error) => console.error("Error fetching withdrawals:", error));
  }, []);

  // Function to handle approval or rejection of a stage
  const handleStageApproval = async (withdrawal, stageIndex, approved) => {
    try {
      const response = await fetch(
        "https://banking-system-jc25.onrender.com/api/users/admin/approveWithdrawalStage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: withdrawal.userId,
            withdrawalId: withdrawal.withdrawalId,
            stageIndex: stageIndex,
            approved: approved,
          }),
        }
      );
  
      const data = await response.json();
      if (response.ok) {
        alert(`Stage ${approved ? "approved" : "rejected"} successfully!`);
        setPendingWithdrawals((prevWithdrawals) =>
          prevWithdrawals.map((w) =>
            w.withdrawalId === withdrawal.withdrawalId ? data.withdrawal : w
          )
        );
  
        // Trigger event to update user stage
        window.dispatchEvent(new Event("stageUpdated"));
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error updating stage:", error);
    }
  };
  

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin - Pending Withdrawals</h1>
      <div className="space-y-6">
        {pendingWithdrawals.length > 0 ? (
          pendingWithdrawals.map((withdrawal, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-700 flex items-center">
                  <FaMoneyBillWave className="text-green-500 mr-2" />
                  Withdrawal {index + 1}
                </h3>
              </div>
              <p className="text-gray-600 mt-2">
                <span className="font-semibold">Account Number:</span> {withdrawal.accountNumber}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Amount:</span> ${withdrawal.amount}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Currency:</span> {withdrawal.currency}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Description:</span> {withdrawal.description}
              </p>

              <h4 className="text-lg font-semibold text-gray-700 mb-2">Stages:</h4>
              {withdrawal.stages.map((stage, stageIndex) => (
                <div
                  key={stageIndex}
                  className="bg-gray-50 p-4 rounded-lg shadow-sm mb-2 border"
                >
                  <p className="text-gray-700">
                    <span className="font-semibold">Stage Name:</span> {stage.name}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Description:</span> {stage.description}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Status:</span> {stage.status}
                  </p>
                  <div className="flex mt-4 space-x-2">
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center"
                      onClick={() => handleStageApproval(withdrawal, stageIndex, true)}
                    >
                      <FaCheck className="mr-2" />
                      Approve
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center"
                      onClick={() => handleStageApproval(withdrawal, stageIndex, false)}
                    >
                      <FaTimes className="mr-2" />
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">No pending withdrawals found.</p>
        )}
      </div>
    </div>
  );
}

export default ApprovedStage;
