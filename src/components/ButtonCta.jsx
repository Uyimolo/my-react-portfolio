/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ButtonCta = ({ text, link, backgroundColor }) => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3, ease: 'backInOut', stiffness: 500 }}
      className={`w-fit py-2 px-4 border rounded-full text-md font-Poppins ${backgroundColor} lg:text-lg `}>
      <Link to={link} className='text-gray-300 font-Poppins'>
        {text}
      </Link>
    </motion.button>
  );
};

export default ButtonCta;
