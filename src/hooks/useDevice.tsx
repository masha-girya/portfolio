import { useEffect, useState } from 'react';

export const useDevice = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isBigDesktop, setIsBigDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 490);
      setIsTablet(window.innerWidth >= 490 && window.innerWidth < 769);
      setIsDesktop(window.innerWidth >= 769 && window.innerWidth < 1839);
      setIsBigDesktop(window.innerWidth >= 1839);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
    isBigDesktop,
  };
};
