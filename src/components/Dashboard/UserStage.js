import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const UserStage = () => {
  const [formData, setFormData] = useState({
    accountNumber: "",
    amount: "",
    currency: "",
    description: "",
  });
  const [stages, setStages] = useState([]);
  const [error, setError] = useState("");
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission

  // Handle form inputs dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "https://banking-system-jc25.onrender.com/api/users/createWithdrawal",
        formData
      );

      const stagesData = response.data.stages;
      setStages(stagesData);
      setCurrentStageIndex(0);
      saveToLocalStorage("stages", stagesData);
      saveToLocalStorage("currentStageIndex", 0);

      // Mark form as submitted
      setFormSubmitted(true);
      saveToLocalStorage("formSubmitted", true);
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred. Please try again.");
    }
  };

  const fetchPendingStages = useCallback(async () => {
    if (!formData.accountNumber) return;

    try {
      const response = await axios.get(
        `https://banking-system-jc25.onrender.com/api/users/checkPendingStages/${formData.accountNumber}`
      );
      const pendingStages = response.data.pendingStages;

      if (pendingStages.length > 0) {
        setStages(pendingStages);
        setCurrentStageIndex(0);
        saveToLocalStorage("stages", pendingStages);
        saveToLocalStorage("currentStageIndex", 0);
      } else {
        setError("No pending stages found.");
      }
    } catch (err) {
      console.error("Error fetching pending stages:", err);
      setError("Failed to fetch pending stages.");
    }
  }, [formData.accountNumber]);

  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const loadFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  useEffect(() => {
    // Retrieve data from localStorage on component mount
    const storedData = loadFromLocalStorage("formData") || {};
    const storedStages = loadFromLocalStorage("stages") || [];
    const storedIndex = loadFromLocalStorage("currentStageIndex") || 0;
    const storedFormSubmitted = loadFromLocalStorage("formSubmitted") || false;

    setFormData((prev) => ({ ...prev, ...storedData }));
    setStages(storedStages);
    setCurrentStageIndex(storedIndex);
    setFormSubmitted(storedFormSubmitted);
  }, []);

  useEffect(() => {
    // Save account number to localStorage on change
    saveToLocalStorage("formData", formData);
  }, [formData]);

  useEffect(() => {
    // Poll for pending stages every 5 seconds
    const intervalId = setInterval(fetchPendingStages, 5000);
    return () => clearInterval(intervalId);
  }, [fetchPendingStages]);

  const moveToNextStage = () => {
    if (currentStageIndex < stages.length - 1) {
      const nextIndex = currentStageIndex + 1;
      setCurrentStageIndex(nextIndex);
      saveToLocalStorage("currentStageIndex", nextIndex);
    }
  };

  const handleResetForm = () => {
    setFormSubmitted(false);
    saveToLocalStorage("formSubmitted", false);
    setStages([]);
    setCurrentStageIndex(0);
  };

  return (
    <div className="withdrawal-form p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Create Withdrawal</h2>
  
    {formSubmitted ? (
      <>
        {stages.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Pending Stages</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded-lg shadow-md">
                <strong className="text-lg text-blue-600">
                  {stages[currentStageIndex]?.name}:
                </strong>
                <p className="mt-2 text-gray-600">{stages[currentStageIndex]?.description}</p>
                <span className="block text-sm text-gray-500 mt-2">
                  {currentStageIndex === stages.length - 1
                    ? "Final Stage"
                    : `Stage ${currentStageIndex + 1} of ${stages.length}`}
                </span>
              </div>
  
              {/* Progress Bar */}
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                    Progress
                  </div>
                </div>
                <div className="flex mb-2 items-center justify-between">
                  <div className="w-full bg-gray-200 rounded-full">
                    <div
                      className="bg-green-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                      style={{
                        width: `${((currentStageIndex + 1) / stages.length) * 100}%`,
                      }}
                    >
                      <span className="absolute right-0 top-0 mr-2 mt-1 text-white font-bold">
                        {Math.floor(((currentStageIndex + 1) / stages.length) * 100)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Next Stage Button */}
              {currentStageIndex < stages.length - 1 && (
                <button
                  onClick={moveToNextStage}
                  className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                  Proceed to Next Stage
                </button>
              )}
            </div>
          </div>
        )}
        <button
          onClick={handleResetForm}
          className="mt-4 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Reset Withdrawal
        </button>
      </>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-4">
        {["accountNumber", "amount", "currency", "description"].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700 capitalize">
              {field}:
            </label>
            <input
              type={field === "amount" ? "number" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleInputChange}
              required={field !== "description"}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring focus:ring-blue-300"
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Create Withdrawal
        </button>
      </form>
    )}
  
    {error && <p className="mt-4 text-red-500">{error}</p>}
  </div>
  );
};

export default UserStage;
