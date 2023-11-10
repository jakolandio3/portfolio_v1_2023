import Link from 'next/link';

function Button({ children, to = '/' }) {
	return (
		<Link
			href={`${to}`}
			className='bg-gray-900 hover:shadow-gray-600 shadow-inner p-2 rounded-lg hover:text-white text-gray-400'
		>
			{children}
		</Link>
	);
}

export default Button;
