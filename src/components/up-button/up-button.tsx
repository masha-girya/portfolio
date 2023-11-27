import { useCallback } from 'react';
import { Icon } from '../icon';
import './up-button.scss';

export const UpButton = () => {
  const handleClick = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <button
      type="button"
      className="up-button"
      onClick={handleClick}
    >
      <Icon type="arrow" />
    </button>
  );
};
