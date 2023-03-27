import React from 'react'

import Button from '../Button'

import './ContactForm.scss'

function ContactForm() {
  return (
    <div className="contact__form">
			<form action="POST">
				<div>
					<input type="text" placeholder="Your Name"/>
					<input type="text" placeholder="Last Name"/>
				</div>
				<div>
					<input type="email" placeholder="E-Mail"/>
					<input type="tel" placeholder="Your Number"/>
				</div>
				<textarea name="message" placeholder="Your Message *" required></textarea>
				<Button title="Send message"/>
			</form>
		</div>
  )
}

export default ContactForm
