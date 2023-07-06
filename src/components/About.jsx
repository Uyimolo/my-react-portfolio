import MildCta from "./MildCta";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const targetRef = useRef();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 0.4], [0.5, 1]);
  const opacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3, 0.35],
    [0, 0.0, 0.1, 1]
  );
  return (
    <motion.section
      style={{ opacity, scaleY }}
      className="px-6 flex flex-col space-y-6 mt-[5rem] pb-12 md:px-16  xl:px-28"
    >
      <h2 className="text-2xl text-gray-200 md:text-center lg:text-4xl"> 
        Introductions
      </h2>
      <p className="text-gray-400 md:max-w-2xl  md:text-center md:mx-auto lg:max-w-3xl lg:text-2xl ">
        I am Uyioghosa Justin Urhoghide (Uyi to friends and business
        associates). I am a front end web developer. I love creating websites
        that are not just visually appealing but functional and interactive.
      </p>

      <div className="pt-6 md:mx-auto">
        <MildCta text="Read more" />
      </div>
    </motion.section>
  );
};

export default About;
