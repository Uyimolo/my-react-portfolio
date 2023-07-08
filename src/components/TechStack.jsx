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

const TechStack = () => {
 
  const iconStyle = "text-indigo-600  text-[2em] md:text-[2.8em]";
  return (
    <div className="px-6 mt-[7rem] md:px-16">
      <div
       
        className="flex w-full justify-between sm:space-x-6 md:max-w-3xl md:mx-auto lg:space-x-10"
      >
        <SiFirebase className={iconStyle} />
        <SiHtml5 className={iconStyle} />
        <SiCss3 className={iconStyle} />
        <SiReact className={iconStyle} />
        <SiFramer className={iconStyle} />
        <SiGithub className={iconStyle} />
        <SiJavascript className={iconStyle} />
      </div>
    </div>
  );
};

export default TechStack;





































