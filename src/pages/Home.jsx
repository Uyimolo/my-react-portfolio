import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-6 flex flex-col space-y-12">
      <h1 className="text-5xl text-white font-bold max-w-xl md:m-auto md:text-center mb-12">
        empowering businesses with{" "}
        <h1 className="bg-gradient-to-r from-blue-900 via-indigo-500 to-red-600 inline-block text-transparent bg-clip-text">
          pixel-perfect
        </h1>{" "}
        solutions.
      </h1>

      <div className="flex justify-between border p-2 rounded">
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
