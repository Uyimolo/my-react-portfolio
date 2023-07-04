import PropTypes from "prop-types";
import MildCta from "./MildCta";
const Project = ({ project }) => {
  // const mobile = project.mobileView
  return (
    // out wrapper
    <div className="bg-[url('./images/project-images/react-weather-mobile-bg.png')] bg-cover  rounded-3xl mx-auto min-w-80 max-w-[22rem] md:max-w-[40rem] lg:max-w-[50rem] hover:bg-contain transition duration-700  ">
      {/* inner wrapper  */}
      <div className="mx-auto space-y-2 px-4 py-6 bg-indigo-600 rounded-3xl bg-blue-600 backdrop-blur-xl bg-clip-padding bg-opacity-5 backdrop-flter md:backdrop-blur-3xl ">
        {/* innermost wrapper */}
        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4 md:items-start">
          {/* project image */}
          <div className=" py-2  mx-auto md:w-1/2">
            <img
              src={project.desktopView}
              alt="project"
              className="rounded-2xl"
            />
          </div>
          {/* project text */}
          <div className="flex flex-col space-y-2 mx-auto md:w-1/2">
            <h3 className="text-xl text-white lg:text-2xl">{project.title}</h3>
            <p className="text-gray-300 md:max-w-xl lg:text-lg">
              {project.projectDesc}
            </p>
          </div>
        </div>
        {/* techs used */}
         <div className="flex flex-col pt-4 justify-between md:items-center md:flex-row">
          <div className="flex items-center space-x-2">
             {project.technologies.map((tech, index) => (
              <p
                key={index}
                className="p-2 bg-indigo-600 rounded-3xl text-white"
              >
                {tech}
              </p>
            ))}
          </div>
           {/* CTAs */}
          <div className="flex justify-between pt-6 md:pt-0 space-x-6">
             <MildCta link={project.liveLink} text="View live" />
             <MildCta linnk={project.github} text="Github" />
           </div>
         </div>
      </div>
    </div>

   
  );
};

Project.propTypes = {
  project: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      projectDesc: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      liveLink: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
      mobileView: PropTypes.string.isRequired,
      desktopView: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    })
  ).isRequired,
};

export default Project;