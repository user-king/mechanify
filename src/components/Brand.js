import React from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/Brand.css';
import yamaha from '../assets/images/yamaha.png';
import suzuki from '../assets/images/suzuki.png';
import royal_enfield from '../assets/images/royal_enfield.png';
import mahindra from '../assets/images/mahindra.png';
import ktm from '../assets/images/ktm.png';
import honda from '../assets/images/honda.png';
import hero from '../assets/images/hero.png';
import tvs from '../assets/images/tvs.png';
import bajaj from '../assets/images/bajaj.png';

const images = [honda, tvs, hero, bajaj, suzuki, royal_enfield, mahindra, ktm, yamaha];

const Brand = () => {

    const headingVariants = {
        initial: { y: '-100vh' },
        animate: { y: 0 },
    };

    const imageContainerVariants = {
        // initial: { y: '100vh' },
        // animate: { y: 0 },
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { delay: 0.5 } },
    };

    const imageVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 },
    };

    // const imageVariants = {
    //     // initial: { scale: 0.8, x: '-100%' },
    //     // animate: { scale: [1, 0.8, 1], x: 0 },
    //     // transition: { duration: 2, ease: 'easeInOut' }
    //     initial: { x: '100vw', scale: 0.8, opacity: 0 },
    //     animate: { x: 0, scale: 1, opacity: 1 },
    //     exit: { x: '-100vw', scale: 0.8, opacity: 0 }
    // };

    return (
        <div className="brand-page">
            <motion.h1
                className="brand-heading"
                variants={headingVariants}
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
            >
                Brands We Serve
            </motion.h1>
            <motion.div
                className="brand-images"
                variants={imageContainerVariants}
                initial="initial"
                animate="animate"
                transition={{ type: 'spring', stiffness: 50, delay: 0.7 }}
            >
                {images.map((image, index) => (
                    <motion.img
                        key={index}
                        src={image}
                        alt={`Brand ${index + 1}`}
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            x: { type: 'spring', stiffness: 50 },
                            default: { duration: 2, repeat: Infinity, repeatType: 'mirror', delay: index * 1 }
                        }}
                    />
                ))}

            </motion.div>

        </div>
    );
};

export default Brand;
