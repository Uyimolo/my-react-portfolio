import TypewriterHome from './TypewriterHome';
import Slide from './Slide';
import ButtonCta from './ButtonCta';
// import responsive from '../images/responsive.png'
import  heroImage from '../images/Hero-image.svg';

const Hero = () => {
  return (
    <section className=' flex flex-col space-y-12 relative flex-col pt-20 bg-gradient-to-b to-black/90 from-hero-bg pb-20 lg:flex-row lg:space-y-0 lg:h-screen lg:max-h-[38rem] lg:items-center lg:space-x-0 md:pt-28 overflow-hidden '>
      <Slide
        slideClass=' flex flex-col pl-6 space-y-12 md:pl-16 xl:pl-28 '
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
        <h1 className='text-[2.6em] bg-transparent leading-[1.1] text-hero-text  font-Poppins max-w-sm mt-6 mb:text-left md:text-7xl md:max-w-3xl md:max-w-lg lg:max-w-4xl lg:bg-blak lg:text-6xl xl:text-7xl'>
          Empowering businesses with <TypewriterHome />
          solutions.
        </h1>

        <div className=''>
          <ButtonCta link='projects' text='View Projects' backgroundColor='bg-hero-text' textColor='text-gray-900' />
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
        slideClass='w-full grid lg:bg-blac lg:w-fit'>
        <img
          src={heroImage}
          alt=''
          className=' w-[100%]  justify-self-end -right-12 relative md:w-[80%] lg:w-[100%]'
        />
      </Slide>
    </section>
  );
};

export default Hero;
