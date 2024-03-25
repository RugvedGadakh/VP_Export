// Team.js
import React from 'react';
import './Team.css'; // Import CSS file
import ceo from '../../Assets/Image/ceo.jpg'
import director from '../../Assets/Image/director.jpg'



const Team = () => {
  const teamMembers = [
    { name: "Bhoomik Pokar", designation: "CEO", photoUrl: ceo },
    { name: "Chhaganbhai Pokar", designation: "DIRECTOR", photoUrl: director }
  ];

  return (
    <div className='container team'>
      <h1 className='team-head'>Our Team</h1>
      <div className=" f_flex">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.photoUrl} alt={member.name} />
            <p><strong>{member.name}</strong></p>
            <p>{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
