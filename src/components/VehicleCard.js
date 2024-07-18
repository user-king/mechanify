import React from 'react';
import '../assets/styles/VehicleCard.css';

const VehicleCard = ({ vehicle }) => {
    return (
        <div className="vehicle-card">
            <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
            <div className="vehicle-details">
                <h3 className="vehicle-name">My Bike</h3>
                <p className="vehicle-model">{vehicle.name}</p>
                <p className="vehicle-number">{vehicle.model}</p>
            </div>
            <button className="delete-button">🗑️</button>
        </div>
    );
};

export default VehicleCard;
