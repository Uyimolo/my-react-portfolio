import PropTypes from "prop-types";
import MildCta from "./MildCta";

const Project = ({ project, num }) => {
  return (
    <div className="bg-[url('./images/project-images/react-weather-mobile-bg.png')] relative bg-cover rounded-3xl mx-auto min-w-72 max-w-[22rem] md:max-w-[40rem] lg:max-w-[50rem] transition duration-700 ">
      {/* inner wrapper  */}
      <div className="text-[5rem] text-gray-800 absolute left-[-40px] top-[-65px] border font-extrabold w-fit px-4 rounded-full flex items-center justify-center">
        {num + 1}
      </div>
      <div className="mx-auto space-y-2 px-4 py-6 rounded-3xl bg-indigo-900 backdrop-blur-xl bg-clip-padding bg-opacity-30 backdrop-filter border-[1px] border-gray-600 md:backdrop-blur-3xl hover:bg-indigo-950 hover:bg-opacity-20 hover:border-indigo-600 hover:shadow-md hover:shadow-indigo-600">
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
            <h3 className={`${project.titleColor} text-2xl font-extrabold lg:text-3xl`}>{project.title}</h3>
            <p className="text-gray-100 md:max-w-xl lg:text-lg">
              {project.projectDesc}
            </p>
          </div>
        </div>
        {/* techs used */}
        <div className="flex flex-col pt-4 justify-between md:items-center md:flex-row-reverse">
          <div className="flex items-center space-x-2">
            {/* eslint-disable-next-line react/prop-types */}
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
  num: PropTypes.number.isRequired,
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
