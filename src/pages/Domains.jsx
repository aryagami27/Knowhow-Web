import React, { useState } from 'react';
import DomainCard from '../components/DomainCards';
import Modal from '../components/Modal'; // Import the Modal component

function Domains() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: 'UI/UX',
      image: './uiux.jpg',
      content: 'Learn how to build responsive and dynamic websites using HTML, CSS, and JavaScript.',
      extraInfo: 'At KnowHow, we see UI/UX design as the bridge between technology and people. Our community is dedicated to helping designers create seamless, enjoyable, and impactful experiences. Whether you’re interested in wireframing, prototyping, user research, or visual design, KnowHow provides the resources and collaborative space to hone your skills. We believe great design is not just about aesthetics—it’s about empathy, understanding the user’s journey, and creating solutions that truly resonate with them. At KnowHow, UI/UX is more than a skill set—it’s a mindset. A mindset of constant curiosity, learning, and creating designs that make a difference in people’s lives.'
    },
    {
      id: 2,
      title: 'Artificial Intelligence & Machine Learning',
      image: './ai.jpg',
      content: 'Explore the world of mobile applications and develop apps for Android and iOS.',
      extraInfo: 'AI and ML are revolutionizing technology. Learn about algorithms, data processing, and how to implement machine learning models.'
    },
    {
      id: 3,
      title: 'Web Development',
      image: './webdev.jpg',
      content: 'Dive into data analysis and machine learning to make data-driven decisions.',
      extraInfo: 'At KnowHow, we believe Web and App Development is not just about writing code—it’s about building experiences. Our community fosters a culture of creativity and innovation, where developers of all levels come together to build solutions that are as functional as they are beautiful. At KnowHow, we don’t just focus on learning the latest frameworks or languages; we emphasize the why behind development. We nurture an environment where web and app development isn’t limited to frontend and backend—it intersects with other domains like UX/UI design, cybersecurity, IoT, and AI.'
    },
    {
      id: 4,
      title: 'App Development',
      image: './appdev.jpg',
      content: 'Dive into data analysis and machine learning to make data-driven decisions.',
      extraInfo: 'App development focuses on creating software applications for mobile devices. Understand app design, development, and deployment.'
    },
    {
      id: 5,
      title: 'Blockchain',
      image: './bitcon.jpg',
      content: 'Understand the principles of AI and how to implement intelligent systems.',
      extraInfo: 'Blockchain technology is a decentralized ledger system that enhances security and transparency. Learn about smart contracts and cryptocurrencies.'
    },
    {
      id: 6,
      title: 'Cybersecurity',
      image: './cybersec.jpg',
      content: 'Learn how to build responsive and dynamic websites using HTML, CSS, and JavaScript.',
      extraInfo: 'At KnowHow, we view cybersecurity as a crucial pillar of digital innovation. Our cybersecurity community is a space where learners, professionals, and experts come together to explore cutting-edge techniques and strategies for defending against evolving cyber threats. Whether you’re passionate about ethical hacking, cryptography, network security, or building resilient systems, KnowHow offers the resources and collaboration opportunities to advance your skills.'
    },
    {
      id: 7,
      title: 'Data Science & Analytics',
      image: './datascience.jpg',
      content: 'Explore the world of mobile applications and develop apps for Android and iOS.',
      extraInfo: 'Data science combines statistical analysis and machine learning to extract insights from data. Learn data manipulation, visualization, and predictive modeling.'
    },
    {
      id: 8,
      title: 'AR/VR',
      image: './arvr.jpg',
      content: 'Dive into data analysis and machine learning to make data-driven decisions.',
      extraInfo: 'Augmented and Virtual Reality create immersive experiences. Learn how to develop applications that utilize AR and VR technologies.'
    },
    {
      id: 9,
      title: 'IOT',
      image: 'iot.jpg',
      content: 'Understand the principles of AI and how to implement intelligent systems.',
      extraInfo: "At KnowHow, we believe IoT is not just about connecting devices—it's about connecting possibilities. Our IoT community is designed for innovators, problem-solvers, and creators who are passionate about leveraging technology to transform how we live and work. Innovation thrives in a community where knowledge flows freely. At KnowHow, we’re not just focused on current trends—we are fostering the future of IoT by encouraging a spirit of curiosity, experimentation, and collaboration."
    },
    {
      id: 10,
      title: 'Cloud Computing',
      image: './cloud.jpg',
      content: 'Understand the principles of AI and how to implement intelligent systems.',
      extraInfo: 'Cloud computing provides on-demand computing resources. Learn about cloud service models, deployment strategies, and data management.'
    },
    
  ];

  const handleOpenModal = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-10 py-32" 
      // style={{ background: 'linear-gradient(to top, #17173A 14%, #13131C 25%)' }}
    >
      <Modal 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
        title={selectedCard?.title} 
        image={selectedCard?.image} 
        extraInfo={selectedCard?.extraInfo}
      />

      <div className="relative w-full mx-6">
        {/* Title and Description */}
        <h1 className="text-center text-4xl font-bold text-white mb-4">
          The <span style={{ color: '#AF66DF' }}>KnowHow</span> Domains
        </h1>
        <p className="text-center text-lg text-gray-300 mb-12">
          Discover the various domains that are being cultivated in this community
        </p>

        {/* Simple Grid Layout */}
        <div className="flex flex-wrap w-full gap-2 justify-center">
          {cards.map((card) => (
            <div key={card.id} className="">
              <DomainCard
                title={card.title}
                image={card.image}
                content={card.content}
                onReadMore={() => handleOpenModal(card)} // Pass the handler to DomainCard
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Domains;
