import menuBtn from '../images/icon-menu.svg';
import { PropTypes } from 'prop-types';

import Logo from './Logo';
import Nav from './Nav';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Header = ({ navActive, setNavActive }) => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const threshold = 300;
  const containerVariant = {
    start: {
      y: '-100%',
      transition: {
        // type: "spring",
        delay: 0.4,
        duration: 0.5,
        stiffness: 200,
        dampness: 50,
      },
    },
    end: {
      y: 0,
      transition: {
        // type: "spring",
        delay: 0.4,
        duration: 0.5,
        stiffness: 200,
        dampness: 50,
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      const isScrollingUp =
        currentScrollPos < window.prevScrollY || currentScrollPos < threshold;
      const isScrollingDown =
        currentScrollPos > window.prevScrollY && currentScrollPos > threshold;

      if (isScrollingUp) {
        setIsScrolledDown(false);
      } else if (isScrollingDown) {
        setIsScrolledDown(true);
      }

      window.prevScrollY = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      variants={containerVariant}
      initial='start'
      animate={isScrolledDown ? 'start' : 'end'}
      className={`px-6 z-10 bg-black/50 fixed top-0 left-0 right-0 mx-auto w-full py-3 flex justify-between items-center w-full lg:pr-0 md:px-16 xl:px-28`}>
      <div className=''>
        <Logo />
      </div>
      <Nav navActive={navActive} setNavActive={setNavActive} />
      {/* hamburger menu */}
      <img
        src={menuBtn}
        alt='menu button'
        className={` ${
          navActive ? 'rotate-90' : 'rotate-0'
        } rounded cursor-pointer transition-transform duration-300 z-20 lg:hidden self-center`}
        onClick={() => {
          setNavActive(!navActive);
        }}
      />
    </motion.header>
  );
};

Header.propTypes = {
  navActive: PropTypes.bool,
  setNavActive: PropTypes.func.isRequired,
};

export default Header;
