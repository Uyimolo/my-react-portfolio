import TypewriterHome from "./TypewriterHome";
import MildCta from "./MildCta";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);
  // const position = useTransform(scrollYProgress, (pos) => {
  //   return pos === 1 ? "relative" : "fixed";
  // });
  return (
    <motion.section
      style={{ opacity, scale }}
      ref={targetRef}
      className="fixed top-32 h-screen left-0 right-0 flex flex-col space-y-6 px-6 pt-4 mb-12 md:px-16 xl:px-28"
    >
      {/* TypewriterHome handles typewriter effect on homepage lol */}
      <h1 className="text-[45px] leading-[1.1] text-gray-200 font-bold max-w-sm mt-6  mb-8 md:text-left md:text-5xl md:max-w-lg md:mb-8  lg:mt-12 md:max-w-lg md:mx-auto md:text-center lg:text-6xl ">
        empowering businesses with <TypewriterHome />
        solutions.
      </h1>
      <div className="md:mx-auto">
        <MildCta text="See works" link="projects" />
      </div>
    </motion.section>
  );
};

export default Hero;
