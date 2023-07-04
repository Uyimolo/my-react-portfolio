
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
  const iconStyle = "text-indigo-600 text-[2em] md:text-[2.8em]";
  return (
    <div className="flex justify-center px-6 justify-between sm:space-x-6 md:max-w-3xl md:justify-end md:max-w-full lg:space-x-10 md:px-16">
      <SiFirebase className={iconStyle} />
      <SiHtml5 className={iconStyle} />
      <SiCss3 className={iconStyle} />
      <SiReact className={iconStyle} />
      <SiFramer className={iconStyle} />
      <SiGithub className={iconStyle} />
      <SiJavascript className={iconStyle} />
    </div>
  );
};


export default TechStack;
