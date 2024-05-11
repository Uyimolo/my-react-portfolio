// import {LuSparkle} from 'react-icons/lu'
import sparkle from '../images/sparkle.svg';

const Logo = () => {
  return (
    <div className=''>
      <div className='flex items-center relative -bottom-0.5 lg:-bottom-1.5'>
        <p className='text-hero-text font-semibold font-Poppins uppercase leading-none lg:text-lg backdrop-shadow-lg '>
          Uyioghosa
        </p>
        <img src={sparkle} alt='' className='w-3' />
      </div>
      <div className='flex items-center relative -top-0.5 lg:-top-1.5'>
        <img src={sparkle} alt='' className='w-3' />
        <p className='text-hero-text font-semibold font-Poppins uppercase leading-none lg:text-lg backdrop-shadow-lg'>
          Urhoghide
        </p>
      </div>{' '}
    </div>
  );
};

export default Logo;
