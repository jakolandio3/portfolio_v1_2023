import { HiAcademicCap } from 'react-icons/hi2';

import Image from 'next/image';

function AppCard() {
	return (
		<div
			className='bg-gray-800 rounded-3xl opacity-70 hover:opacity-100 hover:blur-0
   px-5 pt-5 pb-0.5 border-gray-500 border border-solid flex flex-col transition-all duration-500 ease-in-out hover:shadow-[0px_0px_150px_rgba(255,0,0,0.25),-50px_0px_150px_rgba(0,0,255,0.25),50px_0px_150px_rgba(255,255,0,0.25)] max-h-[75vh] max-w-[50vw]'
		>
			<div className=' max-w-full max-h-fit text-center content-center justify-center'>
				<h1 className='text-white text-3xl font-bold pb-5 pt-5'>About me</h1>
				<p className=' text-white opacity-40 pt-1 pb-10'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias nisi
				</p>
			</div>

			<div className='h-[500px] relative'>
				<Image
					className='rounded-t-2xl -scale-x-100 '
					fill={true}
					objectFit='cover'
					Position='absolute'
					src='/rishabh-malhotra-83ypHTv6J2M-unsplash.png'
					alt='Phone'
				/>
			</div>
		</div>
	);
}

export default AppCard;
