import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from "./components/loader/Preloader";
import ThemeProvider from "./components/context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Home from './components/pages/Home';
import TopHeader from "./components/top/TopHeader";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/pages/footer/Footer";
import CreditCard from "./components/pages/creditCards/CreditCard";
import Pricing from "./components/pages/pricing/Pricing";
import Registration from "./components/auths/Registration";
import Security from "./components/security/Security";
import Faq from "./components/faq/Faq";
import TermsHero from "./components/terms/TermsHero";
import Services from "./components/services/Services";
import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";
import Otp from "./components/auths/Otp";
import Login from "./components/auths/Login";
import ForgotPassword from "./components/auths/ForgotPassword ";
import ResetPassword from "./components/auths/ResetPassword ";
import UserDashboard from "./components/Dashboard/UserDashboard";
import Profile from "./components/Dashboard/Profile";
import BankingBenefits from "./components/Dashboard/BankingBenefits";
import AdminLogin from "./components/AdminDashboard/AdminLogin";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import Clients from "./components/AdminDashboard/Clients";
import Particular from "./components/AdminDashboard/Particular";
import UserManagement from "./components/AdminDashboard/UserManagement";
import SendNotification from "./components/AdminDashboard/SendNotification";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <ThemeProvider>
      <Router>
        <TopHeader />
        <main>
          <div className="min-h-screen">
            <ThemeSwitcher />
            {/* Wrap the routes that should have Navbar and Footer */}
            <Routes>
              <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
              <Route path="/credit-cards" element={<><Navbar /><CreditCard /><Footer /></>} />
              <Route path="/pricing" element={<><Navbar /><Pricing /><Footer /></>} />
              <Route path="/register" element={<><Navbar /><Registration /><Footer /></>} />
              <Route path="/otp" element={<Otp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
              <Route path="/security" element={<><Navbar /><Security /><Footer /></>} />
              <Route path="/faq" element={<><Navbar /><Faq /><Footer /></>} />
              <Route path="/terms-and-services" element={<><Navbar /><TermsHero /><Footer /></>} />
              <Route path="/services" element={<><Navbar /><Services /><Footer /></>} />
              <Route path="/blog" element={<><Navbar /><Blogs /><Footer /></>} />
              <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
              <Route path="/dashboard" element={<UserDashboard />}/>
              <Route path="/profile" element={<Profile />}/>
              <Route path="/banking-benefits" element={<BankingBenefits />}/>
              <Route path="/admin" element={<AdminLogin />}/>
              <Route path="/admin-dashboard" element={<AdminDashboard />}/>
              <Route path="/clients" element={<Clients />}/>
              <Route path="/particular" element={<Particular />}/>
              <Route path="/manage" element={<UserManagement />}/>
              <Route path="/notification" element={<SendNotification />}/>
            </Routes>
          </div>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
