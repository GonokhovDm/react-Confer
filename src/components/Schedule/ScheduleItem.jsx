import React from 'react'
import Button from "../Button";

function ScheduleItem(props) {
	return (
		
			<div className="schedule__list-item">
				<div className="schedule__left-side">
					<img src={require(`../../assets/${props.image}`)} alt="" />
					<div className="schedule__left-side-text">
						<h6>{props.theme}</h6>
						<p>by <span>{props.author}</span> / Ceo of Confer</p>
					</div>
				</div>
				<div className="schedule__right-side">
					<div className="schedule__right-side-date">
						<p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512">
								<path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
							</svg>
							{props.date}
						</p>
						<p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 576 512">
								<path d="M565.6 36.2C572.1 40.7 576 48.1 576 56V392c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456V120c0-10 6.2-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5V421.2l120-45.7V90.8L48 136.5zM360 422.7V137.3l-144-48V374.7l144 48zm48-1.5l120-45.7V90.8L408 136.5V421.2z" />
							</svg>
							{props.place}
						</p>
					</div>
					<div className="schedule__right-side-button">
						<Button title="View more" />
					</div>
				</div>
			</div>
	)
}

export default ScheduleItem
