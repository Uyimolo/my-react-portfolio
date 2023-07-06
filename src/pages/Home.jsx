import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
const Home = () => {
  return (
    <main className=" h-[800v pb-20">
      <Hero />
      <TechStack />
      <About />
      <Projects /> 
    </main>
  );
};

export default Home;
