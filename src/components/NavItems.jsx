/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const NavItems = ({ navItem, setNavActive }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 200, velocity: 2 }}
      className='flex w-full  items-center justify-center lg:w-fit'>
      <NavLink
        onClick={() => setNavActive(false)}
        to={navItem.link}
        className={`text-blue-200 p-2 rounded font-Lobster  w-fit text-6xl md:text-7xl transition-all duration-900 ease-in-out lg:font-Poppins lg:text-indigo-400 lg:text-lg lg:hover:bg-transparent lg:my-0 lg:w-fit`}
        style={({ isActive }) => {
          return {
            color: isActive && 'white',
            backgroundColor: isActive && isDesktop && 'black',
          };
        }}>
        {navItem.text}
      </NavLink>
    </motion.div>
  );
};

export default NavItems;
