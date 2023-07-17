import { motion, useScroll, useSpring } from "framer-motion";
import Project from "../components/Project";

import projectList from "../arraysAndObjects.jsx/projectList";
import ButtonCta from "../components/ButtonCta";
const Gallery = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 origin-left ml-0 h-2 bg-purple-600 z-30"
      ></motion.div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="px-6 flex flex-col space-y-28 md:px-16 xl:px-28"
      >
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl text-gray-200 lg:text-5xl ">My gallery</h1>
          <p className="text-gray-200 md:max-w-2xl lg:max-w-3xl lg:text-lg ">
            (Where great code meets great design)
          </p>
          <p className="text-gray-400 md:max-w-2xl  lg:max-w-3xl lg:text-lg ">
            {`Welcome to my gallery! Here you can find a selection of my frontend
          development projects. I'm passionate about creating beautiful and
          user-friendly interfaces. I hope you enjoy my work!`}
          </p>
        </div>

        <div className="flex flex-col space-y-20 w-fit ">
          {projectList.map((project, index) => (
            <Project key={index} project={project} num={index} />
          ))}
        </div>

        <div className="flex flex-col space-y-8">
          <h2 className="text-3xl text-gray-200 md:text-cente lg:text-4xl ">
            Lets make more magic together
          </h2>
          <div className="w-fit">
            <ButtonCta text="Contact me" link="/contact" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;
