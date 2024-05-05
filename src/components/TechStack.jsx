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
  SiRedux,
  SiReactquery,
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

  const iconStyle = "text-indigo-600 text-[2.3em] md:text-[3.5em] xl:text-[4.5em]";
  return (
    <div className=''>
      <div className='flex flex-wrap w-full justify-center space-x-2 md:mx-auto md:space-x-6 lg:space-x-10'>
        <motion.div className='' variants={childVariant}>
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
        <motion.div variants={childVariant}>
          <SiRedux className={iconStyle} />
        </motion.div>
        <motion.div variants={childVariant}>
          <SiReactquery className={iconStyle} />
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
