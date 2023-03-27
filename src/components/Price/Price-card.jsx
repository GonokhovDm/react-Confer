import React from 'react'
import Button from '../Button'

import './Price-card.scss'

import checkSvg from '../../assets/check.svg'

function PriceCard ( {PriceObj, isActivePrice, setIsActivePrice} ) {
	return (
	<div className="row gx-4">
		{PriceObj.map (item => (
			<div className="col-12 col-lg-4" key={item.id}>
				<div className="price__cards">
					<div 
						className={`price__cards-item ${isActivePrice !== item.id ? "" : "active"}`} 
						onMouseEnter={()=>{setIsActivePrice(item.id)}}
						onMouseLeave={()=>setIsActivePrice(-1)}
					>
						<div className="price__cards-item-content">
							<h6>{item.title}</h6>
							<div className="price__cards-item-img">
								<img src={require(`../../assets/${item.imageUrl}`)} alt="" />
							</div>
							<h2><span>$</span>{item.price}</h2>
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
					</div>
				</div>
			</div>
		))} 
	</div>
	)
}

export default PriceCard
