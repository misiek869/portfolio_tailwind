import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa'

export const links = [
	{ id: nanoid(), href: '#home', text: 'home' },
	{ id: nanoid(), href: '#about', text: 'about' },
	{ id: nanoid(), href: '#skills', text: 'skills' },
	{ id: nanoid(), href: '#projects', text: 'projects' },
	{ id: nanoid(), href: '#contact', text: 'contact' },
]

export const skills = [
	{
		id: nanoid(),
		title: 'HTML&CSS',
		icon: <FaHtml5 className='h-16 w-16 text-red-500' />,
		text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
	},
	{
		id: nanoid(),
		title: 'Javascript',
		icon: <FaJs className='h-16 w-16 text-yellow-400' />,
		text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
	},
	{
		id: nanoid(),
		title: 'React',
		icon: <FaReact className='h-16 w-16 text-sky-500' />,
		text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
	},
]

export const projects = [
	{
		id: nanoid(),
		img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: 'https://github.com/misiek869/travel_app',
		github: 'https://github.com/misiek869/travel_app',
		title: 'first project',
		text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
	},
]
