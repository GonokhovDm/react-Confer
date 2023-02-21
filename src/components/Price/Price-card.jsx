import React from 'react'
import Button from '../Button';

import checkSvg from '../../assets/check.svg'

function PriceCard(props) {
	return (

		<div className="price__cards-item-content">
			<h6>{props.title}</h6>
			<div className="price__cards-item-img">
				<img src={require(`../../assets/${props.imageUrl}`)} alt="" />
			</div>
			<h2><span>$</span>{props.price}</h2>
			<Button title='Get tickets' />
			<ul>
				<li>
					<img src={checkSvg} alt="" />
					One Day Conference Ticket</li>
				<li>
					<img src={checkSvg} alt="" />
					Coffee-break</li>
				<li>
					<img src={checkSvg} alt="" />
					Lunch and Networking</li>
				<li>
					<img src={checkSvg} alt="" />
					Keynote talk</li>
				<li>
					<img src={checkSvg} alt="" />
					Talk to the Editors Session</li>
			</ul>
		</div>
	)
}

export default PriceCard
