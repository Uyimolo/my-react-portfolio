import Project from '../components/Project';
import palette from '../images/palette.svg';
import projectList from '../arraysAndObjects.jsx/projectList';
import ButtonCta from '../components/ButtonCta';
import Heading from '../components/Heading';
import PageDiv from '../components/PageDiv';
const Gallery = () => {
  return (
    <section className='py-20 min-h-scree bg-gray-200'>
      <PageDiv>
        <div className='flex flex-col space-y-2 md:mt-6'>
          <Heading heading='My gallery' />
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
          <div className='flex items-center '>
            <h2 className='text-3xl text-gray-800 text-center lg:text-4xl '>
              Lets make more magic together
            </h2>
            <img src={palette} alt='' className='w-12' />
          </div>
          <div className='w-fit'>
            <ButtonCta
              text='Contact me'
              link='/contact'
              backgroundColor='bg-indigo-950'
            />
          </div>
        </div>
      </PageDiv>
    </section>
  );
};

export default Gallery;
