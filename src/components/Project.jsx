import PropTypes from "prop-types";
import MildCta from "./MildCta";
const Project = ({ project }) => {
  // const mobile = project.mobileView
  return (
    <div
      className={`bg-[url('./images/project-images/react-weather-mobile-bg.png')] bg-cover max-w-80 md:w-[20rem] rounded-3xl mx-auto`}
    >
      <div className="flex flex-col space-y-2  mx-auto bg-indigo-600 p-4 rounded-3xl bg-blue-600 backdrop-blur-xl bg-clip-padding bg-opacity-5 backdrop-filter">
        {/* project image */}
        <div className=" py-2">
          <img
            src={project.desktopView}
            alt="project"
            className="rounded-2xl "
          />
        </div>
        {/* project text */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl text-white lg:text-2xl">{project.title}</h3>
          <p className="text-gray-300 md:max-w-xl lg:text-lg">
            {project.projectDesc}
          </p>
          {/* techs used */}
          <div className="flex space-x-2">
            {project.technologies.map((tech, index) => (
              <p
                key={index}
                className="p-2 bg-indigo-600 rounded-3xl text-white"
              >
                {tech}
              </p>
            ))}
            {/* <p className="p-2 bg-indigo-600 rounded-3xl text-white">React</p>
            <p className="p-2 bg-indigo-600 rounded-3xl text-white">Css</p>
            <p className="p-2 bg-indigo-600 rounded-full text-white">
              OpenWeatherMaps
            </p> */}
          </div>
          {/* CTAs */}
          <div className="flex justify-between pt-6">
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
