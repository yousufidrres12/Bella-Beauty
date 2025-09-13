import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number; // in ms
}

const AnimatedCounter = ({ end, duration = 1500 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    function update() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        ref.current = setTimeout(update, 16);
      } else {
        setCount(end);
      }
    }
    update();
    return () => {
      if (ref.current) clearTimeout(ref.current);
    };
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

export default AnimatedCounter;
