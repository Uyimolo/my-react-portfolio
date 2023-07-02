import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const NavItems = ({ navItem, setNavActive }) => {

  return (
    <div className="flex w-full justify-center items-center space-x-1 lg:w-fit ">
      {/*nav icon */}
      <div
        className={` w-14 lg:w-10`}
      >
        <img src={navItem.icon} alt="" className="w-10" />
      </div>
      {/*nav text */}
      <Link
        onClick={() => setNavActive(false)}
        className="my-6 text-gray-100 w-fit text-2xl transition-all duration-600 hover:text-gray-400 lg:text-xl lg:text-gray-400 lg:hover:bg-transparent lg:font-semibold lg:my-0 lg:hover:border-b-2 border-gray-400 lg:hover:pb-4 lg:w-fit"
      >
        {navItem.text}
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
