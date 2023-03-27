import React, { useState } from 'react';

import PriceCard from './Price-card';

import './Price.scss';

function Price() {

	const [isActivePrice, setIsActivePrice] = useState(-1)

	const PriceObj = [
		{
			id: 1,
			title: '1 day pass',
			imageUrl: 'price-card-1.png',
			price: '59'
		},
		{
			id: 2,
			title: 'full pass',
			imageUrl: 'price-card-2.png',
			price: '99'
		},
		{
			id: 3,
			title: 'group pass',
			imageUrl: 'price-card-3.png',
			price: '199'
		}
	]

	return (
		<div className="price">
			<div className="price__title">
				<h4>Choose a ticket</h4>
				<h2>Ticket pricing</h2>
			</div>
			<PriceCard
				PriceObj={PriceObj}
				isActivePrice={isActivePrice}
				setIsActivePrice={setIsActivePrice}
			/>
		</div>
	)
}

export default Price
