import TypewriterHome from "../components/TypewriterHome";
import MildCta from "./MildCta";
// import landingImage from "../images/landingImage3.svg";
const Landing = () => {
  return (
    <section className="flex flex-col space-y-6 px-6 pt-4 md:px-16 ">
        {/* TypewriterHome handles typewriter effect on homepage lol */}
        <h1 className="text-[45px] leading-[1.1] text-gray-200 font-bold max-w-sm mt-6  mb-8 md:text-left md:text-5xl md:max-w-lg md:mb-8  lg:mt-12 md:max-w-xl lg:text-6xl">
          empowering businesses with <TypewriterHome />
          solutions.
        </h1>

        <MildCta text="See works" link="projects" />
    </section>
  );
};

export default Landing;
