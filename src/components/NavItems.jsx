import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const NavItems = ({ navItem, setNavActive }) => {

  return (
    <div className="flex w-full justify-center items-center space-x-2 lg:w-fit ">
      <div
        className={` w-14 bg-white p-1 rounded-full flex items-center justify-center lg:w-10`}
      >
        <img src={navItem.icon} alt="" className="w-10" />
      </div>
      <Link
        onClick={() => setNavActive(false)}
        className="my-6 text-gray-200 w-fit text-2xl transition-all duration-600 hover:bg-[#10101A] hover:text-gray-400 lg:p-0 lg:text-xl lg:text-gray-700 lg:hover:bg-transparent lg:font-semibold lg:my-0"
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
