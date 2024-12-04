import clsx from 'clsx';
import { Route } from 'next';
import Link from 'next/link';

function Button({
  children,
  size,
  href = '/',
  newTab,
  scroll = false,
  className
}: ButtonProps) {
  return (
    <Link
      scroll={scroll}
      href={href}
      target={newTab ? '_blank' : undefined}
      className={clsx(
        'block rounded-lg border border-button-text bg-button-bg font-bold text-button-text shadow-inner hover:text-black hover:shadow-gray-600',
        size === 'sm' ? 'p-1' : 'p-3',
        className ?? ''
      )}
    >
      {' '}
      <h1 className={clsx('', size === 'sm' && 'text-xs')}>{children}</h1>
    </Link>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  size?: 'sm' | 'md';
  href?: Route<string> | URL;
  newTab?: boolean;
  scroll?: boolean;
  className?: string;
}

export default Button;
