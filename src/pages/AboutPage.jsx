import { motion } from 'framer-motion';
import aboutImage from '../images/about-image.svg';
import AboutPageText from '../components/AboutPageText';
const AboutPage = () => {
  return (
    <main className='py-20 bg-gray-200'>
      <motion.section
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
        className='flex flex-col space-y-6 px-6 md:mt-6 md:px-16 xl:px-28'>
        <h1 className='text-5xl font-Lobster text-center italic font-bold text-indigo-950 mb-12 md:text-6xl lg:text-7xl'>
          A little about me (and My Code)
        </h1>
        <div className='flex flex-col justify-between items-center space-y-10 lg:flex-row-reverse lg:space-y-0'>
          {/* about image */}
          <div className='w-80 mx-auto md:w-[25rem] lg:w-1/2 lg:max-w-[25rem]'>
            <img src={aboutImage} alt='' className='w-full' />
          </div>
          {/* about text */}
          <AboutPageText />
        </div>
      </motion.section>
    </main>
  );
};

export default AboutPage;
