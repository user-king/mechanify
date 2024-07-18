import React from 'react';
import '../assets/styles/AddressCard.css';

const AddressCard = ({ address }) => {
    return (
        <div className="address-card">
            <div className="address-details">
                <h3 className="address-name">{address.name}</h3>
                <p className="address-text">{address.address}</p>
            </div>
            <button className="delete-button">🗑️</button>
        </div>
    );
};

export default AddressCard;
