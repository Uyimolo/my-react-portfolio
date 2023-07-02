import About from "../components/About";
import Landing from "../components/Landing";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
const Home = () => {
  return (
    <main className=" flex flex-col space-y-20 pb-20">
      <Landing />
      <TechStack />
      <About />
      <Projects />
    </main>
  );
};

export default Home;
