import heroImg from '../assets/michal.jpg'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
	return (
		<section className='bg-cyan-700 py-24'>
			<div className='align-element  px-8 grid md:grid-cols-2 items-center gap-8'>
				<article>
					<h1 className='text-7xl font-bold text-white tracking-wider'>
						Jestem Michał
					</h1>
					<p className='mt-4 text-3xl text-white capitalize tracking-wide'>
						Aspirujący Front-end developer
					</p>
					{/* <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
         
          </p> */}
					<div className='flex gap-x-4 mt-4'>
						<a href='#'>
							<FaGithubSquare className='h-8 w-8 text-white hover:text-orange-700 duration-300' />
						</a>
						<a href='#'>
							<FaLinkedin className='h-8 w-8 text-white hover:text-orange-700 duration-300' />
						</a>
					</div>
				</article>
				<article className='hidden md:block '>
					<img src={heroImg} className='h-80 lg:h-96 rounded-full shadow-xl ' />
				</article>
			</div>
		</section>
	)
}

export default Hero
