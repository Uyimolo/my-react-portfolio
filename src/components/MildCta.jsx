import { useState } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const MildCta = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-fit ">
      <Link
        to="works"
        className="text-gray-300 lg:text-lg"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
      </Link>
      <div
        className={`h-[2px] mt-2 bg-indigo-600 transition-all duration-700  ${
          isHovered ? "w-full" : "w-8"
        } `}
      ></div>
    </div>
  );
};

MildCta.propTypes = {
  text: PropTypes.string,
};

export default MildCta;
