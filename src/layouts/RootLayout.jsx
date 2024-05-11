import { Outlet, useLocation } from 'react-router';
import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Header from '../components/Header';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const RootLayout = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [navActive, setNavActive] = useState(false);
  const bodyRef = useRef();
  const location = useLocation();

  // const x = useMotionValue(0);
  // const y = useMotionValue(0);

  // const springConfig = { damping: 20, stiffness: 200 };

  // const springX = useSpring(x, springConfig);
  // const springY = useSpring(y, springConfig);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    // if (isDesktop) {
    //   x.set(100);
    //   y.set(6);
    // }
  }, [
    location,
    isDesktop,
    // x, y
  ]);

  // const handleMouseMove = (event) => {
  //   if (isDesktop) {
  //     const newX = event.clientX - 10;
  //     const newY = event.clientY - 20;

  //     // Update motion values
  //     x.set(newX);
  //     y.set(newY);
  //   }
  // };

  return (
    <div className=''>
      <div
        ref={bodyRef}
        // onMouseMove={handleMouseMove}
        className={`overflow-hidden ${
          navActive ? 'w-screen h-screen' : 'w-full min-h-screen xl:mx-auto'
        }`}>
        <Header navActive={navActive} setNavActive={setNavActive} />
        {/* {isDesktop && (
          <motion.div
            animate={{ scale: [0.5, 1, 0.5] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: 'easeInOut',
            }}
            style={{
              position: 'fixed',
              x: springX,
              y: springY,
            }}
            className={`z-30 w-4 h-4 border border-indigo-600 rounded-full`}></motion.div>
        )} */}
        <>
          <Outlet />
        </>
        <footer className=' px-6 py-6 bg-black space-x-6 flex justify-between items-center md:px-16 xl:px-28'>
          <div className=''>
            <Logo />
          </div>
          <div className='flex w-fit flex-wrap text-gray-300 justify-end lg:text-lg'>
            <Link
              to='https://github.com/uyimolo'
              className='pr-2 hover:text-indigo-600'>
              Github
            </Link>
            <Link
              to='https://facebook.com/uyimolo'
              className='pr-2 hover:text-indigo-600'>
              Facebook
            </Link>
            <Link
              to='https://instagram.com/uyidavidtommy'
              className='pr-2 hover:text-indigo-600'>
              Instagram
            </Link>
            <Link
              to='https://twitter.com/uyimolo247'
              className='pr-2 hover:text-indigo-600'>
              Twitter
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default RootLayout;
