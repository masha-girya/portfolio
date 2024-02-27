import './link-button.scss';

interface IProps {
  title: string;
  linkPath: string;
}

export const LinkButton = (props: IProps) => {
  const { title, linkPath } = props;

  return (
    <a
      className="linkButton"
      href={linkPath}
      target="_blank"
      rel="noreferrer"
    >
      <span>{title}</span>
      <span className="linkButton__underline" />
    </a>
  );
};
