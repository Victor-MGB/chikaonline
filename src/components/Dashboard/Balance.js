import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5"; // Added IoEyeOffSharp for the hidden state
import { FaCoins } from "react-icons/fa";

function Balance() {
    const location = useLocation();
    const user = location.state?.user;

    const [showBalance, setShowBalance] = useState(false); // State to toggle balance visibility

    const toggleBalance = () => {
        setShowBalance(!showBalance);
    };

    return (
        <>
            {/* Laptop and mobile view styles */}
            <section className="max-w-4xl mx-auto p-4 mt-10">
                {/* Flex container for Account Balance and Savings Section */}
                <div className="flex flex-col lg:flex-row lg:space-x-6">
                    
                    {/* Account Balance Section */}
                    <div className="bg-white shadow-lg mb-[2rem] rounded-lg p-6 lg:mb-0 flex-1">
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-semibold">
                                {/* If showBalance is true, show actual balance; otherwise, show masked balance */}
                                Balance: ${showBalance ? `${user?.accounts[0]?.balance || "0"}` : '****'}
                            </p>
                            {/* Toggle between Eye and EyeOff icons */}
                            <button onClick={toggleBalance} className="focus:outline-none bg-white">
                                {showBalance ? (
                                    <IoEyeOffSharp className="text-3xl text-gray-600" />
                                ) : (
                                    <IoEyeSharp className="text-3xl text-gray-600" />
                                )}
                            </button>
                        </div>
                        <p className="text-gray-600 mt-2">Account balance</p>
                    </div>

                    {/* Savings Section */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
                        <div className="flex items-center justify-between">
                            <h5 className="text-xl font-semibold">Nothing saved yet</h5>
                            <FaCoins className="text-3xl text-yellow-500" />
                        </div>
                        <p className="text-gray-600 mt-2">Make your first savings and start earning interest today</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Balance;
