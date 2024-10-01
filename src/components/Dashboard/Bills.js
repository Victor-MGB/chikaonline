import React, { useState } from 'react';
import { MdOutlinePhonelinkRing, MdOutlineMoreHoriz } from "react-icons/md";
import { TbWorldDown } from "react-icons/tb";
import { GiLightBulb } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { IoTvOutline } from "react-icons/io5";
import RecentTransaction from './RecentTransaction';

function Bills() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Main Bills Section */}
      <section className="max-w-4xl mx-auto p-4 mt-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {/* Airtime */}
          <div className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between">
            <MdOutlinePhonelinkRing className="text-4xl text-blue-600" />
            <div>
              <p className="text-xl font-semibold">Airtime</p>
              <span className="text-green-500">3% off</span>
            </div>
          </div>

          {/* Data */}
          <div className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between">
            <TbWorldDown className="text-4xl text-purple-600" />
            <div>
              <p className="text-xl font-semibold">Data</p>
              <span className="text-green-500">3% off</span>
            </div>
          </div>

          {/* Electricity */}
          <div className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between">
            <GiLightBulb className="text-4xl text-yellow-500" />
            <div>
              <p className="text-xl font-semibold">Electricity</p>
              <span className="text-red-500">0% off</span>
            </div>
          </div>

          {/* More */}
          <div className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between cursor-pointer" onClick={openModal}>
            <MdOutlineMoreHoriz className="text-4xl text-gray-500" />
            <div>
              <p className="text-xl font-semibold">More</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for "More" options */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-auto shadow-lg">
            <h3 className="text-xl font-semibold mb-4">More Payment Options</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MdOutlinePhonelinkRing className="text-2xl text-blue-600 mr-2" />
                <p>Airtime</p>
              </li>
              <li className="flex items-center">
                <TbWorldDown className="text-2xl text-purple-600 mr-2" />
                <p>Data</p>
              </li>
              <li className="flex items-center">
                <GiLightBulb className="text-2xl text-yellow-500 mr-2" />
                <p>Electricity</p>
              </li>
              <li className="flex items-center">
                <IoTvOutline className="text-2xl text-gray-500 mr-2" />
                <p>Cable TV</p>
              </li>

              <li className="flex items-center">
                <FaWifi className="text-2xl text-gray-500 mr-2" />
                <p>Internet</p>
              </li>
            </ul>
            <button
              onClick={closeModal}
              className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <RecentTransaction />
    </>
  );
}

export default Bills;
