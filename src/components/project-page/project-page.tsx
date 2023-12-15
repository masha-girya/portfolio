/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { SideSection } from '../side-section';
import { PROJECTS_CONSTANTS } from '../../app-constants';
import './project-page.scss';

export const ProjectPage = () => {
  const { projectSlug } = useParams();
  const [project, setProject] = useState<
    typeof PROJECTS_CONSTANTS[0] | null
  >(null);

  useEffect(() => {
    // eslint-disable-next-line max-len
    const projectData = PROJECTS_CONSTANTS.find(item => item.slug === projectSlug);

    console.log(projectSlug);

    if (projectData) {
      setProject(projectData);
      console.log(project);
    }
  }, [projectSlug]);

  return (
    <div className="project-page">
      <div className="project-page__sideBg" />
      <SideSection />
      {project && (
        <div className="project-page__container">
          <h1 className="project-page__name">{project.name}</h1>
          <Swiper navigation modules={[Navigation]} className="swiper">
            {/* {project.gif.map(gif => (
              <SwiperSlide
                key={gif.title}
                className="swiper__slide"
              >
                <img src={gif.gif} alt={gif.title} />
              </SwiperSlide>
            ))} */}
          </Swiper>
        </div>
      )}
    </div>
  );
};
