import { MAIN_TITLE_CONSTANT } from '../../app-constants';
import './header.scss';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__box">
        <h1 className="header__title">Hi, I am Maria Girya!</h1>
        <h5 className="header__subtitle">
          {MAIN_TITLE_CONSTANT[0]}
        </h5>
        <h5 className="header__subtitle">
          {MAIN_TITLE_CONSTANT[1]}
        </h5>
      </div>
      <div className="links">
        <a href="#portfolio" className="button--link">
          <button className="button" type="button">
            Portfolio
          </button>
        </a>
        <a
          // eslint-disable-next-line max-len
          href="https://drive.google.com/file/d/1IhTa-_ESST9T4BISmK8Z48nJtCSXBUY6/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="button button--resume"
            type="button"
          >
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};
