import React from 'react';

import fbSvg from '../../assets/facebook.svg';
import instSvg from '../../assets/instagram.svg';
import twitterSvg from '../../assets/twitter.svg';
import linkedinSvg from '../../assets/linkedin.svg';

import './PersonCard.scss'

const personList = [
	{
		imgUrl: "./img/photo-1.jpg",
		name: "Patricia Stanley",
		title: "Product Lead"
	},
	{
		imgUrl: "./img/photo-2.jpg",
		name: "Albert Barnes",
		title: "Founder"
	},
	{
		imgUrl: "./img/photo-3.jpg",
		name: "Evelyn Stone",
		title: "Photographer"
	},
	{
		imgUrl: "./img/photo-4.jpg",
		name: "Evelyn Stone",
		title: "Photographer"
	},
	{
		imgUrl: "./img/photo-5.jpg",
		name: "Susan Hopkins",
		title: "UX Manager"
	},
	{
		imgUrl: "./img/photo-6.jpg",
		name: "Michael Fowler",
		title: "Product Designer"
	},
	{
		imgUrl: "./img/photo-4.jpg",
		name: "Evelyn Stone",
		title: "Photographer"
	},
	{
		imgUrl: "./img/photo-5.jpg",
		name: "Susan Hopkins",
		title: "UX Manager"
	},
	{
		imgUrl: "./img/photo-6.jpg",
		name: "Michael Fowler",
		title: "Product Designer"
	}
]

function PersonCard({ sliceObj }) {
	return (
		<div className="row g-5">
			{personList.slice(0, sliceObj).map(item => (
				<div className="col-12 col-lg-4 col-md-6" key={item.index}>
					<div className="speakings__card">
						<div className="speakings__card-photo">
							<img src={item.imgUrl} alt="" />
						</div>
						<div className="speakings__card-contacts">
							<img src={fbSvg} alt="facebook" />
							<img src={instSvg} alt="instagram" />
							<img src={twitterSvg} alt="twitter" />
							<img src={linkedinSvg} alt="likedin" />
						</div>
						<div className="speakings__card-info">
							<span>{item.name}</span>
							<p>{item.title}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default PersonCard
