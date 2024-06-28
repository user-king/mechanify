
import React from 'react'
import '../assets/styles/Banner.css';
import bannerImage from '../assets/images/banner_image.png';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <div className="text-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.2 }}
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
            </div>
            <motion.img
                src={bannerImage}
                alt="Mechanify"
                className="logo1"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                // initial={{ x: '60%' }}
                // animate={{ x: 10 }}
                transition={{ duration: 2.5 }}
            />
            <div className="vertical-button">
                <h2 className="vertical-text">Book Service</h2>
            </div>
        </div>
    )
}

export default Banner