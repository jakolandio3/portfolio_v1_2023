import AppCard from './components/AppCard';
import SectionCard from './components/SectionCard';
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
					<h2 className=' text-white text-4xl font-bold'>Selected Work</h2>
					<AppCard />
					<AppCard />
					<AppCard />
					<AppCard />
					<AppCard />
				</div>
			</section>
			<section id='title-card' className='my-[10vh] m-20 flex flex-col gap-5'>
				<h2 className=' text-white text-4xl font-bold pb-[20px]'>
					Get to know me
				</h2>
				<div className='grid gap-5 grid-cols-2 grid-flow-row'>
					<SectionCard />
					<SectionCard />
					<SectionCard />
					<SectionCard />
				</div>
			</section>
			<section id='contact' className='m-20'>
				<div className='flex flex-row justify-between'>
					<div className='text-white flex flex-col h-full justify-center text-left justify-items-center'>
						<h1 className='text-4xl font-bold text-white pt-10'>
							Let's work together
						</h1>

						<p className='max-w-[50%] text-left mr-auto py-5 opacity-40'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
							labore non tenetur similique unde autem qui sapiente debitis
							adipisci magnam.
						</p>
					</div>

					<div className='flex self-center text-center flex-nowrap min-w-[200px]'>
						<Button to='/resume'>&rarr; Get in touch</Button>
					</div>
				</div>
			</section>
		</main>
	);
}

export default app;
