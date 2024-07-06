import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AnimatedBanner from './components/AnimatedBanner';
import Blog from './pages/Blog';
import ScheduleService from './pages/ScheduleService';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
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
