import { logo } from '../assets';

const Hero = () => {
	return (
		<header className='w-full flex justify-center items-center flex-col'>
			<nav className='flex justify-between items-center w-full mb-10 pt-3'>
				<img src={logo} alt='sumz_logo' className='w-28 object-contain' />

				<button type='button' className='black_btn'>
					<a
						href='https://github.com/Saitamah07/AI_Summarize'
						target='__blank'
						rel='noreferrer'
					>
						GitHub
					</a>
				</button>
			</nav>
			<h1 className='head_text'>
				Resume Articulos Con <br className='max-md:hidden' />
				<span className='orange_gradient'>OpenAI GPT-4</span>
			</h1>
			<h2 className='desc'>
				Simplifique su lectura, un resumidor de artículos de código abierto que
				transforma artículos extensos en resúmenes claros y concisos.
			</h2>
		</header>
	);
};

export default Hero;
