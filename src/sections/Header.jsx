import heroVid from '../assets/HeroSurf.mp4';

const Header = () => {
	return (
		<div className='relative h-screen w-full'>
			<video
				src={heroVid}
				className='h-full w-full object-cover'
				autoPlay
				loop
				muted
			/>
			<div className='absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 gap-60'>
				<h1 className='text-white text-4xl font-bold'>
					Catch the Perfect Wave
				</h1>
				<button>Test</button>
			</div>
		</div>
	);
};

export default Header;
