'use client';

import { useSpring, animated } from '@react-spring/web'; // animated를 import 해야 함
import { useState } from 'react';

const Page = () => {
  const [toggle, setToggle] = useState(false);

  const props = useSpring({
    from: { opacity: 0 }, // 초기 opacity는 0
    to: { opacity: 1 }, // 최종 opacity는 1
  });

  return (
    <div className="p-4 flex justify-center items-center text-center">
      <div onClick={() => setToggle(!toggle)} className="cursor-pointer ">
        <animated.div
          className="bg-blue-500 h-16 border border-black rounded-xl"
          style={props}
        >
          <animated.div className="text-white">
            {props.opacity.to((x) => x.toFixed(2))}
          </animated.div>
        </animated.div>
      </div>
    </div>
  );
};

export default Page;
