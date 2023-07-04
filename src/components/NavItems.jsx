import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const NavItems = ({ navItem, setNavActive }) => {
  return (
    <div className="flex w-full items-center justify-center h-screen  lg:w-fit">
     
      <Link
        onClick={() => setNavActive(false)}
        className="text-gray-100 w-fit text-2xl transition-all duration-900 ease-in-out hover:text-gray-400 lg:text-lg lg:text-gray-400 lg:hover:bg-transparent lg:my-0 lg:hover:border-b-2 border-indigo-600 lg:hover:text-indigo-600 lg:hover:pb-4 lg:w-fit"
      >
        {navItem}
      </Link>
    </div>
  );
};

NavItems.propTypes = {
  navItem: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  setNavActive: PropTypes.func.isRequired,
};

export default NavItems;
