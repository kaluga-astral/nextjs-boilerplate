import NextLink from 'next/link';
import { ReactElement } from 'react';
import { forwardRef } from 'react';

export type LinkProps = {
  className?: string;
  to: string;
  children: ReactElement;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { className, to, children } = props;

  return (
    <NextLink href={to} passHref ref={ref} className={className}>
      {children}
    </NextLink>
  );
});
