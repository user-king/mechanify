import React from 'react';
import '../assets/styles/Contact.css';
import contactImage from '../assets/images/mechanifybranding.png';

const Contact = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={contactImage} alt="Contact" />
      </div>
      <div className="form-container">
        <h2>How can you reach us?</h2>
        <h1>CONTACT US</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Id" />
          <input type="tel" placeholder="Phone" />
          <input type="text" placeholder="Message" />
          <button type="submit">SEND EMAIL</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
