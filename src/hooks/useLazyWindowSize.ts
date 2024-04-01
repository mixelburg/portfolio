import { getSize, useWindowSize } from '@/hooks/useWindowSize';
import { useEffect, useState } from 'react';


export const useLazyWindowSize = (delay: number = 100) => {
  const [size, setSize] = useState(getSize());

  const windowSize = useWindowSize();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSize(windowSize);
    }, delay);

    return () => clearTimeout(timeout);
  }, [windowSize]);

  return size;
};