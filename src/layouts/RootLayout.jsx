import { Outlet, useLocation } from 'react-router';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
const RootLayout = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [navActive, setNavActive] = useState(false);
  const bodyRef = useRef();

  const [x, setX] = useState(100);
  const [y, setY] = useState(0);
  const location = useLocation();

  const handleMouseMove = (event) => {
    if (isDesktop) {
      setX(event.clientX + 10);
      setY(event.clientY + 10);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
     if (isDesktop) {
       setX(100);
       setY(0);
     }
  }, [location, isDesktop]);
  // todo: use context to implement light and dark mode switches
  return (
    <div className='bg-slate-800'>
      <div
        ref={bodyRef}
        onMouseMove={handleMouseMove}
        className={`overflow-hidden ${
          navActive ? 'w-screen h-screen' : 'w-full min-h-screen xl:mx-auto'
        }`}>
        <Header navActive={navActive} setNavActive={setNavActive} />
    {isDesktop && <motion.div
          animate={{
            x: x + 10, 
            y: y + 10, 
            transition: { duration:1, ease: 'backInOut' },
          }}
          className='z-30'
          style={{
            position: 'fixed',

            width: 100,
            height: 100,
          }}>
          <Logo />
        </motion.div>}

        <>
          <Outlet />
        </>

        <footer className=' px-6 py-6 border-t border-gray-700 space-x-6 flex justify-between md:px-16 xl:px-28'>
          <Logo />
          <div className='flex flex-wrap text-gray-300 items-center md:max-w-xl  lg:text-lg'>
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
