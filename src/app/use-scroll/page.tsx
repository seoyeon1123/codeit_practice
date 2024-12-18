'use client';

import { useScroll, animated } from '@react-spring/web';

const Scroll = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="w-full h-[2000px] flex justify-center items-center">
        <animated.div
          className="fixed w-full h-[100px] top-0"
          style={{
            backgroundImage: scrollYProgress.to(
              (progress) =>
                `linear-gradient(to right, rgba(255, 255, 0, 1) ${
                  progress * 100
                }%, rgba(255, 255, 0, 0) 0%)`
            ),
          }}
        />
      </div>
    </>
  );
};

export default Scroll;
