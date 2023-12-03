/* eslint-disable max-len */
import { IProject } from '../../types';
import { Technologies } from '../technologies';
import './project.scss';

interface IProps {
  project: IProject,
}

export const Project = ({ project }: IProps) => {
  const {
    name,
    description,
    parts,
    time,
    linkWeb,
    linkGit,
    technologies,
  } = project;

  return (
    <div className="project">
      <div className="project__static">
        <article className="project__box">
          <h3 className="project__title">{name}</h3>

          <div className="project__descriptionList">
            {description.map(desc => (
              <h4 key={desc} className="project__descriptionList__part">
                {desc}
              </h4>
            ))}
          </div>

          <div>
            {parts.split('.').map(part => (
              <h4 key={part} className="project__description">
                {part}
              </h4>
            ))}
            <h4 className="project__description">
              {time}
            </h4>
          </div>
        </article>

        <div className="project__tech">
          <Technologies technologies={technologies} />

          <div className="project__links">
            {linkWeb.length > 0 && (
              <a
                className="project__link"
                href={linkWeb}
                target="_blank"
                rel="noreferrer"
              >
                <span>Visit WebPage</span>
                <span className="project__link--underline" />
              </a>
            )}

            {linkGit.length > 0 && (
              <a
                className="project__link"
                href={linkGit}
                target="_blank"
                rel="noreferrer"
              >
                <span>Github</span>
                <span className="project__link--underline" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
