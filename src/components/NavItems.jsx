/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavItems = ({ navItem, setNavActive }) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 200, velocity: 2 }}
      className='flex w-full  items-center justify-center lg:w-fit'>
      <NavLink
        onClick={() => setNavActive(false)}
        to={navItem.link}
        className={`text-hero-text p-4 rounded font-Lobster w-fit text-6xl md:text-7xl transition-all duration-900 ease-in-out lg:font-Poppins lg:p-2 lg:text-lg lg:text-white lg:my-0 lg:w-fit`}
        style={({ isActive }) => {
          return {
            backgroundColor: isActive && 'black',
          };
        }}>
        {navItem.text}
      </NavLink>
    </motion.div>
  );
};

export default NavItems;
