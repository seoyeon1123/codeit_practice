'use client';
import { motion } from 'framer-motion';

const Motion = () => {
  //props으로 목표 숫자를 받는 컴포넌트
  //<motion.span></motion.span>을 리턴, 모션 컴포넌트 페이지 참조
  //useMotionValue, useSpring, useTransform 이용

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
