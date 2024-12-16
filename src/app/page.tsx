'use client';

import { useState, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';

function AnimatedNumberReactSpring({ value }: { value: number }) {
  const props = useSpring({
    from: { number: 0 },
    to: { number: value },
    config: { tension: 200, friction: 20 },
  });
  return <animated.span>{props.number.to((n) => n.toFixed(0))}</animated.span>;
}

function App() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const newNum = (Math.random() * 100).toFixed();
      setNum(parseInt(newNum));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <span>{num}</span>
      <AnimatedNumberReactSpring value={num} />
    </div>
  );
}

export default App;
