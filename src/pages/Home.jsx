import Landing from "../components/Landing";
import TechStack from "../components/TechStack";
const Home = () => {
  return (
    <main className=" flex flex-col space-y-20 pb-20">
      <Landing />

      <TechStack />
    </main>
  );
};

export default Home;
