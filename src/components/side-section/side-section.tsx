import { Icon, TIcon } from 'components';
import { SOCIAL_CONSTANTS as SOCIAL } from 'app-constants';
import './side-section.scss';

interface IProps {
  isFooter?: boolean,
}

export const SideSection = ({ isFooter }: IProps) => {
  return (
    <section className={isFooter
      ? 'contacts contacts--footer'
      : 'contacts'}
    >
      {Object.keys(SOCIAL).map(link => (
        <a
          href={link === 'GMAIL'
            ? `mailto:${SOCIAL[link]}`
            : SOCIAL[link as keyof typeof SOCIAL]}
          target="_blank"
          rel="noreferrer"
          key={link}
          title={link}
          className={isFooter
            ? 'contacts__link contacts--footer__link'
            : 'contacts__link'}
        >
          <Icon type={link.toLowerCase() as TIcon} />
        </a>
      ))}
    </section>
  );
};
