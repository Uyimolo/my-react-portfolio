import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const ButtonCta = ({ text, link }) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: [1, 1.1, 1, 1.2] }}
      transition={{ duration: 0.8, type: "spring", stiffness: 500 }}
      className="md:mx-auto w-fit py-2 px-4 border rounded-full"
    >
      <Link to={link} className="text-gray-300">
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
