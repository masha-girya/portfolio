import React from 'react';
import './technologies.scss';

interface IProps {
  technologies: readonly string[],
}

export const Technologies = ({ technologies }: IProps) => {
  return (
    <div className="technology">
      {technologies.map(tech => (
        <div key={tech} className="technology__item">
          {tech}
        </div>
      ))}
    </div>
  );
};
