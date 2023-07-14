import Project from "./Project";
import MildCta from "./MildCta";
import projectList from "../arraysAndObjects.jsx/projectList";
const Projects = () => {
  return (
    <section className="w-full h-full px-6 mt-12  flex flex-col space-y-12 md:px-16 md:space-y-20 xl:px-28">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl text-gray-200 md:text-center lg:text-4xl ">
          Code Playground
        </h2>
        <p className="text-gray-400 md:max-w-2xl md:text-center md:mx-auto lg:max-w-3xl lg:text-lg ">
          {`(Where good code meets great design)`}
        </p>
      </div>

      {/* project */}
      <div className="flex flex-col space-y-20">
        {projectList.slice(0,3).map((project, index) => (
          <Project key={index} project={project} num={index} />
        ))}
      </div>

      <div className="md:mx-auto">
        <MildCta text="See more" link="projects" />
      </div>
    </section>
  );
};

export default Projects;
