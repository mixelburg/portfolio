import {useEffect, useState} from 'react';

export const getSize = () => ({
  width: window?.innerWidth || 0,
  height: window?.innerHeight,
});
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };

    window?.addEventListener('resize', handleResize);
    return () => window?.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};