import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
		<div>
			<p>slider</p>
		</div>
	)
}

export default TechSlider
