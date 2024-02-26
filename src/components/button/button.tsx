import './button.scss';

interface IProps {
  link: string;
  title: string;
  target?: string;
}

export const Button = (props: IProps) => {
  const { link, title, target = '_self' } = props;

  return (
    <a
      href={link}
      className="fancy"
      target={target}
      rel="noopener noreferrer"
    >
      <button className="button" type="button">
        {title}
      </button>
    </a>
  );
};
