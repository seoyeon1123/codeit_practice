import { useScroll, animated } from '@react-spring/web';

const Scroll = () => {
  const { scrollX, scrollXProgress, scrollY, scrollYProgress } = useScroll();

  return (
    <>
      <div className="w-full h-[200px] flex justify-center items-center">
        <div className="flex flex-col space-y-6">
          <animated.span>{scrollY.to((v) => v.toFixed(0))}</animated.span>
          <animated.span>
            {scrollYProgress.to((v) => v.toFixed(0))}
          </animated.span>
        </div>
      </div>
    </>
  );
};

export default Scroll;
