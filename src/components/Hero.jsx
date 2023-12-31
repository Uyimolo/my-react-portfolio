import TypewriterHome from "./TypewriterHome";
import { motion } from "framer-motion";
import TechStack from "./TechStack";
import ButtonCta from "./ButtonCta";

const Hero = () => {
  const containerVariant = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      variants={containerVariant}
      initial="start"
      animate="end"
      className=" flex h-screen min-h-[45rem] max-h-[52rem] relative flex-col space-y-6 px-6 pt-40 md:pt-[25vh] md:min-h-[70rem] md:px-16 lg:min-h-[50rem] xl:pt-24 xl:px-28"
    >
      {/* TypewriterHome handles typewriter effect on homepage lol */}
      <h1 className="text-[48px]  leading-[1.1] text-gray-200 font-semibold max-w-sm mt-6  mb-8 md:text-7xl md:max-w-lg md:mb-8 md:max-w-lg md:mx-auto md:text-center  lg:text-6xl  lg:mt-12">
        empowering businesses with <TypewriterHome />
        solutions.
      </h1>

      <ButtonCta link="projects" text="View Projects" />

      <motion.div
        // variants={childVariant}
        className="absolute w-full left-0 right-0 bottom-24 md:bottom-52 md:mx-auto xl:bottom-36"
      >
        <TechStack />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
