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
      className={`bg-slate-900  overflow-hidden ${
        navActive ? "w-screen h-screen" : "w-full min-h-screen"
      }`}
    >
      <Header navActive={navActive} setNavActive={setNavActive} />

      <>
        <Outlet />
      </>

      <footer className=" px-6 py-6 border-t border-gray-700 space-x-6 flex justify-between md:px-16">
        <Logo />
        <div className="flex flex-wrap text-gray-300 items-center md:max-w-xl  lg:text-lg">
          <Link to="https://twitter.com/uyimolo247" className="pr-2">
            Github
          </Link>
          <Link to="https://twitter.com/uyimolo247" className="pr-2">
            Facebook
          </Link>
          <Link to="https://twitter.com/uyimolo247" className="pr-2">
            Instagram
          </Link>
          <Link to="https://twitter.com/uyimolo247" className="pr-2">
            Linkedin
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
