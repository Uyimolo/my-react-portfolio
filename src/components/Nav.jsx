import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const Nav = ({ navActive }) => {
  const navItems = ["Project Arena", "Get to know me", "Reach me"];
  return (
    <nav
      className={`${
        navActive
          ? "translate-y-20 h-screen"
          : "-translate-y-[1000px] lg:translate-x-0"
      } flex flex-col absolute right-0 left-0 bg-[#10101A] w-screen top-24 shadow-xl overflow-hidden transition-all duration-700 lg:relative lg:top-0 lg:flex-row lg:space-y-0 lg:space-x-8 lg:shadow-none lg:rounded-r lg:rounded-full  lg:pr-6 lg:pl-12 lg:py-4 lg:h-auto lg:translate-y-0 lg:bg-white lg:justify-end lg:w-fit lg:items-center`}
    >
      {navItems.map((navItem, index) => (
        <Link
          key={index}
          className="px-6 my-6 text-gray-200 w-fit text-2xl transition-all duration-600 hover:bg-[#10101A] hover:text-gray-400 lg:p-0 lg:text-xl lg:text-gray-700 lg:hover:bg-transparent lg:font-semibold lg:my-0"
        >
          {navItem}
        </Link>
      ))}
    </nav>
  );
};

Nav.propTypes = {
  navActive: PropTypes.bool,
};

export default Nav;
