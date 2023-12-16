import { Project } from '../project';
import { PROJECTS_CONSTANTS as PROJECTS } from '../../app-constants';
import './portfolio-list.scss';

export const PortfolioList = () => {
  return (
    <main className="portfolio-list" id="portfolio">
      <div className="portfolio-list__projects">
        {PROJECTS.map(project => (
          <Project project={project} key={project.name} />
        ))}
      </div>
    </main>
  );
};
