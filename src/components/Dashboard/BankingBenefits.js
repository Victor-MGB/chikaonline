import React from 'react';
import { AiOutlineRise, AiOutlineGlobal } from 'react-icons/ai';
import { FaHelmetSafety } from "react-icons/fa6";
import { FaMoneyBillWave, FaRegHandshake, FaRegStar } from 'react-icons/fa';

const BankingBenefits = () => {
  const benefits = [
    {
      icon: <FaHelmetSafety className="text-4xl text-green-600" />,
      title: "Security",
      description: "Your money is secure with us. We implement top-notch security measures to protect your funds."
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-green-600" />,
      title: "Easy Access to Funds",
      description: "Access your funds anytime, anywhere through ATMs, online banking, and mobile apps."
    },
    {
      icon: <AiOutlineRise className="text-4xl text-green-600" />,
      title: "Wealth Growth",
      description: "Invest and save with competitive interest rates to grow your wealth over time."
    },
    {
      icon: <FaRegHandshake className="text-4xl text-green-600" />,
      title: "Personalized Services",
      description: "Enjoy personalized banking experiences tailored to your financial needs and goals."
    },
    {
      icon: <AiOutlineGlobal className="text-4xl text-green-600" />,
      title: "Global Transactions",
      description: "Make international transactions with ease, ensuring you can do business anywhere in the world."
    },
    {
      icon: <FaRegStar className="text-4xl text-green-600" />,
      title: "Rewards and Benefits",
      description: "Get rewarded for banking with us through exclusive offers, cashback, and loyalty programs."
    },
    {
      icon: <FaRegStar className="text-4xl text-green-600" />,
      title: "Customer Loyalty Program",
      description: "Be a regular customer and win exciting prizes such as gift cards, discounts, and exclusive experiences."
    },
  ];

  return (
    <section className="max-w-6xl mx-auto p-4 mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Benefits of Our Banking System</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
            {benefit.icon}
            <h3 className="text-lg font-semibold mt-4">{benefit.title}</h3>
            <p className="text-gray-600 mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BankingBenefits;
