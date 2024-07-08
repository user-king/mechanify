import React, {useEffect, useState} from 'react';
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
      {/* <div className="App"> */}
      {/* <Header /> */}

      <div className={`App ${isMenuOpen ? 'menu-open' : ''}`}>
      <Header onMenuToggle={handleMenuToggle} />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={ <Services/> } />
            <Route path="/about" element={<About />} /> 
            <Route path="/projects" element={ <AnimatedBanner/> } />
            <Route path="/blog" element={ <Blog/> } />
            <Route path="/schedule-service" component={ <ScheduleService />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
