
import React from 'react'
import '../assets/styles/Banner.css';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';

const Banner2 = () => {
    return (
        <motion.div
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
            className="banner2"
        >
            {/* <div className="banner2"> */}
            <div className="search-bar-container">
                <SearchBar />
            </div>
            <div className="banner2-content">
                <div className="text2-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.2 }}
                    >
                        Your Expert Two-Wheeler Service Partner!
                    </motion.h1>
                </div>
            </div>
            <div className="vertical-button">
                <h2 className="vertical-text">Book Service</h2>
            </div>
            {/* </div> */}
        </motion.div>
    )
}

export default Banner2