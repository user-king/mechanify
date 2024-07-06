

import React from 'react';
import AboutUs from './About';
import Feature from '../components/Feature';
import BannerCarousel from './BannerCarousel';
import Brand from '../components/Brand';
import Testimonials from './Testimonials';
import Blog from './Blog';

const Home = () => {
  return (
    <>
      <BannerCarousel />
      <AboutUs />
      <Feature />
      <Brand />
      <Blog />
      <Testimonials />
    </>
  );
};

export default Home;

