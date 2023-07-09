import TypewriterHome from "./TypewriterHome";
import { motion } from "framer-motion";
// import { useRef } from "react";
import TechStack from "./TechStack";
import { Link } from "react-router-dom";

const Hero = () => {
  const containerVariant = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        delay: 1.2,
        when: "beforeChildren",
      },
    },
  };

  const childVariant = {
    start: { x: "100%" },
    end: { x: 0 },
    transition: { type: "tween" },
  };

  return (
    <motion.section
      variants={containerVariant}
      initial="start"
      animate="end"
      className=" flex h-screen min-h-[45rem] max-h-[52rem] relative flex-col space-y-6 px-6 pt-40 md:pt-[25vh] md:min-h-screen md:px-16 lg:min-h-[50rem] xl:px-28"
    >
      {/* TypewriterHome handles typewriter effect on homepage lol */}
      <h1 className="text-[48px]  leading-[1.1] text-gray-200 font-semibold max-w-sm mt-6  mb-8 md:text-7xl md:max-w-lg md:mb-8 md:max-w-lg md:mx-auto md:text-center  lg:text-5xl  lg:mt-12">
        empowering businesses with <TypewriterHome />
        solutions.
      </h1>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: [1, 1.1, 1, 1.1, 1, 1.1] }}
        transition={{ duration: 0.8 }}
        className="md:mx-auto w-fit py-2 px-4 border rounded-full"
      >
        <Link className="text-gray-300">See projects</Link>
      </motion.div>

      <motion.div
        variants={childVariant}
        className="absolute w-full left-0 right-0 bottom-16 md: mx-auto"
      >
        <TechStack />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
