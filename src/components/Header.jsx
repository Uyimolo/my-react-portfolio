import { useState } from "react";
import menuBtn from "../images/icon-menu.svg";

import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  return (
    <header className="px-6 py-10 flex justify-between w-full items-center relative lg:pr-0">
      <Logo />
      <Nav navActive={navActive}/>
      <img
        src={menuBtn}
        alt="menu button"
        className={` ${navActive ? 'rotate-90' : 'rotate-0'} cursor-pointer transition-transform duration-300 lg:hidden`}
        onClick={() => {
          setNavActive(!navActive);
        }}
      />
    </header>
  );
};

export default Header;
