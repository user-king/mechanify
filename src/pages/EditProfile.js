import React from 'react';
import '../assets/styles/EditProfile.css';
import UserProfile from '../assets/images/user_icon.png';


const EditProfile = () => {
    return (
        <div className="edit-profile">
            <header className="edit-profile-header">
                <button className="back-button">&larr;</button>
                <h1>Edit Profile</h1>
            </header>
            <div className="profile-picture">
                <div className="profile-pic-container">
                    <img src={UserProfile} alt="Profile" className="profile-pic" />
                    <button className="edit-pic-button">
                        <i className="fa fa-pencil"></i>
                    </button>
                </div>
            </div>
            <div className="profile-form">
                <input type="text" placeholder="Name" value="rajni" className="profile-input" />
                <input type="email" placeholder="Email" className="profile-input" />
                <input type="text" placeholder="Phone Number" value="8295615220" className="profile-input" />
            </div>
            <button className="confirm-button">Confirm</button>
        </div>
    );
};

export default EditProfile;
