import clsx from 'clsx';
import { HiCake } from 'react-icons/hi2';
import Link from 'next/link';

function LogoImg({ size }: { size?: 'sm' | 'md' }) {
  return (
    <Link
      href={'/'}
      className={clsx(
        'flex h-[50px] w-[50px] content-center items-center justify-center rounded-t-2xl border bg-gradient-to-r  from-[rgba(0,0,255,0.3)] via-[rgba(190,10,10,0.3)] to-[rgba(167,202,11,0.3)] text-center align-middle text-primary-text-color',
        size === 'sm' && 'h-[30px] w-[30px]'
      )}
    >
      <HiCake />
    </Link>
  );
}

export default LogoImg;
