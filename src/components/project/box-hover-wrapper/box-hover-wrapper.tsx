import { Link } from 'react-router-dom';

interface IProps {
  isTouchableDevice: boolean;
  children: React.ReactNode;
  linkWeb: string;
}

export const BoxHoverWrapper = (props: IProps) => {
  const { isTouchableDevice, children, linkWeb } = props;

  if (!isTouchableDevice) {
    return (
      <Link
        to={linkWeb}
        target="_blank"
        rel="no-referer"
      >
        {children}
      </Link>
    );
  }

  return (
    <div>
      {children}
    </div>
  );
};
