import SectionTitle from './SectionTitle'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FiPhoneCall } from 'react-icons/fi'
import { AiFillMail, AiOutlineFieldTime } from 'react-icons/ai'

const Contact = () => {
	const form = useRef()

	const sendEmail = e => {
		e.preventDefault()

		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				form.current,
				{
					publicKey: 'vcTG7DbP8L8igeTvk',
				}
			)
			.then(
				() => {
					console.log('SUCCESS!')
					toast.success('Email Send', {
						position: 'top-center',
					})
				},
				error => {
					console.log('FAILED...', error.text)
					toast.warn('Something Went Wrong', {
						position: 'top-center',
					})
				}
			)
	}

	return (
		<>
			<ToastContainer />
			<section className='py-40 align-element' id='contact'>
				<SectionTitle text={'contact'} />
				<div className='flex flex-col xl:flex-row justify-center gap-[60px] mt-[10px] px-[30px] max-w-[1200px] m-auto p-10 mb-[-100px]'>
					<div className='flex flex-col gap-[20px]'>
						<div className='mb-4'>
							<p className='text-3xl'>
								Have a question or want to work together? Send me a message
								using the form.
							</p>
						</div>
						<form
							className='flex flex-col gap-[20px]'
							ref={form}
							onSubmit={sendEmail}>
							<div className='flex flex-col sm:flex-row gap-[20px]'>
								<input
									type='text'
									name='user_name'
									required
									placeholder='Your Name...'
									className='px-[12px] border-2 border-gray rounded-md py-[12px] flex-1'
								/>

								<input
									type='email'
									name='user_email'
									placeholder='Your Email...'
									required
									className='px-[12px] border-2 border-gray rounded-md py-[12px] flex-1'
								/>
								<input
									type='text'
									name='phoneNumber'
									placeholder='Your Number...'
									required
									className='px-[12px] border-2 border-gray rounded-md py-[12px] flex-1'
								/>
							</div>

							<div>
								<textarea
									required
									name='message'
									placeholder='Your Message...'
									className='w-full px-[12px] border-2 border-gray rounded-md py-[12px] flex-1'
								/>
							</div>

							<input
								type='submit'
								value='Send'
								className='bg-orange w-full sm:w-auto px-[30px] py-[12px] hover:bg-gray transition-colors duration-300 font-semibold rounded-md text-white tracking-widest'
							/>
						</form>
					</div>
					<div className='px-[20px]'>
						<div className='sm:flex flex-col gap-[20px] mt-[50px]'>
							<div className='flex flex-col flex-1 xl:flex-row gap-[20px]'>
								<div
									className='flex justify-center flex-col py-[35px] px-[45px] rounded-md shadow-lg bg-dark'
									style={{ boxShadow: 'hsl(var(--dark)) -1px 1px 10px 0px' }}>
									<div className='flex flex-col items-center gap-[15px]'>
										<div>
											<FiPhoneCall size={50} color='hsl(var(--orange))' />
										</div>

										<div className='flex flex-col'>
											<div className='font-semibold text-[20px] tracking-wide'>
												<p className='text-white tracking-wider'>Call Me</p>
											</div>
										</div>
										<div>
											<p className='text-gray'>Mob: +48 512-374-866</p>
										</div>
									</div>
								</div>
							</div>

							<div className='flex flex-col flex-1 xl:flex-row gap-[20px] mt-2'>
								<div
									className='flex justify-center  flex-col py-[35px] px-[45px] rounded-md shadow-lg bg-dark'
									style={{ boxShadow: 'hsl(var(--dark)) -1px 1px 10px 0px' }}>
									<div className='flex flex-col items-center gap-[15px]'>
										<div>
											<AiFillMail size={50} color='hsl(var(--orange))' />
										</div>

										<div className='flex flex-col'>
											<div className='font-semibold text-[20px] tracking-wide'>
												<p className='text-white tracking-wider'>Email</p>
											</div>
										</div>
										<div>
											<p className='text-gray'>gawlik.zator@gmail.com</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Contact
