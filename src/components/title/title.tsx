import { useCallback, useRef } from 'react';
import './title.scss';

interface IProps {
  children: React.ReactNode;
}

export const Title = ({ children }: IProps) => {
  const parentRef = useRef<any | null>(null);
  const titleRef = useRef<any | null>(null);

  const handleMouseMove = (e: any) => {
    if (parentRef.current && titleRef) {
      const { width, height, top, left } =
        parentRef.current.getBoundingClientRect();

      const { clientX, clientY } = e;
      const moveCoef = 0.2;

      const moveX = (clientX - left - width / 2) * moveCoef;
      const moveY = (clientY - top - height / 2) * moveCoef;

      titleRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    }
  };

  const handleMouseLeave = useCallback(() => {
    titleRef.current.style.transform = 'translate3d(0px, 0px, 0)';
  }, []);

  return (
    <div
      className="titleBlock"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={parentRef}
    >
      <div ref={titleRef} className="titleBlock__titleText">
        {children}
      </div>
    </div>
  );
};
