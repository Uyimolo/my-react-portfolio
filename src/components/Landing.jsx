import { Link } from "react-router-dom";
import { useState } from "react";

import TypewriterHome from "../components/TypewriterHome";
const Landing = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className=" px-6 flex flex-col space-y-12 pt-4 md:px-16">
      <h1 className="text-[45px] leading-[1.1] text-white font-bold max-w-sm mt-6  mb-8 md:text-left md:text-6xl md:mb-8  lg:mt-12 md:max-w-xl lg:text-7xl">
        empowering businesses with <TypewriterHome />
        solutions.
      </h1>

      <div className="w-fit ">
        <Link
          to="works"
          className="text-gray-200 text-xl"
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          See works
        </Link>
        <div
          className={`h-[2px] mt-2 bg-white transition-all duration-700 ${
            isHovered ? "w-full" : "w-12"
          } `}
        ></div>
      </div>
    </section>
  );
};

export default Landing;
