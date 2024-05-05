import TypewriterHome from './TypewriterHome';
import Slide from './Slide';
import ButtonCta from './ButtonCta';
// import responsive from '../images/responsive.png'
import devImage from '../images/dev2.svg';

const Hero = () => {
  return (
    <section className=' flex h-[45rem] min-h-[100vh] relative flex-col space-y-6 px-6 bg-gradient-to-b to-black/90 from-indigo-950 items-center justify-center lg:pt-20 lg:max-w-screen'>
      {/* TypewriterHome handles typewriter effect on homepage lol */}
      <Slide
        slideClass='absolute left-4 top-32 flex flex-col space-y-6 md:left-16 lg:left-28 '
        slideVariants={{
          hidden: {
            x: -200,
            opacity: 0,
          },
          visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3 },
          },
        }}>
        <h1 className='text-[2.6em] bg-transparent  leading-[1.1] text-gray-200  font-Poppins max-w-sm mt-6  mb:text-left mb-8 md:text-6xl md:max-w-lg md:mb-8 md:max-w-lg md:mx-auto lg:max-w-3xl  lg:text-7xl '>
          Empowering businesses with <TypewriterHome />
          solutions.
        </h1>

        <div className='w-fit'>
          <ButtonCta link='projects' text='View Projects' />
        </div>
      </Slide>
      <Slide
        slideVariants={{
          hidden: { x: 200, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.5 },
          },
        }}
        slideClass='absolute -right-12 bottom-10 w-11/12 lg:w-5/12'>
        <img src={devImage} alt='' />
      </Slide>
    </section>
  );
};

export default Hero;
