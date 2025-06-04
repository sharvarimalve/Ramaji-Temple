import React from 'react';

const members = [
  {
    name: 'Sri V. S. Jagan Mohan Reddy',
    title: 'Hon’ble Chief Minister of Andhra Pradesh',
    image: '', 
  },
  {
    name: 'Sri V. S. Jagan Mohan Reddy',
    title: 'Hon’ble Chief Minister of Andhra Pradesh',
    image: '',
  },
  {
    name: 'Sri V. S. Jagan Mohan Reddy',
    title: 'Hon’ble Chief Minister of Andhra Pradesh',
    image: '',
  },
];

const ProfileCard = () => {
  return (
    <div>
    <h1 className="text-center pt-5 heading"> Members Of Temple </h1>
    <div className="card-container">
      {members.map((member, index) => (
        <div key={index} className="profile-card">
          <div className="profile-image" />
          <h3 className="profile-name">{member.name}</h3>
          <p className="profile-title">{member.title}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProfileCard;
