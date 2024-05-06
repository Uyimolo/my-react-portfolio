import { motion } from 'framer-motion';
import Project from '../components/Project';

import projectList from '../arraysAndObjects.jsx/projectList';
import ButtonCta from '../components/ButtonCta';
const Gallery = () => {
  return (
    <div className='py-20 min-h-screen bg-gray-200'>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        // exit={{x:'100%'}}
        transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
        className='px-6 flex flex-col space-y-16 md:px-16 xl:px-28'>
        <div className='flex flex-col space-y-2'>
          <h1 className='text-5xl font-Lobster text-center italic font-bold text-indigo-950 md:text-6xl lg:text-7xl'>
            My gallery
          </h1>
          <p className='text-gray-900 text-center mx-auto md:max-w-2xl lg:max-w-3xl lg:text-lg '>
            (Where great code meets great design)
          </p>
          <p className='text-gray-800 pt-1 font-Poppins mx-auto text-center  md:max-w-2xl lg:max-w-3xl lg:text-xl'>
            {`Welcome to my gallery! Here you can find a selection of my frontend
          development projects. I'm passionate about creating beautiful and
          user-friendly interfaces. I hope you enjoy my work!`}
          </p>
        </div>

        <div className='flex flex-col space-y-20 w-full mx-auto '>
          {projectList.map((project, index) => (
            <Project key={index} project={project} num={index} />
          ))}
        </div>

        <div className='flex flex-col space-y-8 items-center'>
          <h2 className='text-3xl text-gray-800 text-center lg:text-4xl '>
            Lets make more magic together
          </h2>
          <div className='w-fit'>
            <ButtonCta
              text='Contact me'
              link='/contact'
              backgroundColor='bg-indigo-950'
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;
