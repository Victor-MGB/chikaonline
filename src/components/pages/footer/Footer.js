import React, { useContext } from 'react'; // Import ThemeContext
import { ThemeContext } from '../../context/ThemeContext';

function Footer() {
  const { theme } = useContext(ThemeContext);

  // Define theme-based styles
  const themeStyles = {
    'light-theme': 'bg-gray-100 text-gray-800',
    'dark-theme': 'bg-gray-900 text-white',
    'blue-theme': 'bg-blue-900 text-white',
    'green-theme': 'bg-green-900 text-white',
  };

  return (
    <footer className={`p-8 ${themeStyles[theme]}`}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">[company name]</h3>
          <p className="text-sm">
            [company name] is committed to providing you with the best online banking experience, offering secure, fast, and convenient services to help manage your finances with ease.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Phone:</strong> +1 (514) 7939-357</li>
            <li><strong>Email:</strong> hello@leve.com</li>
            <li>
              <strong>Address:</strong> 6890 Blvd, The Bronx, NY 1058 <br /> New York, USA
            </li>
          </ul>
        </div>

        {/* Services and Help */}
        <div className="grid grid-cols-2 gap-4">
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Bank accounts</li>
              <li>Savings</li>
              <li>Credit cards</li>
              <li>Loans</li>
              <li>Car finance</li>
              <li>Mobile banking</li>
              <li>Online banking</li>
            </ul>
          </div>

          {/* Help & Guidance */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Help & Guidance</h4>
            <ul className="space-y-2 text-sm">
              <li>Privacy statement</li>
              <li>Corporate information</li>
              <li>Online banking help</li>
              <li>Managing your money</li>
              <li>Proving your identity</li>
              <li>International banking</li>
              <li>Help centre</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-sm">
        <p>Copyright © Leve. All Rights Reserved by EnvyTheme</p>
      </div>
    </footer>
  );
}

export default Footer;