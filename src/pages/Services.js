import React from 'react';
import garage from '../assets/images/garage_services.png';
import doorstep from '../assets/images/banner_image.png';
import engine from '../assets/images/engine.png';
import wheel from '../assets/images/wheel.png';
import curveLine from '../assets/images/curve.png';
import '../assets/styles/Services.css';
import MechanifyPass from '../components/MechanifyPass';
import Contact from '../components/Contact';
import Brand from '../components/Brand';

const Services = () => {
  return (
    <div>
      <MechanifyPass />
      <Brand/>
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
            <div className="service-options">
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
            </div>
          </section>
          <section className="pricing-plans">
            <div className="pricing-plan basic-plan">
              <h3>Basic</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              <div className='view-benefits-bottom'>
                <p className="view-benefits">View Benefits</p>
                <p className="price-tag">Price</p>
              </div>
            </div>
            <div className="pricing-plan standard-plan">
              <h3>Standard</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              <div className='view-benefits-bottom'>
                <p className="view-benefits-button">View Benefits</p>
                <p className="price-tag">Price</p>
              </div>
            </div>
            <div className="pricing-plan advance-plan">
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
            <button className="book-service-button">Book Service</button>
          </section>
        </main>
      </div>
      {/* <img src={curveLine} alt="Curve Line" className="curve-line" /> */}

      <Contact />
    </div>
  );
};

export default Services;

// import React from 'react';
// import '../assets/styles/Services.css';

// const Services = () => {

//   return (
//     <div className="container">
//       <div className="vehicle-selection">
//         <select>
//           <option>Choose Vehicle</option>
//         </select>
//       </div>
//       <div className="service-types">
//         <div className="service-type">Garage Service</div>
//         <div className="service-type">Door Step Service</div>
//         <div className="service-type">Engine Repairing</div>
//         <div className="service-type">Tyre & Wheel Care</div>
//       </div>
//       <div className="plans">
//         <div className="plan basic">
//           <h2>Basic</h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
//           <a href="#">View Benefits</a>
//           <p>Price</p>
//         </div>
//         <div className="plan standard">
//           <h2>Standard</h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
//           <a href="#">View Benefits</a>
//           <p>Price</p>
//         </div>
//         <div className="plan advance">
//           <h2>Advance</h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
//           <a href="#">View Benefits</a>
//           <p>Price</p>
//         </div>
//       </div>
//       <div className="custom-message">
//         <p>Add custom message</p>
//       </div>
//       <div className="booking">
//         <button>Book Service</button>
//       </div>
//       <div className="contact-us">
//         <h3>How can you reach us?</h3>
//         <h1>CONTACT US</h1>
//         <form>
//           <input type="text" placeholder="Name" required />
//           <input type="email" placeholder="Email Id" required />
//           <input type="tel" placeholder="Phone" required />
//           <textarea placeholder="Message" required></textarea>
//           <button type="submit">SEND EMAIL</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Services;
