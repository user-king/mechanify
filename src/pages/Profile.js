import React from 'react';
import '../assets/styles/Profile.css';
import UserProfile from '../assets/images/user_icon.png';
import { useNavigate } from 'react-router-dom';

const Profile = ({ closeProfileMenu}) => {

  const navigate = useNavigate();

  const navigateToVehicle = () => {
    closeProfileMenu();
    navigate('/my-vehicle');
  };

  const navigateToAddress = () => {
    closeProfileMenu();
    navigate('/my-address');
  }

  const navigateToEditProfile = () => {
    closeProfileMenu();
    navigate('/edit-profile');
  }

  return (
    <div className="profile-menu">
      <div className="profile-info" onClick={navigateToEditProfile}>
        <div className="profile-picture">
          <img src={UserProfile} alt="User" className="profile-detail-image" />
        </div>
        <div className="profile-details">
          <p className="profile-name">Keshav Garg</p>
          <p className="profile-email">Keshavgarg@gmail.com</p>
        </div>
      </div>
      <ul className="profile-options">
        <li className="profile-option">
          <button>Edit Profile</button>
        </li>
        <li className="profile-option">
          <button>Offers</button>
        </li>
        <li className="profile-option" onClick={navigateToVehicle} >
          <button>My Vehicles</button>
        </li>
        <li className="profile-option" onClick={navigateToAddress} >
          <button>Address </button>
        </li>
        <li className="profile-option">
          <button>Help Center</button>
        </li>
        <li className="profile-option">
          <button>Sign Out</button>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
