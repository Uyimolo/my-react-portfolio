import { Link } from "react-router-dom";
import TypewriterHome from "../components/TypewriterHome";
const Home = () => {
  return (
    <div className="p-6 flex flex-col space-y-12 pb-20">
      <h1 className="text-4xl text-gray-200 font-bold max-w-sm mb-12 md:m-auto md:text-center md:mb-8 lg:mt-12 lg:max-w-lg md:text-5xl">
        empowering businesses with{" "}
       <TypewriterHome />
        solutions.
      </h1>

      <div className="flex justify-between border border-gray-200 p-2 rounded max-w-md md:mx-auto md:w-80">
        <Link to="works" className="text-gray-200">
          See works
        </Link>
        <Link to="works" className="text-gray-200">
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default Home;
