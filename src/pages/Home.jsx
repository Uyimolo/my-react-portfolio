import { Link } from "react-router-dom";
import TypewriterHome from "../components/TypewriterHome";
import { useState } from "react";
const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="p-6 flex flex-col space-y-12 pb-20">
      <h1 className="text-[45px] leading-[1.1] text-gray-200 font-bold max-w-sm mb-8 md:m-auto md:text-center md:mb-8 lg:mt-12 lg:max-w-lg lg:text-5xl">
        empowering businesses with <TypewriterHome />
        solutions.
      </h1>

      <div className="w-fit ">
        <Link
          to="works"
          className="text-gray-200"
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
    </div>
  );
};

export default Home;
