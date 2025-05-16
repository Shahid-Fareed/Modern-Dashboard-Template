// components/IconWidthText.tsx

import Link from 'next/link';
import { ReactNode, MouseEvent } from 'react';

interface IconWidthTextProps {
  icon: ReactNode;
  iconClass?: string;
  title: string;
  titleClass?: string;
  link?: string;
  linkClass?: string;
  event?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const IconWidthText: React.FC<IconWidthTextProps> = ({
  icon,
  iconClass,
  title,
  titleClass,
  link,
  linkClass,
  event,
}: IconWidthTextProps) => {
  return (
    <>
      <Link href={link ? link : undefined}>
        <a className={linkClass ? linkClass : undefined} onClick={event ? event : undefined}>
          {/* Icon */}
          <span className={iconClass ? iconClass : undefined}>{icon && icon}</span>

          {/* Title */}
          <span className={titleClass ? titleClass : undefined}>{title && title}</span>
        </a>
      </Link>
    </>
  );
};

export default IconWidthText;

