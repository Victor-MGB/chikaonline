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
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/credit-cards" element={<CreditCard />} />
              {/* Add other routes here */}
            </Routes>

            <Footer />
          </div>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
