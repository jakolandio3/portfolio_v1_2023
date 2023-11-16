import { HiCake } from 'react-icons/hi2';
import Button from './Button';

function Footer({ children }) {
	return (
		<footer className=' text-white flex justify-around border-t-gray-500 border-dashed border-t-2 mt-20 border-opacity-20 pt-8'>
			<div className='flex flex-col justify-between z-10 mb-4'>
				<ul>
					<div className='w-[50px] h-[50px] content-center justify-center flex align-middle text-center items-center border  to-[rgba(167,202,11,0.3)] from-[rgba(0,0,255,0.3)] via-[rgba(190,10,10,0.3)] bg-gradient-to-r rounded-t-2xl opacity-100 '>
						<HiCake />
					</div>

					<p className=' opacity-30 font-extralight text-xs mt-4'>
						Thanks for eating cake
					</p>
				</ul>
				<p className=' opacity-30 font-extralight text-xs'>
					&copy; 2023 Jakob Douglas. All Rights Reserved
				</p>
			</div>
			<div className='flex justify-center gap-20 mb-[20px]'>
				<ul>
					<h1 className='font-extrabold mb-4'>Links</h1>
					<div className=' opacity-30 font-extralight'>
						{' '}
						<li>About</li>
						<li>Work</li>
						<li>Tech Stack</li>
						<li>Contact</li>{' '}
					</div>
				</ul>
				<ul>
					<h1 className='font-extrabold mb-4'>Elsewhere</h1>
					<div className=' opacity-30 font-extralight'>
						{' '}
						<li>Email</li>
						<li>LinkedIn</li>
						<li>GitHub</li>
						<li>Twitter</li> <li>Discord</li>{' '}
					</div>
				</ul>
			</div>
			<div className='w-[80%] to-yellow-500 from-[rgba(0,0,255,0.5)] via-red-500 bg-gradient-to-r rounded-t-full h-[100px] absolute opacity-40 blur-3xl -z-10'></div>

			{children}
		</footer>
	);
}

export default Footer;
