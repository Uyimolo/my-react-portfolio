
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
  const iconStyle = "text-indigo-600 text-[2em] md:text-[3.5em]";
  return (
    <div className="flex justify-between px-6 md:px-16">
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
