import React, { useState } from 'react';
import '../assets/styles/Banner.css';
import Icon from '../assets/images/filter.png'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="search-bar">
            <button className="search-button">
                <i className="fa fa-search"></i>
            </button>
        
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search "
            />
            <button className="filter-button">
                {/* <i className="fa fa-filter"></i> */}
                <img src={Icon} alt="Search Bar" />

            </button>
        </div>
    );
}

export default SearchBar;
