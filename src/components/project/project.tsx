/* eslint-disable max-len */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IProject } from '../../types';
import { Technologies } from '../technologies';
import './project.scss';
import { useDevice } from '../../hooks/useDevice';

interface IProps {
  project: IProject,
}

export const Project = ({ project }: IProps) => {
  const {
    name,
    description,
    background,
    parts,
    time,
    linkWeb,
    linkGit,
    technologies,
  } = project;
  const { isTablet, isMobile } = useDevice();
  const [isImageOnShow, setIsImageOnShow] = useState(false);

  return (
    <div className="project">
      <div className="project__static">
        <article className="project__box">
          <Link
            to={linkWeb}
            target="_blank"
            rel="no-referer"
            className="project__boxHover"
          >
            <img
              src={background}
              alt={name}
              className={isImageOnShow
                ? 'project__boxHover__image project__boxHover__image_active'
                : 'project__boxHover__image'}
            />
          </Link>
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

        <div className="project__rightCol">
          <div className="project__tech">
            <h2 className="project__tech__title">
              {(isTablet || isMobile)
                ? (
                  <button
                    className="project__tech__title_image"
                    type="button"
                    onClick={() => setIsImageOnShow(!isImageOnShow)}
                  >
                    <span>
                      ➔
                    </span>
                    show/hide image
                  </button>
                )
                : 'Technologies used:'}
            </h2>
            <Technologies technologies={technologies} />
          </div>

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
