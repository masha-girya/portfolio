import { LinkButton } from '../../link-button';
import { Technologies } from '../../technologies';
import './links-and-techs.scss';

interface IProps {
  isTouchableDevice: boolean;
  setIsImageOnShow: (isImageOnShow: boolean) => void;
  isImageOnShow: boolean;
  technologies: readonly string[];
  linkWeb: string;
  linkGit: string;
}

export const LinksAndTechs = (props: IProps) => {
  const {
    isTouchableDevice,
    setIsImageOnShow,
    isImageOnShow,
    technologies,
    linkWeb,
    linkGit,
  } = props;

  return (
    <div className="linksAndTechs">
      <div className="linksAndTechs__tech">
        <h2 className="linksAndTechs__tech__title">
          {isTouchableDevice
            ? (
              <button
                className="linksAndTechs__tech__title_image"
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

      <div className="linksAndTechs__links">
        {linkWeb.length > 0 && (
          <LinkButton linkPath={linkWeb} title="Visit WebPage" />
        )}

        {linkGit.length > 0 && (
          <LinkButton linkPath={linkGit} title="Github" />
        )}
      </div>
    </div>
  );
};
