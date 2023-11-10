import Link from 'next/link';

function NavbarLinks() {
	return (
		<div className='px-2 justify-between flex-auto flex gap-4 justify-items-center align-middle'>
			<Link href={'/'}>Home</Link>
			<Link href={'/'}>Work</Link>
			<Link href={'/'}>Contact</Link>
			<Link href={'/'}>More &darr;</Link>
		</div>
	);
}

export default NavbarLinks;
