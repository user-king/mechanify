// // src/components/AnimatedBannerSpring.js
// import React from 'react';
// import { useSpring, animated } from 'react-spring';
// import bannerImage from '../assets/images/banner_image.png';
// import '../assets/styles/AnimatedBanner.css';

// const AnimatedBannerSpring = () => {
//   const titleProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });
//   const textProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1000 });
//   const buttonProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1500 });
//   const imageProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 2000 });

//   return (
//     <div className="animated-banner">
//       <div className="banner-content">
//         <animated.h1 style={titleProps}>Your Expert <br />Two-Wheeler <br />Service Partner!</animated.h1>
//         <animated.p style={textProps}>Trust us to keep your ride in top-notch condition. <br /> Welcome to expert care for your two-wheeler!</animated.p>
//         <animated.button style={buttonProps} className="animated-button">Book Service</animated.button>
//       </div>
//       <animated.img style={imageProps} src={bannerImage} alt="Mechanify" className="banner-image" />
//     </div>
//   );
// };

// export default AnimatedBannerSpring;


import React from 'react';
import { motion } from 'framer-motion';
import bannerImage from '../assets/images/banner_image.png';
// import '../assets/styles/AnimatedBanner.css';

const AnimatedBanner = () => {
  return (
    <motion.div 
      className="banner"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.5 }}
    >
      <div className="banner-content">
        <div className="text-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.2 }}
          >
            Your Expert <br /> Two-Wheeler <br /> Service Partner!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4 }}
          >
            Trust us to keep your ride in top-notch condition. <br /> Welcome to expert care for your two-wheeler!
          </motion.p>
        </div>
        <motion.img 
          src={bannerImage} 
          alt="Mechanify" 
          className="logo" 
          // initial={{ scale: 0.8 }}
          // animate={{ scale: 1 }}
          initial={{ x: '50%' }}
          animate={{ x: -20 }}
          transition={{ duration: 3.5 }}
        />
      </div>
      <motion.button 
        className="book-service-button"
        whileHover={{ scale: 1.1 }}
      >
        Book Service
      </motion.button>
    </motion.div>
  );
};

export default AnimatedBanner;
