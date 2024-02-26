import classNames from 'classnames';
import './marquee.scss';

interface IProps {
  text: string;
  isUpsideDown?: boolean;
  isTop?: boolean;
}

export const Marquee = (props: IProps) => {
  const { text, isUpsideDown, isTop } = props;

  return (
    <div
      className={classNames('marqueeWrapper', {
        marqueeWrapper_upsideDown: isUpsideDown,
      })}
    >
      {Array(2)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className={classNames(
              'marqueeWrapper__marquee',
              [`marqueeWrapper__marquee_${index + 1}`],
              {
                marqueeWrapper__marquee_isTop: isTop,
                [`marqueeWrapper__marquee_isTop_${index + 1}`]: isTop,
              },
            )}
          >
            <span>
              {text}
              &nbsp;&nbsp;&nbsp;
            </span>
          </div>
        ))}
    </div>
  );
};
