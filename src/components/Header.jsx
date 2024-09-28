import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Header() {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 px-4 transition-transform duration-300 flex flex-row justify-center items-center ${
        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <Link to="/" className="absolute left-4 hidden xl:block">
            <img src='./logo3.png' className='h-24 mt-1' />
      </Link>
      <div className="mx-auto max-w-[700px] flex justify-center items-center w-full px-6 h-[60px] bg-[rgba(63,63,72,0.32)] backdrop-blur-md rounded-full shadow-md">
        {/* Navbar */}
        <nav className="flex justify-evenly w-full items-center  text-white">
          <Link to="/" className="hover:text-gray-400 transition-colors duration-200">
            Home
          </Link>
          <Link to="/domains" className="hover:text-gray-400 transition-colors duration-200">
            Domains
          </Link>
          <Link to="/team" className="hover:text-gray-400 transition-colors duration-200">
            Team
          </Link>
        </nav>

        
      </div>
      {/* Conditional Button for Non-Home Pages */}
      {location.pathname !== '/' && (
          <div className="absolute right-4 top-0"> {/* Container for the button */}
            <Link to="/join" className="flex items-center bg-green-600 text-white rounded-full px-6 h-[60px] hover:bg-green-500 transition-colors duration-200">
              <FontAwesomeIcon icon={faWhatsapp} className="xl:mr-2 size-5" /> {/* WhatsApp Icon */}
              <p className="hidden xl:block">Join our Community</p>
            </Link>
          </div>
        )}
    </header>
  );
}

export default Header;
