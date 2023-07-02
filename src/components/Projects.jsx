import img from "../images/project-images/react-weather-mobile-frame.png";
import img2 from "../images/project-images/react-weather-desktop-bg.png";

import MildCta from "./MildCta";
import { SiBugcrowd } from "react-icons/si";

const Projects = () => {
  return (
    <section className="w-full h-full px-6 ">

        {/* project */}
      <div className="flex flex-col space-y-4 py-2 shadow shadow-white rounded-xl w-80">
        <div className="flex flex-col space-y-4  mx-auto">
          {/* <img src={img} alt="" className=" w-6/12 rotate-12 mx-auto " /> */}
          <h3 className="text-gray-200 text-xl px-2">Weather app</h3>
          <img src={img2} alt="" className="w-full" />
        </div>


        <div className="flex flex-col space-y-3 px-2">
          <p className="text-gray-400 md:max-w-xl lg:text-lg">
            This app allows users to get the current weather forecast for any
            location in the world. Users can simply enter a city name or zip
            code into the search bar and the app will return the current weather
            conditions, as well as a forecast for the next few days
          </p>
          <p className="text-blue-300 md:max-w-xl lg:text-lg">
            {" "}
            Html, Css and Javascript
          </p>
          <div className="flex space-x-2 justify-between">
            <div className="flex space-x-2 items-center">
              <MildCta
                link="https://github.com/uyimolo"
                text="View live site"
              />
              <SiBugcrowd className="text-indigo-600 -translate-y-1" />
            </div>
            <div className="flex space-x-2 items-center">
              <MildCta
                link="https://github.com/uyimolo"
                text="View on Github"
              />
              <SiBugcrowd className="text-indigo-600 -translate-y-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
