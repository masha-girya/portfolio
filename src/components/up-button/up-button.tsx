import React, { useCallback } from 'react';
import { Icon } from '../icon';
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
      <Icon type="arrow" />
    </button>
  );
};
