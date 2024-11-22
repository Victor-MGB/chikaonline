import React from 'react';
import { IoSendSharp, IoAddCircleOutline } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa6";
import { RiBillLine } from "react-icons/ri";
import Balance from './Balance';
import Bills from './Bills';
import UserStage from './UserStage';

function UserIcon() {
  return (
    <>
      <Balance />

      <section className="container top-[10rem] mx-auto mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* Transfer Icon */}

          <div
            className="flex flex-col items-center justify-center p-4 rounded-lg transition-transform duration-200 hover:scale-105"
            onClick={() => alert("You are not eligible to access this feature.")}
          >
            <IoAddCircleOutline className="text-4xl text-green-600 mb-2" />
            <p className="text-lg font-medium text-gray-800">Add Money</p>
          </div>

          {/* Cards Icon */}
          <div
            className="flex flex-col items-center justify-center bg-white p-4 rounded-lg transition-transform duration-200 hover:scale-105"
            onClick={() => alert("You are not eligible to access this feature.")}
          >
            <FaCreditCard className="text-4xl text-purple-600 mb-2" />
            <p className="text-lg font-medium text-gray-800">Cards</p>
          </div>

          {/* Bills Icon */}
          <div
            className="flex flex-col items-center justify-center bg-white p-4 rounded-lg transition-transform duration-200 hover:scale-105"
            onClick={() => alert("You are not eligible to access this feature.")}
          >
            <RiBillLine className="text-4xl text-yellow-600 mb-2" />
            <p className="text-lg font-medium text-gray-800">Bills</p>
          </div>
        </div>
      </section>

      {/* Transfer Form (Visible when Transfer icon is clicked) */}
      {/* {showTransferForm && (
        
      )} */}
      <Bills />
    </>
  );
}

export default UserIcon;
