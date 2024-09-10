import SectionTitle from './SectionTitle'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
	const form = useRef()

	const sendEmail = e => {
		e.preventDefault()

		emailjs
			.sendForm('service_bf4scjg', 'template_uuj0252', form.current, {
				publicKey: 'vcTG7DbP8L8igeTvk',
			})
			.then(
				() => {
					console.log('SUCCESS!')
				},
				error => {
					console.log('FAILED...', error.text)
				}
			)
	}

	return (
		<section className='py-20 align-element' id='skills'>
			<SectionTitle text={'contact'} />
			<form ref={form} onSubmit={sendEmail}>
				<label>Name</label>
				<input type='text' name='user_name' />
				<label>Email</label>
				<input type='email' name='user_email' />
				<label>Message</label>
				<textarea name='message' />
				<input type='submit' value='Send' />
			</form>
		</section>
	)
}

export default Contact
