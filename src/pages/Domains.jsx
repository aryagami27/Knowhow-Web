import { useState } from 'react';
import DomainCard from '../components/DomainCards';
import Modal from '../components/Modal';

function Domains() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: 'UI/UX',
      image: './uiux.jpg',
      content:
        'UI/UX is the bridge between technology and human interaction, shaping how users perceive and engage with you product.',

      extraInfo:
        "At KnowHow, we believe that exceptional design is more than just skin deep. It's about empathy, understanding user needs, and crafting solutions that truly resonate. Our collaborative environment fosters creativity and dedication, ensuring that every project we undertake is driven by a passion for excellence.",
    },
    {
      id: 2,
      title: 'Artificial Intelligence & Machine Learning',
      image: './ai.jpg',
      content:
        'AI/ML is where machines learn, think and start to understand the ways of our world in way we never though would be possible.',

      extraInfo:
        "At KnowHow, we're passionate about making AI/ML accessible to everyone. We believe that anyone with a curious mind and a desire to learn can harness the power of AI/ML to create groundbreaking solutions.Join us as we explore the endless possibilities of AI/ML and build a brighter future together.",
    },
    {
      id: 3,
      title: 'Web Development',
      image: './webdev.jpg',
      content:
        "Web Development is the beating heart of our digital economy. It's transformed how we think, create, and connect, shaping the way businesses interact with their audiences",

      extraInfo:
        "At KnowHow, we're passionate about empowering those with the drive to create. Web development offers a unique and exciting opportunity to explore creativity and craft stunning, responsive websites. Our community is a place where developers of all levels can come together to share ideas, learn from each other, and build solutions that are both functional and visually appealing.",
    },
    {
      id: 4,
      title: 'App Development',
      image: './appdev.jpg',
      content:
        "App development is the digital frontier where innovation meets reality, it's more than just designing.A truly exceptional app is a testament to the developer's creativity, passion, and unwavering dedication.",

      extraInfo:
        "At KnowHow, we recognize the importance of resiliency, hard work, and the relentless pursuit of excellence. We're committed to providing a platform where developers can thrive, connect with like-minded individuals, and bring their visionary ideas to life. Together, let's build something extraordinary.",
    },
    {
      id: 5,
      title: 'Blockchain',
      image: './bitcon.jpg',
      content:
        "Blockchain is a revolutionary technology that is transforming the way we interact with each other and conduct business. It's a decentralized, distributed ledger system that records transactions securely and transparently across a network of computers.",

      extraInfo:
        "At KnowHow, we believe blockchain has the potential to revolutionize industries and create a more equitable and efficient world. We're committed to empowering individuals and businesses to leverage blockchain technology to solve real-world problems and drive innovation. Our community is a hub for blockchain enthusiasts, developers, and entrepreneurs to connect, collaborate, and learn together.",
    },
    {
      id: 6,
      title: 'Cybersecurity',
      image: './cybersec.jpg',
      content:
        'Cybersecurity is the shield protecting our data, infrastructure, and personal privacy from cyberattacks. As our lives become increasingly intertwined with technology, the need for strong security measures has never been more urgent. ',
      extraInfo:
        "At KnowHow, we believe cybersecurity is essential for digital innovation. Our community is a hub for learners to explore the latest techniques and strategies to combat cyber threats. Whether you're interested in ethical hacking, cryptography, network security, or building resilient systems, we offer the resources and collaboration to help you excel.",
    },
    {
      id: 7,
      title: 'Data Science & Analytics',
      image: './datascience.jpg',
      content:
        "Data science and analysis are essential skills in today's data-driven world. By combining statistical techniques, machine learning algorithms, and domain expertise, data scientists can extract valuable insights from vast datasets.",

      extraInfo:
        "At KnowHow, we believe data science and analysis are the keys to unlocking the full potential of data. We're committed to empowering data scientists and analysts to leverage their skills to solve complex problems and drive innovation. Our community is a gathering place for data enthusiasts, scientists, and analysts.",
    },
    {
      id: 8,
      title: 'AR/VR',
      image: './arvr.jpg',
      content:
        ' Augmented reality (AR) overlays digital information onto the real world, enhancing our perception and interaction, while virtual reality (VR) immerses us in entirely simulated environments.',

      extraInfo:
        "We believe AR/VR has the power to transform industries and create new and exciting experiences. We're committed to empowering developers and creators to leverage AR/VR technology to build innovative applications and solutions. Our community is a haven for AR/VR enthusiasts, to transform future with their altered realities.",
    },
    {
      id: 9,
      title: 'IOT',
      image: 'iot.jpg',
      content:
        'IoT is revolutionizing the way we interact with the world around us. It connects everyday objects to the internet, enabling them to collect, exchange, and analyze data.',

      extraInfo:
        "At KnowHow, we believe IoT has the potential to improve our lives in countless ways. We're committed to empowering developers and businesses to leverage IoT technology to create innovative solutions. Our community is a meeting place for IoT enthusiasts, engineers, and data scientists.",
    },
    {
      id: 10,
      title: 'Cloud Computing',
      image: './cloud.jpg',
      content:
        'Cloud computing provides on-demand computing resources. Learn about cloud service models, deployment strategies, and data management.',
      extraInfo:
        "At KnowHow, we believe in the transformative power of cloud computing. It's a technology that empowers businesses and individuals to achieve more. Our community is a place where cloud enthusiasts can come together to learn, share knowledge, and build innovative solutions. Whether you're a seasoned cloud architect or just starting your journey, we're here to support your growth and help you unlock the full potential of the cloud",
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
    <div className='min-h-screen flex flex-col items-center justify-center px-10 py-32'>
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title={selectedCard?.title}
        image={selectedCard?.image}
        extraInfo={selectedCard?.extraInfo}
      />

      <div className='relative w-full mx-6'>
        <h1 className='text-center sm:text-4xl text-3xl font-bold text-white sm:mb-4'>
          The <span style={{ color: '#AF66DF' }}>KnowHow</span> Domains
        </h1>
        <p className='text-center sm:text-lg text-gray-300 mb-12'>
          Discover the various domains that are being cultivated in this
          community
        </p>
        <div className='flex flex-wrap w-full gap-2 justify-center'>
          {cards.map((card) => (
            <div key={card.id} className=''>
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
