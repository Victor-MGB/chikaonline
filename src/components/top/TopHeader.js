import React from 'react';
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineAssignmentInd } from "react-icons/md";

function TopHeader() {
  return (
    <section className="flex justify-between items-center p-4 bg-black text-yellow-500 w-full">
      {/* Left Section: Contact Information */}
      <div className="flex items-center space-x-4 text-sm">
        {/* Show email on all screen sizes */}
        <p className="flex items-center"><MdEmail className="mr-1" />sheritage144@gmail.com</p>

        {/* Hide phone number on small screens and show on medium and above */}
        <p className="hidden md:flex items-center"><IoCallSharp className="mr-1" />+447309652806</p>
      </div>

      {/* Right Section: Links and Language Selection */}
      <div className="flex items-center space-x-4 text-sm">

        {/* Show language dropdown on all screen sizes */}
        <button className="flex items-center px-3 py-1 bg-transparent border border-yellow-500 rounded hover:bg-yellow-500 hover:text-black transition duration-300">
          English<IoIosArrowDown className="ml-1" />
        </button>

        {/* Show sign in on all screen sizes */}
        <NavLink to="/login" className="flex items-center hover:underline">
          <MdOutlineAssignmentInd className="mr-1" /> Sign In
        </NavLink>
      </div>
    </section>
  );
}

export default TopHeader;
