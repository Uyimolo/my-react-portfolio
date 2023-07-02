import TypewriterHome from "../components/TypewriterHome";
import MildCta from "./MildCta";
const Landing = () => {
  return (
    <section className=" px-6 flex flex-col space-y-12 pt-4 md:px-16">
      {/* TypewriterHome handles typewriter effect on homepage lol */}
      <h1 className="text-[45px] leading-[1.1] text-gray-200 font-bold max-w-sm mt-6  mb-8 md:text-left md:text-6xl md:mb-8  lg:mt-12 md:max-w-xl lg:text-7xl">
        empowering businesses with <TypewriterHome />
        solutions.
      </h1>

      <MildCta text="See works" />
    </section>
  );
};

export default Landing;
