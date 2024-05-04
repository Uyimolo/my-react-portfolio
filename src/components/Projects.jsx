import Project from './Project';
import projectList from '../arraysAndObjects.jsx/projectList';
import Slide from './Slide';
import ButtonCta from './ButtonCta';
const Projects = () => {
  return (
    <section>
      <Slide slideClass='w-screen py-8 flex flex-col bg-gray-200'>
        <div className='flex flex-col space-y-2 mb-20'>
          <h2
            className={`text-5xl left-0 bg-blue font-Lobster text-center italic font-bold text-indigo-950 md:text-6xl lg:text-7xl`}>
            Code Playground
          </h2>

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
