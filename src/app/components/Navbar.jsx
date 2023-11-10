import NavIcons from './NavIcons';
import NavbarLinks from './NavbarLinks';

function Navbar() {
	return (
		<header className='text-white text-lg grid grid-flow-col justify-between opacity-75 bg-transparent w-[80%] mt-5 justify-self-center self-center text-center rounded-lg ring-black-400 ring-2 pt-2 ring-offset-4'>
			<NavbarLinks />
			<NavIcons />
		</header>
	);
}

export default Navbar;
