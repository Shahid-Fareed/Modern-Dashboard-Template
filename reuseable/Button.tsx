
// components/Button.tsx

import Link from '@/node_modules/next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  buttonTag?: 'button' | 'link';
  buttonType?: 'button' | 'submit';
  buttonLink?: string;
  buttonClass?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  buttonTag,
  buttonType,
  buttonLink,
  buttonClass,
}: ButtonProps) => {
  return (
    <>
      {buttonTag === 'button' ? (
        <button type={buttonType ? buttonType : 'button'} className={buttonClass ? buttonClass : ''}>
          {children}
        </button>
      ) : (
        <Link href={buttonLink ? buttonLink : '#'}>
          <a className={buttonClass ? buttonClass : ''}>{children}</a>
        </Link>
      )}
    </>
  );
};

export default Button;

