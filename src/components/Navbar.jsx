import { IoLogoWebComponent } from 'react-icons/io5'
import { HiBars3BottomRight, HiMiniBars3 } from 'react-icons/hi2'
import { IoClose } from 'react-icons/io5'
import { useState } from 'react'
import { links } from '../data'

const Navbar = () => {
	let [isOpen, setIsOpen] = useState(false)

	return (
		<div className=' w-full fixed md:static md:top-0 left-0 shadow-xl md:shadow-none'>
			<div className='md:px-10 py-4 px-7 md:flex items-center justify-between bg-white md:bg-blue'>
				{/* logo */}
				<div className='flex text-2xl items-center gap-2'>
					<IoLogoWebComponent className='w-7 h-7 text-orange' />
					<span className='font-bold md:text-white'>Portfolio</span>
				</div>

				<div
					onClick={() => setIsOpen(!isOpen)}
					className=' md:hidden absolute right-8 top-6 cursor-pointer'>
					{isOpen ? (
						<IoClose className='w-7 h-7' />
					) : (
						<HiBars3BottomRight className='w-7 h-7' />
					)}
				</div>

				{/* nav links */}
				<ul
					className={`md:flex md:static pl-9 md:pl-0 md:w-auto md:items-center md:pb-0 pb-12 absolute md:z-auto z-[-1] left-0 w-full transition-all bg-white md:bg-blue md:text-white duration-300 ease-linear ${
						isOpen ? 'top-12' : 'top-[-490px]'
					}`}>
					{links.map(link => {
						return (
							<li
								onClick={() => setIsOpen(false)}
								className='font-semibold my-7 md:my-0 md:ml-8 capitalize hover:text-orange duration-'
								key={link.id}>
								<a href={link.href}>{link.text}</a>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Navbar
