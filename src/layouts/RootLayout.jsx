import { Outlet, useLocation } from "react-router";
import { useRef, useState, useEffect } from "react";

import Header from "../components/Header";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
const RootLayout = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [navActive, setNavActive] = useState(false);
  const bodyRef = useRef();

  const [x, setX] = useState(0);
  const [y, setY] = useState(-100);
  const location = useLocation();

  const handleMouseMove = (event) => {
    if (isDesktop) {
      setX(event.clientX + 60);
      setY(event.clientY + 60);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  }, [location]);
  // todo: use context to implement light and dark mode switches 
  return (
    <div className="bg-slate-950">
      <div
        ref={bodyRef}
        onMouseMove={handleMouseMove}
        className={`overflow-hidden ${
          navActive
            ? "w-screen h-screen"
            : "w-full min-h-screen xl:max-w-[1500px] xl:mx-auto"
        }`}
      >
        <Header navActive={navActive} setNavActive={setNavActive} />
        <div
          className="z-30"
          style={{
            position: "fixed",
            top: y,
            left: x,
            width: 100,
            height: 100,
          }}
        >
          <p className="text-white">Justindavid</p>
        </div>
        <>
          <Outlet />
        </>

        <footer className=" px-6 py-6 border-t border-gray-700 space-x-6 flex justify-between md:px-16 xl:px-28">
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
    </div>
  );
};

export default RootLayout;
