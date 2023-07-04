import menuBtn from "../images/icon-menu.svg";
import { PropTypes } from "prop-types";

import Logo from "./Logo";
import Nav from "./Nav";

const Header = ({ navActive, setNavActive }) => {
  return (
    <header
      className={`px-6 py-6 flex justify-between relative w-screen lg:pr-0 lg:items-center md:px-16 `}
    >
      <Logo />
      <Nav navActive={navActive} setNavActive={setNavActive} />
      {/* hamburger menu */}
      <img
        src={menuBtn}
        alt="menu button"
        className={` ${
          navActive ? "rotate-90" : "rotate-0"
        } cursor-pointer transition-transform duration-300 z-20 lg:hidden self-center`}
        onClick={() => {
          setNavActive(!navActive);
        }}
      />
    </header>
  );
};

Header.propTypes = {
  navActive: PropTypes.bool,
  setNavActive: PropTypes.func.isRequired,
};

export default Header;
