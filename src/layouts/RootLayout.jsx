import { Outlet } from "react-router";
import { useRef, useState } from "react";

import Header from "../components/Header";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
const RootLayout = () => {
  const [navActive, setNavActive] = useState(false);
  const bodyRef = useRef();
  //   useEffect(() => {
  //     if (navActive) {
  //       bodyRef.current.style.overflow = "hidden";
  //     }
  //   });
  return (
    <div
      ref={bodyRef}
      className={`bg-slate-950  overflow-hidden ${
        navActive ? "w-screen h-screen" : "w-full min-h-screen"
      }`}
    >
      <Header navActive={navActive} setNavActive={setNavActive} />

      <>
        <Outlet />
      </>

      <footer className=" px-6 py-6 bg-gray-700 flex justify-between">
        <Logo />
        <div className="flex flex-col">
          <Link to="https://twitter.com/uyimolo247">Github</Link>
          <Link to="https://twitter.com/uyimolo247">Linkedin</Link>
          <Link to="https://twitter.com/uyimolo247">Facebook</Link>
          <Link to="https://twitter.com/uyimolo247">Instagram</Link>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
