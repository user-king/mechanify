import React from 'react';
import '../assets/styles/Profile.css';
import UserProfile from '../assets/images/user_icon.png';

const Profile = () => {
  return (
    <div className="profile-menu">
      <div className="profile-info">
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
        <li className="profile-option">
          <button>Saved Vehicles</button>
        </li>
        <li className="profile-option">
          <button>Go Pro</button>
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
