import Typewriter from "typewriter-effect";

const TypewriterHome = () => {
  return (
    <div className=" bg-gradient-to-r from-blue-700 via-red-400 to-red-800 w-fit font-Poppins text-transparent bg-clip-text  w-full pt-0">
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
