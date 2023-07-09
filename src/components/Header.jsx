import menuBtn from "../images/icon-menu.svg";
import { PropTypes } from "prop-types";

import Logo from "./Logo";
import Nav from "./Nav";

import { motion } from "framer-motion";

const Header = ({ navActive, setNavActive }) => {
  const containerVariant = {
    start: {
      y: "-100%",
    },
    end: {
      y: 0,
      transition: {
        type: "spring",
        delay: 0.2,
        duration: 1,
        stiffness: 200,
        dampness: 50
      },
    },
  };

  return (
    <motion.header
      variants={containerVariant}
      initial="start"
      animate="end"
      
      className={`px-6 bg-slate-900 z-20 shadow-xl fixed top-0 left-0 right-0 mx-auto w-full py-6 flex justify-between w-full lg:pr-0 lg:items-center md:px-16 xl:px-28`}
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
    </motion.header>
  );
};

Header.propTypes = {
  navActive: PropTypes.bool,
  setNavActive: PropTypes.func.isRequired,
};

export default Header;
