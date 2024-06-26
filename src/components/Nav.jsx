/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import NavItems from './NavItems';

const Nav = ({ navActive, setNavActive }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const navVariants = isDesktop
    ? {
        open: {
          y: 0,
        },
        closed: {
          y: 0,
          x: 0,
        },
      }
    : {
        open: {
          y: 0,
          transition: {
            when: 'beforeChildren',
            duration: 0.5,
            staggerChildren: 0.2,
            // type: "spring"
          },
        },
        closed: {
          y: '-110%',
          transition: {
            when: 'afterChildren',
            duration: 0.5,
            staggerChildren: 0.05,
          },
        },
      };

  const navItemsVariants = isDesktop
    ? {
        open: {
          opacity: 1,
          x: 0,
        },
        closed: {
          opacity: 1,
          x: 0,
        },
      }
    : {
        open: {
          opacity: [0, 0.1, 0.3, 0.5, 0.8, 1],
          // x : 0
        },

        closed: {
          opacity: 0,

          // x: "100%"
        },
      };

  const navItems = [
    { text: 'Home', link: '/' },
    { text: 'Gallery', link: 'projects' },
    { text: 'About me', link: 'about' },
    { text: 'Get in touch', link: 'contact' },
  ];

  return (
    <motion.nav
      animate={navActive ? 'open' : 'closed'}
      variants={navVariants}
      initial={false}
      className={`flex flex-col absolute justify-center items-center left-0 top-0 right-0 mx-auto bg-hero-bg w-full h-screen z-20  lg:justify-right lg:relative lg:flex-row lg:shadow-none lg:pr-16 lg:py-0 lg:h-auto lg:bg-transparent lg:w-fit lg:items-center lg:space-y-0 lg:space-x-6 lg:mx-0 lg:border-none xl:pr-0`}>
      {/* iterate over navItems and display each nav and icon */}
      {navItems.map((navItem, index) => (
        <motion.div key={index} variants={navItemsVariants} className='w-full lg:w-fit'>
          <NavItems setNavActive={setNavActive} navItem={navItem} />
        </motion.div>
      ))}
    </motion.nav>
  );
};

export default Nav;
