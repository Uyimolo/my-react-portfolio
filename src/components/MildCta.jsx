/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MildCta = ({ text, link, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='w-full'>
      <Link
        to={link}
        className={`text-gray-300 font-Poppins text-${color}  lg:text-lg`}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        {text}
      </Link>
      {/* div width increases when isHovered equals true */}
      <div
        className={`h-[2px] mt-2 bg-indigo-600 transition-all duration-700  ${
          isHovered ? 'w-full' : 'w-8'
        } `}></div>
    </div>
  );
};

export default MildCta;
