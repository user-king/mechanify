import React from 'react';
import '../assets/styles/AddVehicle.css';

const AddVehicle = () => {
    return (
        <div className="add-vehicle">
            <header className="add-vehicle-header">
                <button className="back-button">&larr;</button>
                <h1>Add New Vehicle</h1>
            </header>
            <div className="vehicle-form">
                <input type="text" placeholder="My Bike" className="vehicle-input" />
                <div className="vehicle-row">
                    <input type="text" placeholder="Brand" className="vehicle-input half-width" />
                    <input type="text" placeholder="Model" className="vehicle-input half-width" />
                </div>
                <div className="vehicle-row">
                    <input type="text" placeholder="Vehicle Number" className="vehicle-input" />
                    <button className="verify-button">Verify</button>
                </div>
            </div>
            <button className="save-vehicle-button">Save the Vehicle</button>
        </div>
    );
};

export default AddVehicle;
