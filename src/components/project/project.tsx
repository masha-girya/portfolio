/* eslint-disable max-len */
import { Fragment, useEffect, useState } from 'react';
import classNames from 'classnames';
import { IProject } from 'types';
import { BoxHoverWrapper } from './box-hover-wrapper';
import { LinksAndTechs } from './links-and-techs';
import { useDevice } from 'hooks';
import './project.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface IProps {
  project: IProject;
}

export const Project = ({ project }: IProps) => {
  const {
    name,
    description,
    background,
    backgroundMob,
    parts,
    time,
    linkWeb,
    linkGit,
    technologies,
  } = project;
  const { isTablet, isMobile } = useDevice();
  const [isImageOnShow, setIsImageOnShow] = useState(false);

  useEffect(() => {
    const ease = 'expoScale(0.5,7,none)';
    const duration = 3;
    gsap.registerPlugin(ScrollTrigger);

    const boxes = gsap.utils.toArray('.project__box');
    const links = gsap.utils.toArray('.project__links');

    boxes.forEach((box: any) => {
      gsap.fromTo(
        box,
        {
          xPercent: -150,
          ease,
          duration,
        },
        {
          xPercent: 0,
          ease,
          duration,
          scrollTrigger: {
            trigger: box,
            scrub: true,
            start: 'top bottom',
            end: 'center center',
            toggleActions: 'play pause resume pause',
          },
        },
      );
    });

    links.forEach((box: any) => {
      gsap.fromTo(
        box,
        {
          xPercent: 150,
          ease,
          duration,
        },
        {
          xPercent: 0,
          ease,
          duration,
          scrollTrigger: {
            trigger: box,
            scrub: true,
            start: 'top bottom',
            end: 'center center',
            // toggleActions: 'restart pause resume pause',
          },
        },
      );
    });
  }, []);

  return (
    <div className="project">
      <article className="project__box">
        <BoxHoverWrapper
          isTouchableDevice={isMobile || isTablet}
          linkWeb={linkWeb}
        >
          <div className="project__box__boxHover">
            <img
              src={isMobile ? backgroundMob : background}
              alt={name}
              className={classNames('project__box__boxHover__image', {
                project__box__boxHover__image_active: isImageOnShow,
                project__box__boxHover__image_leftPosition:
                  name === 'IXNOME Web Application',
              })}
            />
          </div>
        </BoxHoverWrapper>
        <h3 className="project__title">{name}</h3>

        <div className="project__descriptionList">
          {description.map((desc) => (
            <h4 key={desc} className="project__descriptionList__part">
              {desc}
            </h4>
          ))}
        </div>

        <div>
          {parts.map((part, i) => (
            <h4 key={i} className="project__description">
              {part}
            </h4>
          ))}
          <h4 className="project__description">{time}</h4>
        </div>
      </article>

      <div className="project__links">
        <LinksAndTechs
          linkGit={linkGit}
          linkWeb={linkWeb}
          technologies={technologies}
          isTouchableDevice={isMobile || isTablet}
          isImageOnShow={isImageOnShow}
          setIsImageOnShow={setIsImageOnShow}
        />
      </div>
    </div>
  );
};
