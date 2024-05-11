import MildCta from './MildCta';
import Slide from './Slide';
import SmallHeading from './SmallHeading';
import TechStack from './TechStack';
import { motion } from 'framer-motion';



const About = () => {
    const containerVariant = {
      start: {
        opacity: 0,
      },
      end: {
        opacity: 1,
        transition: {
          duration: 0.2,
          delay: 0.2,
          when: 'beforeChildren',
          staggerChildren: 0.1,
        },
      },
    };
  const slideClass = 'flex flex-col space-y-6 py-16  md:px-16 xl:px-28';

  return (
    <section className='bg-gradient-to-b from-black/90 to-black py-12 '>
      <Slide slideClass={slideClass}>
        <SmallHeading heading='A little about me' />

        <p className='text-gray-300 font-Poppins mx-auto w-[90%] max-w-[35rem] md:max-w-2xl leading- text-center  lg:max-w-3xl lg:text-lg '>
          {`Hey there, I'm Uyi, your friendly neighborhood front-end web developer! I've got a knack for creating websites that not only look cool but work like a charm. `}
        </p>

        <motion.div
          variants={containerVariant}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='w-full  md:mx-auto pt-12'>
          <TechStack />
        </motion.div>

        <div className='pt-6 mx-auto'>
          <MildCta text='Read more' link='about' />
        </div>
      </Slide>
    </section>
  );
};

export default About;
