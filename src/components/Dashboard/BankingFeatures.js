import React from 'react';
import { AiFillBank, AiOutlineMoneyCollect, AiOutlineTransaction } from 'react-icons/ai';
import { FaUsers, FaRegCreditCard, FaChartPie } from 'react-icons/fa';
import GenerateStatement from './GenerateStatement';

const BankingFeatures = () => {
  const features = [
    {
      icon: <AiFillBank className="text-4xl text-blue-600" />,
      title: "Secure Banking",
      description: "Experience secure banking with our encrypted transactions and privacy policies."
    },
    {
      icon: <AiOutlineMoneyCollect className="text-4xl text-blue-600" />,
      title: "Easy Deposits",
      description: "Make deposits easily through various channels including ATMs and online banking."
    },
    {
      icon: <FaRegCreditCard className="text-4xl text-blue-600" />,
      title: "Flexible Payments",
      description: "Pay your bills, transfer money, and shop online with ease using our flexible payment options."
    },
    {
      icon: <AiOutlineTransaction className="text-4xl text-blue-600" />,
      title: "Transaction History",
      description: "Keep track of all your transactions with our detailed history feature."
    },
    {
      icon: <FaChartPie className="text-4xl text-blue-600" />,
      title: "Financial Insights",
      description: "Get insights into your spending habits and savings with our analysis tools."
    },
    {
      icon: <FaUsers className="text-4xl text-blue-600" />,
      title: "Customer Support",
      description: "Our dedicated customer support is here to assist you with any inquiries you may have."
    }
  ];

  return (
    <>
        <section className="max-w-6xl mx-auto p-4 mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">What Our Banking System Offers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
            {feature.icon}
            <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>

    <GenerateStatement />
    </>
  );
};

export default BankingFeatures;
