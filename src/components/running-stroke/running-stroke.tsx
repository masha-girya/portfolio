import classNames from 'classnames';
import { Marquee } from '../marquee';
import './running-stroke.scss';

export const RunningStroke = () => {
  const marqueeText =
    'Typescript React Next Material UI Swiper SCSS React Transition Group HTML ESLint Beautiful dnd Nest PostgreSQL Firebase Vercel SQL TypeORM Node';

  return (
    <div className={classNames('absoluteContainer')}>
      {/* <Marquee text={marqueeText} isUpsideDown isTop /> */}
      <div className={classNames('marqContainer')}>
        <Marquee text={marqueeText} />
      </div>
    </div>
  );
};
