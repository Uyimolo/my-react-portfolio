import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import {
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiReact,
  SiFramer,
  SiGithub,
  SiJavascript,
} from "react-icons/si";

const TechStack = () => {
  const targetRef = useRef();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.25, 0.4], [0, 0.3, 1]); 
  // const position = useTransform(scrollYProgress, (pos) => {
  //   return pos === 0.5 ? "relative" : "fixed";
  // });
  
  
  // const translateY = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])
  const iconStyle = "text-indigo-600  text-[2em] md:text-[2.8em]";
  return (
    <motion.div
      style={{ opacity}} 
      className="sticky top-6 left-0 right-0 top-10 flex mt-[37rem] w-full px-6 justify-between justify-self-end sm:space-x-6 md:max-w-3xl lg:justify-end md:w-fit md:mx-auto lg:space-x-10 md:px-16 "
    >
      <SiFirebase className={iconStyle} />
      <SiHtml5 className={iconStyle} />
      <SiCss3 className={iconStyle} />
      <SiReact className={iconStyle} />
      <SiFramer className={iconStyle} />
      <SiGithub className={iconStyle} />
      <SiJavascript className={iconStyle} />
    </motion.div>
  );
};

export default TechStack;
