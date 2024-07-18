import React from 'react';
import '../assets/styles/AddAddress.css';


const AddAddress = () => {
    return (
        <div className="add-address">
            <header className="add-address-header">
                <button className="back-button">&larr;</button>
                <h1>Add new Address</h1>
            </header>
            <div className="button-group">
                <button className="search-address-button">Search Address</button>
                <button className="current-location-button">Current Location</button>
            </div>
            <div className="address-form">
                <input type="text" placeholder="House/Flat/Floor/Block No." className="address-input" />
                <input type="text" placeholder="Address" className="address-input" />
                <input type="text" placeholder="Locality" className="address-input" />
                <div className="address-row">
                    <input type="text" placeholder="City" className="address-input half-width" />
                    <input type="text" placeholder="State" className="address-input half-width" />
                </div>
                <input type="text" placeholder="Pincode" className="address-input" />
            </div>
            <h2 className="save-address-as-title">Save this Address as</h2>
            <div className="address-type-buttons">
                <button className="address-type-button">Home</button>
                <button className="address-type-button">Work</button>
                <button className="address-type-button">Others</button>
            </div>
            <button className="save-address-button">Save this Address</button>
        </div>
    );
};

export default AddAddress;
