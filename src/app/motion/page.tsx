'use client';
import { motion } from 'framer-motion';

const Motion = () => {
  return (
    <>
      <div className="flex justify-center items-center mx-auto text-center">
        <motion.div
          animate={{
            scale: 2,
            transition: {
              duration: 2,
            },
          }}
          drag="x"
          className="px-4 py-2 rounded-md bg-blue-400 w-[200px]"
        >
          {'HELLO'}
        </motion.div>
      </div>
    </>
  );
};

export default Motion;
