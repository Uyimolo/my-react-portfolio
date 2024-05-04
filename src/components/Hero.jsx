import TypewriterHome from './TypewriterHome';
import { motion } from 'framer-motion';
import TechStack from './TechStack';
import ButtonCta from './ButtonCta';

const Hero = () => {
  const containerVariant = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
      transition: {
        duration: .5,
        delay: 0.8,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      variants={containerVariant}
      initial='start'
      animate='end'
      className=' flex h-screen bg-blak relative flex-col py-[2rem] space-y-6 px-6 items-center justify-center lg:pt-20'> 
      {/* TypewriterHome handles typewriter effect on homepage lol */}
      <h1 className='text-[2.5em]  leading-[1.1] text-gray-200 font-semibold font-Poppins max-w-sm mt-6  mb-8 md:text-7xl md:max-w-lg md:mb-8 md:max-w-lg md:mx-auto text-center lg:max-w-3xl  lg:text-7xl '>
        empowering businesses with <TypewriterHome />
        solutions.
      </h1>

      <div className=' self-center'>
        {' '}
        <ButtonCta link='projects' text='View Projects' />{' '}
      </div>

      <motion.div
        // variants={childVariant}
        className='w-full  md:mx-auto pt-12'>
        <TechStack />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
