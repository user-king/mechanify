import React from 'react';
import '../assets/styles/MyAddress.css';
import AddressCard from '../components/AddressCard';
import { useNavigate } from 'react-router-dom';

const MyAddress = () => {

    const navigate = useNavigate();

    const navigateToNewAddress = () => {
      navigate('/add-address');
    };
  
    const addresses = [
        { id: 1, name: 'Home', address: '123 Main St, Springfield, IL 62704' },
        { id: 2, name: 'Office', address: '456 Market St, Springfield, IL 62701' },
    ];

    return (
        <div className="my-address">
            <header className="my-address-header">
                <button className="back-button">&larr;</button>
                <h1>My Address</h1>
            </header>
            <h2 className="saved-address-title">Saved Addresses</h2>
            <div className="address-list">
                {addresses.map(address => (
                    <AddressCard key={address.id} address={address} />
                ))}
            </div>
            <button className="add-address-button" onClick={navigateToNewAddress}>Add new Address</button>
        </div>
    );
};

export default MyAddress;
