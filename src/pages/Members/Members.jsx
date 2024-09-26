import React from 'react';
import MemberCards from '../../components/MemberCards';

function Members() {
  const members = [
    { name: 'Arya Gami', img: 'profile1.png', role: 'UI/UX' },
    { name: 'John Doe', img: 'profile2.png', role: 'Frontend Dev' },
    { name: 'Jane Smith', img: 'profile3.png', role: 'Backend Dev' },
    { name: 'Arya Gami', img: 'profile1.png', role: 'UI/UX' },
    { name: 'John Doe', img: 'profile2.png', role: 'Frontend Dev' },
    { name: 'Jane Smith', img: 'profile3.png', role: 'Backend Dev' },
    { name: 'Arya Gami', img: 'profile1.png', role: 'UI/UX' },
    { name: 'John Doe', img: 'profile2.png', role: 'Frontend Dev' },
    { name: 'Jane Smith', img: 'profile3.png', role: 'Backend Dev' },
    // Add more members here
  ];

  return (
    <div className="py-24 px-24 pt-32" 
         style={{ background: 'linear-gradient(to bottom, #17173A 14%, #13131C 25%)' }}
    >
      <h1 className="text-center text-4xl font-bold text-white mb-4">
        The <span style={{ color: '#AF66DF' }}>KnowHow</span> Team
      </h1>
      <p className="text-center text-lg text-gray-300 mb-12">
        Meet the talented individuals who drive our mission forward.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {members.map((member, index) => (
          <MemberCards key={index} name={member.name} img={member.img} role={member.role} />
        ))}
      </div>
    </div>
  );
}

export default Members;
