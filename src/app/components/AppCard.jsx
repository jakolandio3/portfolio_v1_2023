import { HiAcademicCap } from 'react-icons/hi2';
import Button from './Button';
import Image from 'next/image';

function AppCard() {
	return (
		<div
			className='bg-gray-800 rounded-3xl opacity-70 hover:opacity-100 hover:shadow-[0px_0px_150px_rgba(255,0,0,0.25),-50px_0px_150px_rgba(0,0,255,0.25),50px_0px_150px_rgba(255,255,0,0.25)] hover:blur-0 
   px-5 pt-5 pb-0.5 border-gray-500 border border-solid flex flex-row transition-all duration-500 ease-in-out max-w-[80vw]'
		>
			<div className='w-lg h-[70vh] mr-5'>
				<div className=' border-gray-500 rounded-md bg-gray-400 max-w-fit p-1 shadow-inner shadow-gray-950 mb-2'>
					<HiAcademicCap />
				</div>
				<h1 className='text-white text-3xl font-bold'>App-managment</h1>
				<p className=' text-white opacity-40 pt-2 pb-[150px]'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias nisi
					corporis, voluptatum officiis voluptatibus animi dolore, beatae sint
					reprehenderit at enim nulla libero hic laudantium dignissimos
					architecto! Dolor possimus a aperiam inventore quidem obcaecati dolore
					quaerat repellat fuga velit, similique quae fugit maiores suscipit
					dolorum, porro fugiat, sunt laudantium pariatur!
				</p>
				<div className='mb-8'>
					<Button>Download App &rarr;</Button>
				</div>
			</div>
			<div className=' w-full relative min-w-[200px]'>
				<Image
					className='rounded-t-xl -scale-x-100'
					fill={true}
					objectFit='cover'
					Position='fixed'
					src='/rishabh-malhotra-83ypHTv6J2M-unsplash.png'
					alt='Phone'
				/>
			</div>
		</div>
	);
}

export default AppCard;
