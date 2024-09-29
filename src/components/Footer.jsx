import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faLinkedin,faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-[#17173A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src='./logo2.webp' className='w-[300px]' />
            <p className="text-gray-400">
              Empowering your technical growth. Providing a platform to all tech-enthusiasts out there.
            </p>
          </div>
          {/* <div>
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
            </ul>
          </div> */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="flex flex-col gap-2">
              <a href='mailto:knowhow@gmail.com' className='hover:underline' >knowhow@gmail.com</a>
              <a href='tel:+919828383281'className='hover:underline'>+91 98283 83281</a>
              <a href='https://maps.app.goo.gl/TNBA5N6hhFUP5oEp9' target='_blank' className='hover:underline'>K J Somaiya Institute of Technology, Sion</a>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/company/knowhow-kjsit/" className="hover:text-gray-400" target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://x.com/knowhow_comm" className="hover:text-gray-400" target='_blank'>
                <FontAwesomeIcon icon={faXTwitter} size="2x" />
              </a>
              <a href="https://www.instagram.com/knowhow_tech/" className="hover:text-gray-400" target='_blank'>
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Join Our Community</h3>
              <a href="https://" className="flex items-center border-2 border-green-600 text-green-600 rounded-full px-3 py-2 text-sm hover:border-white hover:text-white transition-colors duration-200 w-44">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" className="mr-2" />
                <span className='text-xs'>Join Us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          © {new Date().getFullYear()} KnowHow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
