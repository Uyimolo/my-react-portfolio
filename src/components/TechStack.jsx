// import { useScroll, useTransform, motion } from "framer-motion";
// import { useRef } from "react";
import {
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiReact,
  SiFramer,
  SiGithub,
  SiJavascript,
} from "react-icons/si";
import { motion } from "framer-motion";

const TechStack = () => {
  const childVariant = {
    start: {
      scale: 0.5,
      opacity: 0,
    },
    end: {
      scale: [1,2,2.5,2, 1],
      opacity: [0, 1],
    },
  };

  const iconStyle = "text-indigo-600 text-[2em] md:text-[2.8em]";
  return (
    <div className="px-6 md:px-16">
      <div className="flex w-full justify-between sm:space-x-6 md:max-w-3xl md:mx-auto lg:space-x-10">
        <motion.div className="" variants={childVariant}>
          <SiFirebase className={iconStyle} />
        </motion.div>
        <motion.div variants={childVariant}>
          <SiHtml5 className={iconStyle} />
        </motion.div>
        <motion.div variants={childVariant}>
          <SiCss3 className={iconStyle} />
        </motion.div>
        <motion.div variants={childVariant}>
          <SiReact className={iconStyle} />
        </motion.div>
        <motion.div variants={childVariant}>
          <SiFramer className={iconStyle} />
        </motion.div>
        <motion.div variants={childVariant}>
          <SiJavascript className={iconStyle} />
        </motion.div>
        <motion.div variants={childVariant}>
          <SiGithub className={iconStyle} />
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
