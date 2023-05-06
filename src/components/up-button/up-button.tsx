import React, { useCallback } from 'react';
import './up-button.scss';

export const UpButton = () => {
  const handleClick = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <button
      type="button"
      className="up-button"
      onClick={handleClick}
    >
      <span className="uop-button__arrow">^</span>
    </button>
  );
};
