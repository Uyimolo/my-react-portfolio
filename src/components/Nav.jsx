import { PropTypes } from "prop-types";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import projectIcon from "../images/palette.svg";
import aboutIcon from "../images/person.svg";
import contactIcon from "../images/phone.svg";
// import { useState } from "react";
import NavItems from "./NavItems";
// import { useState } from "react";

const Nav = ({ navActive, setNavActive }) => {
    const isDesktop = useMediaQuery({ minWidth: 1024 });

  const navVariants = isDesktop ? 
  
  {
    open : {
        y : 0
    },
    closed : {
        y : 0,
        x : 0
    }
  }

  :
  
  {
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    closed: {
      y: "-100%",
      transition: {
        duration: 0.5,
        when: "afterChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const navItemsVariants = isDesktop ? 
   {
    open : {
        opacity : 1,
        x : 0
    },
    closed : {
        opacity : 1, 
        x :  0
    }
   }
  :
  {
    open: {
      opacity: 1,
      x: 0,
    },

    closed: {
      opacity: 0,
      x: "100%",
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
      disable={window.innerWidth > 768}
      className={`flex flex-col absolute right-0 left-0 mx-auto bg-slate-950 border-b-4 justify-center w-full h-screen lg:right-0 lg:flex-row lg:space-y-0 lg:space-x-8 lg:shadow-none lg:rounded lg:rounded-r-full lg:rounded-l-full lg:pr-6 lg:pl-12 lg:py-2 lg:h-auto lg:translate-y-0 lg:bg-white lg:w-fit lg:items-center`}
    >
      {navItems.map((navItem, index) => (
        <motion.div key={index} variants={navItemsVariants} className="">
          <NavItems setNavActive={setNavActive} navItem={navItem} />
        </motion.div>
      ))}
    </motion.nav>
  );
};

Nav.propTypes = {
  navActive: PropTypes.bool,
  setNavActive: PropTypes.func.isRequired,
};

export default Nav;
