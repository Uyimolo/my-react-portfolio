import Project from './Project';
import projectList from '../arraysAndObjects.jsx/projectList';
import Slide from './Slide';
import ButtonCta from './ButtonCta';
import SubHeading from './SubHeading';
const Projects = () => {
  return (
    <section className=' bg-gray-200 px-6 md:px-16 lg:px-20'>
      <Slide slideClass='py-8 flex flex-col'>
        <div className='flex flex-col space-y-2 mb-20'>
         <SubHeading heading='Code Playground' />

          <p className='text-indigo-950 font-Poppins md:max-w-2xl text-center md:mx-auto lg lg:text-lg '>
            {`(Where good code meets great design)`}
          </p>
        </div>

        {/* project */}
        <div className='flex flex-col space-y-16'>
          {projectList.slice(0, 3).map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>

        <div className='mx-auto mt-12'>
          <ButtonCta
            text='See more'
            link='projects'
            backgroundColor='bg-indigo-950'
          />
        </div>
      </Slide>
    </section>
  );
};

export default Projects;
