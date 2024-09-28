import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

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
      {/* <Link to="/" className="absolute left-4 hidden xl:block justify-center items-center">
        <img src='./logo3.png' className='h-24 mt-1' />
      </Link> */}
    </header>
  );
}

export default Header;
