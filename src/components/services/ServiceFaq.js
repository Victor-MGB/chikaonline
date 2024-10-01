import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Icons for expand/collapse

function ServiceFaq() {
    const { theme } = useContext(ThemeContext);

  // Define theme-based styles
  const themeStyles = {
    'light-theme': 'bg-gray-100 text-gray-900',
    'dark-theme': 'bg-gray-900 text-gray-100',
    'blue-theme': 'bg-blue-900 text-white',
    'green-theme': 'bg-green-900 text-white',
  };

  // Extract the theme style
  const currentThemeStyle = themeStyles[theme] || themeStyles['light-theme'];

  // State to manage expanded FAQs
  const [expanded, setExpanded] = useState(null);

  // Toggle function for expanding/collapsing FAQ items
  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

    const faqs = [
        {
          question: 'What is a bank account?',
          answer:
            'A bank account is a financial account maintained by a bank for a customer. It allows you to deposit, withdraw, and manage your money securely. Common types include savings, checking, and business accounts.',
        },
        {
          question: 'How do I activate my card?',
          answer:
            'You can activate your card by calling the bank\'s customer service number, using an ATM, or logging into your online banking account and following the activation instructions.',
        },
        {
          question: 'How do I change my password?',
          answer:
            'To change your password, log into your online banking account, navigate to the settings or security section, and follow the prompts to update your password. Make sure to choose a strong password.',
        },
        {
          question: 'How do I transfer funds to another account?',
          answer:
            'You can transfer funds by logging into your online banking, selecting the transfer option, entering the recipient\'s account details, and confirming the amount. Ensure the details are correct before proceeding.',
        },
        {
          question: 'How do I verify my identity?',
          answer:
            'Identity verification can be done through your online banking app or in-person at a branch. You may need to provide identification documents like a passport or driver’s license, and proof of address.',
        },
        {
          question: 'How do I download the App?',
          answer:
            'You can download the bank’s app from your device’s app store (Google Play or Apple App Store). Search for the app by the bank’s name, download it, and follow the installation instructions.',
        },
        {
          question: 'How do I set up a new user?',
          answer:
            'To set up a new user, log into your online banking, go to the user management section, and follow the prompts to add a new user. You may need to provide identification details for the new user.',
        },
        {
          question: 'How do I change my previous information?',
          answer:
            'To update your personal information, log into your online banking account, go to your profile settings, and update the relevant information. You may need to verify your changes with a security code.',
        },
      ];
  return (
    <>
        <section className={`py-12 ${currentThemeStyle.container}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">FAQs</h2>
        <p className="mb-4">Find your answers faster in our popular FAQ topics.</p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`border-b ${currentThemeStyle.border} pb-4`}>
              <button
                className={`flex justify-between items-center w-full text-left py-2 px-4 rounded-md ${currentThemeStyle.button}`}
                onClick={() => toggleExpand(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {expanded === index ? <FaMinus className="text-xl" /> : <FaPlus className="text-xl" />}
              </button>
              {expanded === index && <p className={`mt-2 text-sm ${currentThemeStyle.answer}`}>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  )
}

export default ServiceFaq