import { PropTypes } from "prop-types";
import { motion } from "framer-motion";
import projectIcon from "../images/palette.svg";
import aboutIcon from "../images/person.svg";
import contactIcon from "../images/phone.svg";
// import { useState } from "react";
import NavItems from "./NavItems";
// import { useState } from "react";

const Nav = ({ navActive, setNavActive }) => {
  const navVariants = {
    open: {
      y: 40,
      opacity: 1,
      timingFunction: "easeInOutQuad",
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      y: "-100%",
      opacity: [1, 1,1,1,1,1,1, 0.5, 0.5, 0.4, 0.3, 0.2, 0.1, 0],
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const navItems = [
    {
      text: "Project arena",
      icon: projectIcon,
    },
    {
      text: "Get to know me",
      icon: aboutIcon,
    },
    {
      text: "Reach me",
      icon: contactIcon,
    },
  ];
  return (
    <motion.nav
      animate={navActive ? "open" : "closed"}
      variants={navVariants}
      className={`${
        navActive ? "" : "lg:translate-x-0"
      } h-screen flex flex-col absolute right-0 left-0 bg-[#10101A] w-screen top-24 shadow-xl overflow-hidden transition-all duration-700 lg:relative lg:top-0 lg:flex-row lg:space-y-0 lg:space-x-8 lg:shadow-none lg:rounded-r lg:rounded-full  lg:pr-6 lg:pl-12 lg:py-4 lg:h-auto lg:translate-y-0 lg:bg-white lg:justify-end lg:w-fit lg:items-center`}
    >
      {navItems.map((navItem, index) => (
        <NavItems key={index} setNavActive={setNavActive} navItem={navItem} />
      ))}
    </motion.nav>
  );
};

Nav.propTypes = {
  navActive: PropTypes.bool,
  setNavActive: PropTypes.func.isRequired,
};

export default Nav;
