import { HiAcademicCap } from 'react-icons/hi2';
import Button from './Button';
import Image from 'next/image';

function AppCard() {
	return (
		<div
			className='bg-gray-800 rounded-lg opacity-70 hover:opacity-100 hover:blur-0
   px-5 pt-5 border-gray-500 border border-solid flex flex-row transition-all duration-300'
		>
			<div className=' max-w-lg max-h-fit'>
				<div className=' border-gray-500 rounded-md bg-gray-400 max-w-fit p-1 shadow-inner shadow-gray-950 mb-2'>
					<HiAcademicCap />
				</div>
				<h1 className='text-white text-2xl font-bold'>App-managment</h1>
				<p className=' text-white opacity-40 pt-1 pb-[150px]'>
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
			<div className=' w-full relative'>
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
