import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import htmlIcon from '../assets/html-icon.svg'
import cssIcon from '../assets/css-icon.svg'
import jsIcon from '../assets/javascript-icon.svg'
import tsIcon from '../assets/typescript-icon.svg'
import reactIcon from '../assets/react-icon.svg'
import nextIcon from '../assets/nextjs-icon.svg'
import tailwindIcon from '../assets/tailwind-icon.svg'

const TechSlider = () => {
	var settings = {
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		speed: 2000,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		loop: true,
		cssEase: 'linear',
		responsive: [
			{
				breakpoint: 1760,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 1460,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 1290,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},

			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
		],
	}

	return (
		<div className='mt-24'>
			<div className=' max-w-sm bottom-[70px] md:max-w-4xl xl:max-w-3xl px-5 lg:px-10 overflow-auto mx-auto bg-white rounded-md z-20 border-slate-200 border shadow-md'>
				<div className='py-4 lg:py-8 cursor cursor-all-scroll'>
					<Slider {...settings}>
						<img src={htmlIcon} alt='html Logo' className='h-12 w-12' />
						<img src={cssIcon} alt='css Logo' className='h-12 w-12' />
						<img src={jsIcon} alt='javascript Logo' className='h-12 w-12' />

						<img src={tsIcon} alt='typescript Logo' className='h-12 w-12' />
						<img src={reactIcon} alt='react Logo' className='h-12 w-12' />
						<img src={nextIcon} alt='nextjs Logo' className='h-12 w-12' />
						<img src={tailwindIcon} alt='tailwind Logo' className='h-12 w-12' />
					</Slider>
				</div>
			</div>
		</div>
	)
}

export default TechSlider
