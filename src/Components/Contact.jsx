import React, { useState } from 'react'
import '../css/contact.css'

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const response = await fetch('https://formspree.io/f/mwpgdpwn', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			})
			if (response.ok) {
				alert('Сообщение отправлено!')
				setFormData({ name: '', email: '', message: '' })
			} else {
				alert('Ошибка при отправке. Попробуйте позже.')
			}
		} catch (error) {
			console.error(error)
			alert('Ошибка при отправке. Попробуйте позже.')
		}
	}

	return (
		<div className='contact-container'>
			<div className='contact-text'>
				<h1>Contact</h1>
				<p>Напишите мне сообщение, я свяжусь с вами в ближайшее время.</p>
			</div>

			<form className='contact-form' onSubmit={handleSubmit}>
				<input
					type='text'
					name='name'
					placeholder='Ваше имя'
					value={formData.name}
					onChange={handleChange}
					required
				/>
				<input
					type='email'
					name='email'
					placeholder='Ваш email'
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<textarea
					name='message'
					rows='6'
					placeholder='Ваше сообщение'
					value={formData.message}
					onChange={handleChange}
					required
				/>
				<button type='submit'>Отправить</button>
			</form>
		</div>
	)
}

export default Contact
