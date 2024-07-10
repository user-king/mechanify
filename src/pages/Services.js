import React, { useState } from 'react';
import garage from '../assets/images/garage_services.png';
import doorstep from '../assets/images/banner_image.png';
import engine from '../assets/images/engine.png';
import wheel from '../assets/images/wheel.png';
import '../assets/styles/Services.css';
import MechanifyPass from '../components/MechanifyPass';
import Contact from '../components/Contact';
import Brand from '../components/Brand';
import OurStore from '../components/OurStores';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [selectedService, setSelectedService] = useState('garage');
  const navigate = useNavigate();


  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const services = [
    { key: 'garage', imgSrc: garage, label: 'Garage Service' },
    { key: 'doorstep', imgSrc: doorstep, label: 'Door Step Service' },
    { key: 'engine', imgSrc: engine, label: 'Engine Repairing' },
    { key: 'wheel', imgSrc: wheel, label: 'Tyre & Wheel Care' }
  ];

  const navigateToScheduleService = () => {
    navigate('/schedule-service');
  };


  return (
    <div>
      <MechanifyPass />
      <Brand />
      <OurStore />

      <div className="service-page">
        <h1 className='book-service'>Book Your Services</h1>
        <p className='text-experience'>Experience the best two wheeler from with us</p>
        <main className="main-content">
          <section className="service-selection">
            <div className="dropdown-container">
              <select className="vehicle-dropdown">
                <option value="">Choose Vehicle</option>
                <option value="bike">Bike</option>
                <option value="scooter">Scooter</option>
              </select>
            </div>
            {/* <div className="service-options">
              <div className="service-option">
                <img src={garage} alt="Mechanify" className="service-img" />
                <h2 className="service-text">Garage<br /> Service</h2>
              </div>
              <div className="service-option">
                <img src={doorstep} alt="Mechanify" className="service-img" />
                <h2 className="service-text">Door Step <br /> Service</h2>
              </div>
              <div className="service-option">
                <img src={engine} alt="Mechanify" className="service-img" />
                <h2 className="service-text">Engine Repairing</h2>
              </div>
              <div className="service-option">
                <img src={wheel} alt="Mechanify" className="service-img" />
                <h2 className="service-text">Tyre & <br /> Wheel Care</h2>
              </div>
            </div> */}

            <div className="service-options">
              {services.map(service => (
                <div 
                  key={service.key} 
                  onClick={() => handleServiceClick(service.key)}
                  className={`service-option ${selectedService === service.key ? '' : 'dull'}`}>
                  <img src={service.imgSrc} alt={service.label} className="service-img" />
                  <h2 className="service-text">{service.label}</h2>
                </div>
              ))}
            </div>

          </section>
          <section className="pricing-plans">
            <div
              className={`pricing-plan basic-plan ${selectedPlan === 'basic' ? 'selected-plan' : ''}`}
              onClick={() => handlePlanClick('basic')}
            >
              <h3>Basic</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              <div className='view-benefits-bottom'>
                <p className="view-benefits-button">View Benefits</p>
                <p className="price-tag">Price</p>
              </div>
            </div>
            <div
              className={`pricing-plan standard-plan ${selectedPlan === 'standard' ? 'selected-plan' : ''}`}
              onClick={() => handlePlanClick('standard')}
            >
              <h3>Standard</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              <div className='view-benefits-bottom'>
                <p className="view-benefits-button">View Benefits</p>
                <p className="price-tag">Price</p>
              </div>
            </div>
            <div
              className={`pricing-plan advance-plan ${selectedPlan === 'advance' ? 'selected-plan' : ''}`}
              onClick={() => handlePlanClick('advance')}
            >
              <h3>Advance</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              <div className='view-benefits-bottom'>
                <p className="view-benefits-button">View Benefits</p>
                <p className="price-tag">Price</p>
              </div>
            </div>
          </section>
          <section className="custom-message">
            <textarea className="custom-message-input" placeholder="Add custom message"></textarea>
            <button className="book-service-button" onClick={navigateToScheduleService}>Book Service</button>
          </section>
        </main>
      </div>

      <div className='curve-line'></div>
      <Contact />
    </div>
  );
};

export default Services;
