import React, { Component } from 'react';
import classNames from 'classnames';

import PriceCard from './Price-card';

import './Price.scss';



class Price extends Component {

	state = {
		activeCard: 2,
	}

	onHoverCard = (e) => {
		this.setState({
			activeCard: +e.target.getAttribute('data-name')
		})
	}

	render() {
		console.log(this.state);
		return (
			<div className="price">
				<div className="price__title">
					<h4>Choose a ticket</h4>
					<h2>Ticket pricing</h2>
				</div>
				<div className="price__cards">
					<div className="row gx-4">
						<div className="col-12 col-lg-4">
							<div
								data-name={1}
								className={classNames('price__cards-item', { active: this.state.activeCard !== 0 && this.state.activeCard === 1 })}
								onMouseEnter={this.onHoverCard}
							>
								<PriceCard
									title = '1 day pass'
									imageUrl = 'price-card-1.png' 
									price = '59'
								/>
							</div>
						</div>

						<div className="col-12 col-lg-4">
							<div
								data-name={2}
								className={classNames('price__cards-item', { active: this.state.activeCard !== 0 && this.state.activeCard === 2 })}
								onMouseEnter={this.onHoverCard}
							>
								<PriceCard
									title = 'full pass'
									imageUrl = 'price-card-2.png' 
									price = '99'
								/>
							</div>
						</div>

						<div className="col-12 col-lg-4">
							<div
								data-name={3}
								className={classNames('price__cards-item', { active: this.state.activeCard !== 0 && this.state.activeCard === 3 })}
								onMouseEnter={this.onHoverCard}
							>
								<PriceCard
									title = 'group pass'
									imageUrl = 'price-card-3.png' 
									price = '199'
								/>
							</div>
						</div>

					</div>
				</div>
			</div>
		)
	}

}

export default Price
