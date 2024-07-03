

import React from 'react';
import AboutUs from './About';
import Feature from '../components/Feature';
import BlogPage from '../components/Blog';
import BannerCarousel from './BannerCarousel';
import Brand from '../components/Brand';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <>
      
      <BannerCarousel />
      <AboutUs />
      <Feature />
      <Brand />
      <BlogPage />
      <Testimonials />
    </>
  );
};

export default Home;

