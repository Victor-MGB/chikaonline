import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { TbRefreshDot } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import 'animate.css';
import UserIcon from './UserIcon';
import { useLocation } from 'react-router-dom';

function UserDashboard() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const location = useLocation();
  const user = location.state?.user; // Retrieve user data from state

  return (
    <>
      <div className=" flex flex-col items-center justify-start">
        {/* Header Section */}
        <header className="w-full bg-white shadow-sm animate__animated animate__fadeIn py-4">
          <div className="container mx-auto flex justify-between items-center px-6">
            {/* Profile Section */}
            <div className="flex space-x-4 items-center">
              <CgProfile
                className="text-4xl text-blue-600 cursor-pointer hover:scale-110 transition-transform duration-200"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              <div>
              <div>
              <h6 className="text-gray-500 text-sm">Welcome <span> {user?.fullName} to</span></h6>

              </div>
                <h4 className="text-lg font-bold text-gray-800">Online Banking System</h4>
                <h3><small>Account Number:</small> {user?.accounts[0].accountNumber}</h3>
                </div>
            </div>



            {/* Refresh Button */}
            <TbRefreshDot
              className="text-4xl text-green-600 cursor-pointer hover:rotate-180 transition-transform duration-300"
              onClick={() => window.location.reload()}
            />
          </div>
        </header>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute top-[10rem] left-6 w-48 bg-white shadow-md rounded-md">
            <ul className="text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/profile">
                  Bank account Details
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/banking-benefits">
                  Bank Account benefits
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/user-stage">
                  Withdraw / Transfer
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
            </ul>
          </div>
        )}
      </div>

      <UserIcon />
    </>
  );
}

export default UserDashboard;
