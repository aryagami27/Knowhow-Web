import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import About from './About';
import Marquee from 'react-fast-marquee';
import MarqueeCards from '../components/MarqueeCards';
import { Typewriter } from 'react-simple-typewriter';
import Domains from './Domains';

function Hero() {
  return (
    <div className='flex flex-col bg-[#13131C] relative'>
      <div className='absolute top-2 left-4'>
        <img src='./logo2.webp' className='sm:h-14 h-10' />
      </div>
      <div className='w-full bg-gradient-to-b from-[#17173A] from-14% to-[#13131C]'>
        <p className='font-bold mt-24 md:text-7xl text-4xl text-center'>
          Know<span className='text-[#3954DF]'>How</span>:
        </p>
        <p className='font-bold md:text-7xl text-center text-4xl'>
          The catalyst for{' '}
        </p>
        <div className='font-bold md:text-7xl text-4xl text-center text-[#AF66DF]'>
          <Typewriter
            words={['Change', 'Growth', 'Ambition', 'Innovation']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={150}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </div>
        <div className='mt-8'>
          <a href='https://chat.whatsapp.com/DFGAlgy8z3TLAWIUNoltVZ' className='mx-auto flex items-center justify-center sm:max-w-56 max-w-44 bg-green-700 text-white rounded-full sm:h-[60px] h-[36px] hover:bg-green-600 shadow-[#ffffff4f] shadow-inner transition-colors duration-200'>
            <FontAwesomeIcon icon={faWhatsapp} className='mr-2 sm:size-6 h-4' />
            <p className='sm:text-base text-sm'>Join our Community</p>
          </a>
        </div>
        <div className='my-10'>
          <Marquee className='w-full md:h-80 h-40'>
            <MarqueeCards image='./ai.jpg' />
            <MarqueeCards image='./appdev.jpg' />
            <MarqueeCards image='./arvr.jpg' />
            <MarqueeCards image='./bitcon.jpg' />
            <MarqueeCards image='./cloud.jpg' />
            <MarqueeCards image='./cybersec.jpg' />
            <MarqueeCards image='datascience.jpg' />
            <MarqueeCards image='iot.jpg' />
            <MarqueeCards image='uiux.jpg' />
            <MarqueeCards image='webdev.jpg' />
          </Marquee>
        </div>
      </div>
      <div className='w-full p-4'>
        <About />
      </div>
      <div className='w-full'>
        <Domains />
      </div>
    </div>
  );
}

export default Hero;
