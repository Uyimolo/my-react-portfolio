/* eslint-disable react/prop-types */
import Slide from './Slide';
import MildCta from './MildCta';

const Project = ({ project }) => {
  return (
    <div className='border-2 border-b-gray-400 pb-12'>
      <Slide slideClass='group flex space-y-12 flex-col mx-auto items-center justify-center'>
        <div>
          <h3
            className={`text-4xl font-Lobster text-center italic font-bold text-indigo-950 md:text-5xl lg:text-6xl`}>
            {project.title}
          </h3>
        </div>
        {/*  */}
        <div
        //  style={{backgroundColor: `${project.backgroundColor}`}}
         >
          <div

            className={`flex justify-center items-center p-4 lg:space-y-0 xl:max-w-3xl 2xl:max-w-6xl`}>
            <Slide
              slideClass=' w-full md:w-[80%]'
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
              slideClass='w-[25%] md:w-[20%] '
              slideVariants={{
                hidden: { x: 50 },
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

          <div className=''>
            <div className='flex items-center justify-center w-[80%] mx-auto mt-6 space-x-6 pb-4 '>
              <Slide
                slideClass=''
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
                {' '}
                <MildCta text='Github' color='gray-900' link={project.github} />
              </Slide>
              <Slide
                slideClass=''
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
                <MildCta
                  text='Live Site'
                  color='gray-900'
                  link={project.liveLink}
                />
              </Slide>
            </div>
            <div className='flex flex-wrap items-center justify-center space-x-1 pb-4 '>
              {project.technologies.map((tech, index) => (
                <p
                  key={index}
                  className='px-2 py-1 text-sm font-Poppins bg-indigo-500 rounded-full text-white text-center mt-2 md:text-xl'>
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
