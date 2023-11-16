import { HiAcademicCap, HiOutlineStar, HiStar } from 'react-icons/hi2';
import Button from './Button';
import Image from 'next/image';

function NewProjectCard() {
	return (
		<div
			className='bg-transparent rounded-3xl opacity-70 hover:opacity-100 hover:shadow-[0px_0px_150px_rgba(255,0,0,0.25),-50px_0px_150px_rgba(0,0,255,0.25),50px_0px_150px_rgba(255,255,0,0.25)] hover:blur-0 
   px-5 pt-5 pb-0.5 border-gray-500 border border-dashed flex flex-col justify-center items-center text-center transition-all duration-500 ease-in-out'
		>
			<div className=' max-w-lg max-h-fit mr-5'>
				<div className='bg-transparent flex items-center justify-center text-white text-6xl mt-10 mb-4'>
					<HiOutlineStar />
				</div>
				<h1 className='text-white text-3xl font-bold'>
					Your Project Goes Here
				</h1>
				<p className=' text-white opacity-40 pt-2 pb-[70px]'>
					Let's turn your idea into a virtual reality
				</p>
				<div className='mb-[150px]'>
					<Button> &rarr; Get in touch </Button>
				</div>
			</div>
		</div>
	);
}

export default NewProjectCard;
