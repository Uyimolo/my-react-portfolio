/* eslint-disable react/prop-types */
import Slide from './Slide';

const Project = ({ project }) => {
  return (
    <div>
      <Slide slideClass='group flex space-y-12 flex-col mx-auto items-center justify-center '>
        <div>
          <h1
            className={`text-6xl font-Lobster text-center italic font-bold text-indigo-950 md:text-8xl lg:text-6xl`}>
            {project.title}
          </h1>
        </div>
        {/*  */}
        <div className='space-y-12'>
          <div
            className={`relative flex flex-col items-center justify-center p-4 gap-12 md:max-w-2xl lg:flex-row xl:max-w-3xl 2xl:max-w-6xl`}>
            <Slide
              slideClass='mx-auto rounded-md w-full md:w-[80%]'
              slideVariants={{
                hidden: { x: -100 },
                visible: {
                  x: 0,
                  transition: {
                    duration: 0.5,
                    ease: 'easeOut',
                    delay: 0.3,
                  },
                },
              }}>
              <img
                src={project.images[0]}
                alt={project.title}
                className='w-full'
              />
            </Slide>

            <Slide
              slideClass='w-[30%] md:w-[20%]'
              slideVariants={{
                hidden: { x: 100 },
                visible: {
                  x: 0,
                  transition: {
                    duration: 0.5,
                    ease: 'easeOut',
                    delay: 0.3,
                  },
                },
              }}>
              {' '}
              <img
                src={project.images[1]}
                alt='project.title'
                className='w-full'
              />
            </Slide>
          </div>

          <div className='flex flex-col py-2 space-y-4 px-4 justify-between items-center '>
            <div className='flex flex-wrap items-center space-x-1 pb-4 '>
              {project.technologies.map((tech, index) => (
                <p
                  key={index}
                  className='px-2 py-1 text-sm font-Poppins bg-indigo-500 rounded-full text-white text-center md:text-xl'>
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Project;
