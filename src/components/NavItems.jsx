import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { motion } from "framer-motion";

const NavItems = ({ navItem, setNavActive,  }) => {
  return (
    <motion.div
      initial={{ scale: 1, color: "white" }}
      whileHover={{ scale: 1.1, color: "yellow" }}
      transition={{ type: "spring", stiffness: 200, velocity: 2 }}
      className="flex w-full items-center justify-center lg:w-fit"
    >
      <Link
        onClick={() => setNavActive(false)}
        to={navItem.link}
        className="text-blue-200 font-Lobster w-fit text-6xl md:text-7xl transition-all duration-900 ease-in-out lg:font-Poppins lg:text-indigo-400 lg:text-lg lg:hover:bg-transparent lg:my-0 hover:border-b-2 border-indigo-600  lg:w-fit"
      >
        {navItem.text}
      </Link>
    </motion.div>
  );
};

NavItems.propTypes = {
  navItem: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
  setNavActive: PropTypes.func.isRequired,
};

export default NavItems;
