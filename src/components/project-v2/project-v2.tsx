import { Link } from 'react-router-dom';
import { IProject } from '../../types';
import './project-v2.scss';

interface IProps {
  project: IProject,
}

export const ProjectV2 = ({ project }: IProps) => {
  const {
    name,
    slug,
    linkWeb,
    background,
  } = project;

  return (
    <div className="project-v2">
      <img className="project-v2__background" src={background} alt={name} />
      <h3 className="project-v2__title">{name}</h3>
      <div className="project-v2__links">
        <button type="button" className="project-v2__links__details">
          <Link
            className="project-v2__links__link"
            to={`/portfolio/${slug}`}
            // rel="noreferrer"
          >
            <span>View details</span>
            <span className="project-v2__links__link--underline" />
          </Link>
        </button>
        <button type="button" className="project-v2__links__web">
          <Link
            className="project-v2__links__link"
            to={linkWeb}
            target="_blank"
            rel="noreferrer"
          >
            <span>Visit website</span>
            <span className="project-v2__links__link--underline" />
          </Link>
        </button>
      </div>
    </div>
  );
};
