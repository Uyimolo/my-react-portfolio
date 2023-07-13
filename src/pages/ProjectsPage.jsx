import { motion, useScroll, useSpring } from "framer-motion";
import Project from "../components/Project";
import RestCountriesDesktop from "../images/project-images/rest-countries-desktop-bg.png";
import weatherDesktop from "../images/project-images/react-weather-desktop-bg.png";
import todoDesktop from "../images/project-images/todo-app-desktop-bg.jpg";
const ProjectsPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  const projectList = [
    {
      title: "Weather App",
      projectDesc: `This app allows users to get the current weather forecast for any
        location in the world. Users can simply enter a city name or zip
        code into the search bar and the app will return the current weather
        conditions, as well as a forcast for the next 7 days.`,
      technologies: ["React", "CSS", "API"],
      liveLink: "https://react-weather-app-uyimolo.vercel.app",
      github: "https://github.com/uyimolo/react-weather-app",
      mobileView: "./images/project-images/react-weather-mobile-bg.png",
      desktopView: weatherDesktop,
    },
    {
      title: "Countrypedia",
      projectDesc: `Countrypedia is a web app that allows users to search and explore information about countries around the world. Other features include filter by region and a theme toggler for light and dark modes.  `,
      technologies: ["JS", "CSS", "HTML", "API"],
      liveLink: "https://rest-countries-wheat.vercel.app",
      github: "https://github.com/uyimolo/rest-countries",
      mobileView: "./images/project-images/rest-countries-mobile-bg.png",
      desktopView: RestCountriesDesktop,
    },
    {
      title: "Todo App",
      projectDesc: `This is a simple to-do app built using Javascript. It allows users to create, edit, and delete to-do items, users can also filter todo items by their active states and theres a drag and drop feature to rearrange todos.`,
      technologies: ["JS", "CSS", "HTML"],
      liveLink: "https://uyimolo.github.io/todo-app",
      github: "https://github.com/uyimolo/todo-app",
      mobileView: "./images/project-images/react-weather-mobile-bg.png",
      desktopView: todoDesktop,
    },
  ];
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 origin-left ml-0 h-2 bg-purple-600 z-30"
      ></motion.div>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
        className="px-6 flex flex-col space-y-12 md:px-16 xl:px-28"
      >
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl text-gray-200 lg:text-5xl ">Project Arena</h1>
          <p className="text-gray-400 md:max-w-2xl lg:max-w-3xl lg:text-lg ">
            (Where great code meets great design)
          </p>
        </div>
        <div className="flex flex-col space-y-20">
          {projectList.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
