import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import { useScroll, motion, useSpring } from "framer-motion";
const Home = () => {

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)


  return (
    <main className=" pb-20">
      <motion.div  style={{ scaleX }}  className="fixed top-0 left-0 right-0 origin-left ml-0 h-2 bg-purple-600 z-30"></motion.div>
      <Hero />
      {/* <TechStack /> */}
      <About />
      <Projects />
    </main>
  );
};

export default Home;
