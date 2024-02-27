import { Button, RunningStroke, Title } from 'components';
import { MAIN_TITLE_CONSTANT, PROJECTS_LINKS_CONSTANTS } from 'app-constants';
import Avatar from './assets/Avatar.png';
import './header.scss';

export const Header = () => {

  return (
    <div className="header">
      {/* <img src={Avatar} alt="Avatar" className="header__avatar" /> */}
      <div className="header__avatar" />
      <div className="header__titleBox">
        <Title>
          <>
            <h1 className="header__title">Hi, I am Maria Girya!</h1>
            <h5 className="header__subtitle">{MAIN_TITLE_CONSTANT[0]}</h5>
            <h5 className="header__subtitle">{MAIN_TITLE_CONSTANT[1]}</h5>
          </>
        </Title>
      </div>

      <RunningStroke />

      <div className="links">
        <Button link="#portfolio" title="Portfolio" />
        <Button
          link={PROJECTS_LINKS_CONSTANTS.CV}
          title="Resume"
          target="_blank"
        />
      </div>
    </div>
  );
};
