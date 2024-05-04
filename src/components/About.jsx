import MildCta from './MildCta';
import Slide from './Slide';

const About = () => {
  const slideClass = 'pb-6 flex flex-col space-y-6 py-20  md:px-16 xl:px-28';

  return (
    <section>
      <Slide slideClass={slideClass}>
        <h2 className='text-3xl font-Poppins text-gray-200 text-center lg:text-4xl '>
          A Little About Me
        </h2>

        <p className='text-gray-300 font-Poppins md:max-w-2xl leading- text-center md:mx-auto lg:max-w-3xl lg:text-lg '>
          {`Hey there, I'm Uyi, your friendly neighborhood front-end web developer! I've got a knack for creating websites that not only look cool but work like a charm. `}
        </p>

        <div className='pt-6 mx-auto'>
          <MildCta text='Read more' link='about' />
        </div>
      </Slide>
    </section>
  );
};

export default About;
