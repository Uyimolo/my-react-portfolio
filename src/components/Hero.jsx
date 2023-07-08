import TypewriterHome from "./TypewriterHome";
import MildCta from "./MildCta";
import { motion } from "framer-motion";
// import { useRef } from "react";
import TechStack from "./TechStack";

const Hero = () => {
  return (
    <motion.section
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5 , duration : 0.5}}
      className=" flex h-screen min-h-[45rem] max-h-[52rem] relative flex-col space-y-6 px-6 pt-40 md:pt-[25vh] md:min-h-screen md:px-16 lg:min-h-[50rem]  xl:px-28"
    >
      {/* TypewriterHome handles typewriter effect on homepage lol */}
      <h1 className="text-[48px]  leading-[1.1] text-gray-200 font-semibold max-w-sm mt-6  mb-8 md:text-7xl md:max-w-lg md:mb-8 md:max-w-lg md:mx-auto md:text-center  lg:text-5xl  lg:mt-12">
        empowering businesses with <TypewriterHome />
        solutions.
      </h1>
      <div className="md:mx-auto">
        <MildCta text="See works" link="projects" />
      </div>

      <motion.div
      initial={{opacity: 0, scale:1}}
      animate={{opacity:1, scale:[1,1.5,1]}}
      transition={{duration:1, delay : 1}}
      className="absolute w-full left-0 right-0 bottom-16 md: mx-auto">
        <TechStack />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
