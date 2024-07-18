import React from 'react';
import '../assets/styles/MyVehicle.css';
import VehicleCard from '../components/VehicleCard';
import Bike from "../assets/images/bike.png";
import { useNavigate } from 'react-router-dom';

const MyVehicle = () => {

    const navigate = useNavigate();

    const navigateToNewVehicle = () => {
      navigate('/add-vehicle');
    };
  

    const vehicles = [
        { id: 1, name: 'ACHIEVER 150', model: 'HR328242', image: Bike },
        { id: 2, name: 'SPLENDOR PLUS', model: 'HR328242', image: Bike },
    ];

    return (
        <div className="my-vehicle">
            <header className="my-vehicle-header">
                <button className="back-button">&larr;</button>
                <h1>My Vehicle</h1>
            </header>
            <h2 className="saved-vehicles-title">Saved Vehicles</h2>
            <div className="vehicle-list">
                {vehicles.map(vehicle => (
                    <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
            </div>
            <button className="add-vehicle-button" onClick={navigateToNewVehicle}>Add new Vehicle</button>
        </div>
    );
};

export default MyVehicle;
