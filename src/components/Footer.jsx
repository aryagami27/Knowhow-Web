import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

function Footer() {
  return (
    <footer className="bg-[#17173A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div>
            {/* <h3 className="text-xl font-bold mb-4">LOGO</h3> */}
            <img src='./logo2.png' className='w-[300px] sm:w-full' />
            <p className="text-gray-400">
            Empowering your technical growth. Providing a platform to all tech-enthusiasts out there.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/domains" className="hover:text-gray-400 transition-colors">
                  Domains
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-gray-400 transition-colors">
                  Meet our Team
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-gray-400 transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>knowhow@gmail.com</li>
              <li>+91 98283 83281</li>
              <li>K J Somaiya Institute of Technology, Sion</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://twitter.com" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://instagram.com" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          © {new Date().getFullYear()} KnowHow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
