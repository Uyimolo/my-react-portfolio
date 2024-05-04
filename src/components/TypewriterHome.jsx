import Typewriter from "typewriter-effect";

const TypewriterHome = () => {
  return (
    <div className=" bg-gradient-to-r from-blue-900 via-indigo-500 to-red-600 w-fit font-semibold font-Poppins text-transparent bg-clip-text text-center w-full">
      <Typewriter
        options={{
          strings: ["secure", "responsive", "optimized", "pixel-perfect"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterHome;
