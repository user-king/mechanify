import React from 'react';
import '../assets/styles/Feature.css';

const features = [
  {
    title: 'Feature',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    linkText: 'Try now',
    logo: ''
  },
  {
    title: 'Feature',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    linkText: 'Try now',
    logo: 'Mechanify'
  },
  {
    title: 'Feature',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
    linkText: 'Try now',
    logo: 'Mechanify'
  },
  {
    title: 'Feature',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    linkText: 'Try now',
    logo: ''
  }
];
const colors = ['#f9c2ff', '#c2f0f9', '#fff9c2', '#c2f9c9'];

const Feature = () => {
  return (
    <div className="container">
      <h1>Features/Services</h1>
      <div className="features">
        {features.map((feature, index) => (
          <div 
            // className="feature-card" 
            className={`feature-card ${feature.logo ? 'large' : ''}`}
            key={index}           
            style={{ backgroundColor: colors[index % colors.length] }}
          >
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
            <a href="#">{feature.linkText}</a>
            <div className="logo">{feature.logo}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
