import { SideSection } from '../side-section';
// import { ProjectV2 } from '../project-v2';
import { Footer } from '../footer';
import { UpButton } from '../up-button';
import {
  MAIN_TITLE_CONSTANT,
  PROJECTS_CONSTANTS as PROJECTS,
} from '../../app-constants';
import './main.scss';
import { Project } from '../project';
// import { ProjectV2 } from '../project-v2';

export const Main = () => {
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header-box">
          <h1 className="main__title">Hi, I am Maria Girya!</h1>
          <h5 className="main__subtitle">
            {MAIN_TITLE_CONSTANT[0]}
          </h5>
          <h5 className="main__subtitle">
            {MAIN_TITLE_CONSTANT[1]}
          </h5>
        </div>
        <div className="main__links">
          <a href="#portfolio" className="main__button--link">
            <button className="main__button" type="button">
              Portfolio
            </button>
          </a>
          <a
            // eslint-disable-next-line max-len
            href="https://drive.google.com/file/d/1IhTa-_ESST9T4BISmK8Z48nJtCSXBUY6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="main__button main__button--resume" type="button">
              Resume
            </button>
          </a>
        </div>
      </div>

      <SideSection />

      <main className="main__main" id="portfolio">
        <div className="main__main__projects">
          {PROJECTS.map(project => (
            // <Project key={project.name} project={project} />
            <Project project={project} key={project.name} />
          ))}
        </div>
      </main>

      <Footer />

      <UpButton />
    </div>
  );
};
