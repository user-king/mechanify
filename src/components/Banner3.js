import React from 'react'
import '../assets/styles/Banner.css';
import logo from '../assets/images/mechanify_logo.png';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';

const Banner3 = () => {
    return (
        <div className="banner2">
            <div className="search-bar-container">
                <SearchBar />
            </div>

            <div className="banner3-content">
                <div className="logo3-content">
                    <motion.img
                        src={logo}
                        alt="Mechanify Logo"
                        className="logo3"
                        initial={{ opacity: 0, y: 150 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 3.5 }}
                    />
                </div>
                <div className="text2-content">
                    <h1> Your Expert Two-Wheeler Service Partner! </h1>
                </div>
            </div>
            <div className="vertical-button">
                <h2 className="vertical-text">Book Service</h2>
            </div>
        </div>
    )
}

export default Banner3;
