import React from 'react'

import Button from '../Button'

import './ContactForm.scss'

function ContactForm() {
  return (
    <div className="contact__form">
			<form action="POST">
				<div className="row">
					<div className='col-md-6'>
						<input type="text" placeholder="Your Name"/>
					</div>
					<div className="col-md-6">
						<input type="text" placeholder="Last Name"/>
					</div>
					<div className="col-md-6">
						<input type="email" placeholder="E-Mail"/>
					</div>
					<div className="col-md-6">
						<input type="tel" placeholder="Your Number"/>
					</div>
					<div className="col-12">
						<textarea name="message" placeholder="Your Message *" required></textarea>
					</div>
				</div>
				<Button title="Send message"/>
			</form>
		</div>
  )
}

export default ContactForm
