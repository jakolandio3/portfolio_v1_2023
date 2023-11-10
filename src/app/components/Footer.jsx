import { HiCake } from 'react-icons/hi2';

function Footer({ children }) {
	return (
		<footer className='bg-transparent text-white flex justify-around border-t-red-500 border-dashed border-t-2'>
			<div className='flex justify-center gap-4'>
				<ul>
					<HiCake />
					<p>Thanks for eating cake</p>
					<p className='mt-[60px]'>&copy; Jakob Douglas 2023</p>
				</ul>
			</div>
			<div className='flex justify-center gap-4 mb-[20px]'>
				<ul>
					{' '}
					Links
					<li>about</li>
					<li>wokr</li>
					<li>tech stack</li>
					<li>contact</li>
				</ul>
				<ul>
					{' '}
					Elsewhere
					<li>email</li>
					<li>Linkedin</li>
					<li>github</li>
					<li>twitter</li>
					<li>discord</li>
				</ul>
			</div>
			{children}
		</footer>
	);
}

export default Footer;
