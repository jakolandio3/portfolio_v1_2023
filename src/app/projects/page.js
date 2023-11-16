import AppCard from '../components/AppCard';
import NewProjectCard from '../components/NewProjectCard';
import SectionCard from '../components/SectionCard';

function page() {
	return (
		<div>
			<section
				id='title-card'
				className='mt-[15vh] pb-8 border-b border-dashed border-gray-500 border-opacity-20'
			>
				<div className='text-white flex flex-col h-full justify-center text-left mr-auto justify-items-center max-w-l ml-20'>
					<h1 className='text-7xl font-bold'>Projects</h1>

					<p className='max-w-[80%] text-left mr-auto py-5 opacity-40'>
						Dis is what I do BBy.
					</p>
				</div>
			</section>
			<section id='selected-work' className='m-20'>
				<div className='flex flex-col gap-5'>
					<h2 className=' text-white text-4xl font-bold'>Selected Work</h2>
					<AppCard />
					<AppCard />
					<AppCard />
					<AppCard />
					<AppCard />
					<NewProjectCard />
				</div>
			</section>
		</div>
	);
}

export default page;
