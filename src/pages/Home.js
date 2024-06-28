

import React from 'react';
import AboutUs from './About';
import Feature from '../components/Feature';
import BlogPage from '../components/Blog';
import BannerCarousel from './BannerCarousel';
import Brand from '../components/Brand';

const Home = () => {
  return (
    <>
      
      <BannerCarousel />
      <AboutUs />
      <Brand />
      <Feature />
      <BlogPage />
    </>
  );
};

export default Home;

