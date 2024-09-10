import React from 'react'
import { links } from '../data'

const Navbar = () => {
	return (
		<nav className='bg-blue '>
			<div className='align-element  px-8 py-4 flex flex-col  sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
				<h2 className='text-3xl font-bold text-white'>
					Web
					<span className='text-orange'>Portfolio</span>
				</h2>
				<div className='flex gap-x-3 '>
					{links.map(link => {
						const { id, href, text } = link
						return (
							<a
								key={id}
								href={href}
								className='capitalize text-lg tracking-wide hover:font-medium hover:text-orange duration-300 text-white'>
								{text}
							</a>
						)
					})}
				</div>
			</div>
		</nav>
	)
}

export default Navbar
