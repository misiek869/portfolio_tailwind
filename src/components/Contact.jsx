import SectionTitle from './SectionTitle'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
	const form = useRef()

	const sendEmail = e => {
		e.preventDefault()

		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID, // Correct environment variable usage
				process.env.REACT_APP_TEMPLATE_ID, // Correct environment variable usage
				form.current,
				process.env.REACT_APP_PUBLIC_KEY // Directly pass the public key here
			)
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
