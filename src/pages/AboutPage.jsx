import { useScroll, motion, useSpring } from "framer-motion";
import aboutImage from "../images/about-image.svg";
import AboutPageText from "../components/AboutPageText";
const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  return (
    <main className="pt-32 pb-20 min-h-screen">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 origin-left ml-0 h-2 bg-purple-600 z-30"
      ></motion.div>

      <motion.section
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="flex flex-col space-y-6 px-6 md:mt-6 md:px-16 xl:px-28"
      >
        <h1 className="text-3xl text-gray-200 lg:text-5xl ">
          A little about me (and My Code)
        </h1>
        <div className="flex flex-col justify-between items-center space-y-10 lg:flex-row-reverse lg:space-y-0">
          {/* about image */}
          <div className="w-80 mx-auto md:w-[25rem] lg:w-1/2 lg:max-w-[25rem]">
            <img src={aboutImage} alt="" className="w-full" />
          </div>
          {/* about text */}
          <AboutPageText />
        </div>
      </motion.section>
    </main>
  );
};

export default AboutPage;
