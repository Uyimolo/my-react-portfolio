/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function PageDiv({children}) {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
      className='flex flex-col space-y-12 px-6 md:mt-6 md:px-16 xl:px-28'>
        {children}
      </motion.div>
  );
}
