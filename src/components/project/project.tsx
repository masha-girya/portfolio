/* eslint-disable max-len */
import React, { useMemo } from 'react';
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

  const descriptionToShow = useMemo(() => {
    const index = description.indexOf('.');
    const newDescription = [
      description.slice(0, index),
      description.slice(index + 1),
    ];

    return newDescription;
  }, []);

  return (
    <div className="project">
      <div className="project__box project__box--border" />

      <article className="project__box">
        <h1 className="project__title">{name}</h1>

        <h4 className="project__description">
          {descriptionToShow[0]}
          <br />
          {descriptionToShow[1]}
        </h4>

        <div>
          <h4 className="project__description">
            {parts}
          </h4>

          <h4 className="project__description">
            {time}
          </h4>
        </div>
      </article>

      <div className="project__tech">
        <Technologies technologies={technologies} />

        <div className="project__links">
          <a
            className="project__link"
            href={linkWeb}
            target="_blank"
            rel="noreferrer"
          >
            <span>Visit WebPage</span>
            <span className="project__link--underline" />
          </a>

          <a
            className="project__link"
            href={linkGit}
            target="_blank"
            rel="noreferrer"
          >
            <span>Github</span>
            <span className="project__link--underline" />
          </a>
        </div>
      </div>
    </div>
  );
};
