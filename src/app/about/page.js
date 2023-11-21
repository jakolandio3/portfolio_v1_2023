import Button from '../components/Button';

function page() {
	return (
		<div className='w-3/4'>
			<section
				id='title-card'
				className='mt-[15vh] pb-8 border-b border-dashed border-gray-500 border-opacity-20'
			>
				<div className='text-white flex flex-col h-full justify-center text-left mr-auto justify-items-center max-w-l ml-20'>
					<h1 className='text-7xl font-bold'>A little bit about myself</h1>

					<p className='max-w-[80%] text-left mr-auto py-5 opacity-40'>
						Who I am and what I do.
					</p>
				</div>
			</section>
			<section className='text-white flex flex-row h-full justify-between mt-[20px] text-left mr-auto justify-items-center max-w-l ml-20'>
				<main className='w-1/2'>
					<div className='pb-3'>
						<h2 className='opacity-40 text-sm font-medium'>Who I am</h2>
						<p className='opacity-90 text-sm font-thin'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
							officiis corrupti est tenetur aut nisi porro ea odio ducimus
							maxime!
						</p>
					</div>
					<div className='pb-3'>
						<h2 className='opacity-40 text-sm font-medium'>What I do</h2>
						<p className='opacity-90 text-sm font-thin'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Doloremque, enim ad nisi facilis rerum eveniet eius ipsam, ratione
							ex dicta ut itaque obcaecati voluptate quae impedit possimus
							provident vero eligendi soluta nobis magni pariatur. Neque quia
							asperiores est at, nisi tenetur reiciendis doloribus fuga delectus
							quibusdam quis tempora perferendis voluptatem voluptate omnis,
							architecto ratione sit dolorem tempore ipsa distinctio ut iste
							expedita nemo. Illo commodi itaque, quod totam molestias aut
							facere quae aperiam voluptatum veritatis sit obcaecati similique
							nam beatae accusamus reiciendis vel laboriosam consequuntur
							tempora ipsam fugiat. Neque maxime voluptas cupiditate tenetur
							possimus voluptate distinctio magni ullam voluptatum libero?
						</p>
					</div>
					<div className='pb-10'>
						<h2 className='opacity-40 text-sm font-medium'>What I did</h2>
						<p className='opacity-90 text-sm font-thin'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
							illo unde vel harum est deleniti libero, quia iure, temporibus,
							voluptatibus necessitatibus deserunt aliquam delectus. Nesciunt
							quia quam iste itaque animi ut corrupti deleniti recusandae nam
							voluptatem minus assumenda porro sed saepe dicta in, quos dolorem
							doloribus voluptates! Natus, laboriosam in?
						</p>
					</div>
					<div className='pb-10'>
						<p className='opacity-90 text-sm font-thin'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
							eaque doloremque voluptatibus
						</p>
					</div>
					<div>
						<p className='opacity-90 text-sm font-thin'>
							Lorem ipsum dolor sit
						</p>
					</div>
				</main>
				<aside className='w-1/2 flex flex-col gap-20 mt-3 mx-5'>
					<div className='h-1/2 w-1/2 border flex self-center items-center justify-center  border-gray-500 border-opacity-20 rounded-xl'>
						<img src='' alt='nope' />
					</div>
					<div className='flex justify-center items-center'>
						<Button>&rarr; Get in touch</Button>
					</div>
				</aside>
			</section>
			<section className=' flex justify-left mt-5 ml-[30vw] opacity-70 text-3xl skew-x-12 text-white'>
				<div>
					<h1 className=' -rotate-[15deg] skew-x-[-40deg] font-thin italic'>
						Jacking Off
					</h1>
				</div>
			</section>
		</div>
	);
}

export default page;
