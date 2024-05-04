/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const ButtonCta = ({ text, link, backgroundColor }) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3, ease: 'backInOut', stiffness: 500 }}
      className={`w-fit py-2 px-4 border rounded-full font-Poppins md:mx-auto ${backgroundColor} `}>
      <Link to={link} className='text-gray-300 font-Poppins'>
        {text}
      </Link>
    </motion.div>
  );
};

ButtonCta.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default ButtonCta;
