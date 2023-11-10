import AppCard from './components/AppCard';
import Button from './components/Button';

function app() {
	return (
		<main>
			<section id='title-card' className='my-[15vh] pb-8'>
				<div className='text-white flex flex-col h-full justify-center text-left mr-auto justify-items-center max-w-l ml-20'>
					<h1 className='text-7xl font-bold text-gray-500 pt-20'>Hi👋,</h1>
					<h1 className='text-7xl font-bold'>
						<span className='text-gray-500'>I'm </span>Jakob Douglas
					</h1>

					<p className='max-w-[80%] text-left mr-auto py-5 opacity-40'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
						labore non tenetur similique unde autem qui sapiente debitis
						adipisci magnam.
					</p>

					<div className='flex flex-row gap-5'>
						<Button to='/resume'> See me Resume</Button>
						<Button> Touch me</Button>
					</div>
				</div>
			</section>
			<section id='selected-work' className='m-20'>
				<div className='flex flex-col gap-5'>
					<h2 className=' text-white text-3xl'>Selected Work</h2>
					<AppCard />
					<AppCard />
					<AppCard />
					<AppCard />
					<AppCard />
				</div>
			</section>
			<section id='title-card' className='my-[15vh] pb-8 m-20'>
				<h2 className=' text-white text-3xl pb-[20px]'>Get to know me</h2>
				<div className='grid gap-5 grid-cols-2 grid-flow-row'>
					<AppCard />
					<AppCard />
					<AppCard />
					<AppCard />
				</div>
			</section>
		</main>
	);
}

export default app;
