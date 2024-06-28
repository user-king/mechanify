import React from 'react';
import '../assets/styles/Feature.css';

const features = [
  {
    title: 'Feature',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    linkText: 'Try now',
    logo: 'Mechanify'
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
    logo: 'Mechanify'
  }
];

const Feature = () => {
  return (
    <div className="container">
      <h1>Features/Services</h1>
      <div className="features">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
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
