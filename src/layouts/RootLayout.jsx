import { Outlet } from "react-router";
import Header from "../components/Header";
const RootLayout = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-[#10101A]">
      <Header/>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
};

export default RootLayout;
