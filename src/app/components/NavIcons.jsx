import Link from 'next/link';
import { HiAcademicCap } from 'react-icons/hi2';
import {
	SiGithub,
	SiLinkedin,
	SiSpotlight,
	SiVisualstudiocode,
} from 'react-icons/si';
import Button from './Button';
function NavIcons() {
	return (
		<div className='px-2 justify-between flex gap-4 text-sm'>
			<Link href={'/'}>
				<HiAcademicCap />
			</Link>
			<Link href={'/'}>
				<SiGithub />
			</Link>
			<Link href={'/'}>
				<SiVisualstudiocode />
			</Link>
			<Link href={'/'}>
				<SiLinkedin />
			</Link>
			|
			<Button>
				<SiSpotlight />
			</Button>
		</div>
	);
}

export default NavIcons;
