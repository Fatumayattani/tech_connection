import React from 'react';
import './userProfile.css';

const UserProfile = () => {
  // Example user profile data
  const userProfile = {
    name: 'Fatuma Yattani',
    profilePic: 'path/to/profile-pic.jpg',
  };

  return (
    <div className="user-profile-container">
      <div className="user-profile-picture">
        <img src={userProfile.profilePic} alt="Profile Picture" />
      </div>
      <h2 className="user-profile-name">{userProfile.name}</h2>
    </div>
  );
};

export default UserProfile;

