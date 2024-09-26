import React from 'react';
import DomainCard from '../../components/domaincards'; // Adjust the import path as needed

function Domains() {
  const cards = [
    {
      id: 1,
      title: 'UI/UX',
      image: './uiux.jpg',
      content: 'Learn how to build responsive and dynamic websites using HTML, CSS, and JavaScript.',
    },
    {
      id: 2,
      title: 'Artificial Intelligence & Machine Learning',
      image: './ai.jpg',
      content: 'Explore the world of mobile applications and develop apps for Android and iOS.',
    },
    {
      id: 3,
      title: 'Web Development',
      image: './webdev.jpg',
      content: 'Dive into data analysis and machine learning to make data-driven decisions.',
    },
    {
        id: 4,
        title: 'App Development',
        image: './appdev.jpg',
        content: 'Dive into data analysis and machine learning to make data-driven decisions.',
      },
    {
      id: 5,
      title: 'Blockchain',
      image: './bitcon.jpg',
      content: 'Understand the principles of AI and how to implement intelligent systems.',
    },

    {
        id: 6,
        title: 'Cybersecurity',
        image: './cybersec.jpg',
        content: 'Learn how to build responsive and dynamic websites using HTML, CSS, and JavaScript.',
      },
      {
        id: 7,
        title: 'Data Science & Analytics',
        image: './datascience.jpg',
        content: 'Explore the world of mobile applications and develop apps for Android and iOS.',
      },
      {
        id: 8,
        title: 'AR/VR',
        image: './arvr.jpg',
        content: 'Dive into data analysis and machine learning to make data-driven decisions.',
      },
      {
        id: 9,
        title: 'IOT',
        image: 'iot.jpg',
        content: 'Understand the principles of AI and how to implement intelligent systems.',
      },

      {
        id: 10,
        title: 'Cloud Computing',
        image: './cloud.jpg',
        content: 'Understand the principles of AI and how to implement intelligent systems.',
      },
  ];

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-10 py-32" 
      style={{ background: 'linear-gradient(to bottom, #17173A 14%, #13131C 25%)' }}
    >
      <div className="relative w-full mx-6">
        {/* Title and Description */}
        <h1 className="text-center text-4xl font-bold text-white mb-4">
          The <span style={{ color: '#AF66DF' }}>KnowHow</span> Domains
        </h1>
        <p className="text-center text-lg text-gray-300 mb-12">
          Discover the various domains that are being cultivated in this community
        </p>

        {/* Simple Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cards.map((card) => (
            <div key={card.id} className="w-full">
              <DomainCard
                title={card.title}
                image={card.image}
                content={card.content}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Domains;
