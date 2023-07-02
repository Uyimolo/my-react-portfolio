// import img from "../images/project-images/react-weather-mobile-frame.png";
import img2 from "../images/project-images/react-weather-desktop-bg.png";

import MildCta from "./MildCta";
// import { SiGithub } from "react-icons/si";

const Projects = () => {
  return (
    <section className="w-full h-full px-6 ">
      {/* project */}
      <div className="bg-[url('./images/project-images/react-weather-mobile-bg.png')] bg-cover w-72 rounded-3xl mx-auto">
      <div className="flex flex-col space-y-2  mx-auto bg-indigo-600 p-4 rounded-3xl backdrop-blur-md bg-clip-padding bg-opacity-5 backdrop-filter">
        {/* project image */}
        <div className=" py-2">
          <img src={img2} alt="project" className="rounded-2xl " />
        </div>
        {/* project text */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl text-white lg:text-2xl">Weather App</h3>
          <p className="text-white md:max-w-xl lg:text-lg">
            This app allows users to get the current weather forecast for any
            location in the world. Users can simply enter a city name or zip
            code into the search bar and the app will return the current weather
            conditions, as well as a forcast for the next 7 days
          </p>
          {/* techs used */}
          <div className="flex space-x-2">
            <p className="p-2 bg-indigo-600 rounded-3xl text-white">React</p>
            <p className="p-2 bg-indigo-600 rounded-3xl text-white">Css</p>
            <p className="p-2 bg-indigo-600 rounded-full text-white">
              OpenWeatherMaps
            </p>
          </div>
          {/* CTAs */}
          <div className="flex justify-between pt-6">
            <MildCta text="Visit site" />
            <MildCta text="Github" />
          </div>
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default Projects;
