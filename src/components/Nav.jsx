import { PropTypes } from "prop-types";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import NavItems from "./NavItems";

const Nav = ({ navActive, setNavActive }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const navVariants = isDesktop
    ? {
        open: {
          y: 0,
        },
        closed: {
          y: 0,
          x: 0,
        },
      }
    : {
        open: {
          y: 0,
          transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.2,
          },
        },
        closed: {
          y: "-110%",
          transition: {
            duration: 0.5,
            when: "afterChildren",
            staggerChildren: 0.2,
          },
        },
      };
  // conditionally set and remove animations for mobile and desktop views
  const navItemsVariants = isDesktop
    ? {
        open: {
          opacity: 1,
          x: 0,
        },
        closed: {
          opacity: 1,
          x: 0,
        },
      }
    : {
        open: {
          opacity: [0,0.1,0.3,0.5,0.8,1],
          // x : 0
        },

        closed: {
          opacity: [1,0.8,0.5,0.3,0.1,0],
          // x: "100%"
        },
      };

  const navItems = ["Project arena", "Get to know me", "Reach me"]
    

  return (
    <motion.nav
      animate={navActive ? "open" : "closed"}
      variants={navVariants}
      initial={false}
      className={`flex flex-col absolute justify-center space-y-6 items-center left-0 right-0 mx-auto bg-slate-950 to-red-900 w-full h-screen z-20 lg:relative lg:flex-row lg:shadow-none lg:pr-16 lg:py-0 lg:h-auto lg:bg-transparent lg:w-fit lg:items-center lg:space-y-0 lg:space-x-6 lg:mx-0 lg:border-none `}
    >
      {/* iterate over navItems and display each nav and icon */}
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
