import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './assets/styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AnimatedBanner from './components/AnimatedBanner';
import Blog from './pages/Blog';
import ScheduleService from './pages/ScheduleService';
import Booking from './pages/Booking';
import TrackService from './pages/TrackService';
import Login from './auth/Login';
import OtpVerification from './auth/OtpVerification';
import Awesome from './auth/Awesome';
import Offers from './pages/Offers';
import BookingSuccess from './assets/styles/BookingSuccess';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <Router>
      <div className={`App ${isMenuOpen ? 'menu-open' : ''}`}>
        <Header onMenuToggle={handleMenuToggle} />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<AnimatedBanner />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/schedule-service" element={<ScheduleService />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/track-service" element={<TrackService />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp-verification" element={<OtpVerification />} />
            <Route path="/awesome" element={<Awesome />} />
            <Route path="/offers" element={ <Offers />} />
            <Route path="/booking-success" element={ <BookingSuccess />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
