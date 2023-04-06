import React from 'react';

import fbSvg from '../../assets/facebook.svg';
import instSvg from '../../assets/instagram.svg';
import twitterSvg from '../../assets/twitter.svg';
import linkedinSvg from '../../assets/linkedin.svg';

import './PersonCard.scss'

const personList = [
	{
		imgNumber: "1",
		name: "Patricia Stanley",
		title: "Product Lead"
	},
	{
		imgNumber: "2",
		name: "Albert Barnes",
		title: "Founder"
	},
	{
		imgNumber: "3",
		name: "Evelyn Stone",
		title: "Photographer"
	},
	{
		imgNumber: "4",
		name: "Evelyn Stone",
		title: "Photographer"
	},
	{
		imgNumber: "5",
		name: "Susan Hopkins",
		title: "UX Manager"
	},
	{
		imgNumber: "6",
		name: "Michael Fowler",
		title: "Product Designer"
	},
	{
		imgNumber: "4",
		name: "Evelyn Stone",
		title: "Photographer"
	},
	{
		imgNumber: "5",
		name: "Susan Hopkins",
		title: "UX Manager"
	},
	{
		imgNumber: "6",
		name: "Michael Fowler",
		title: "Product Designer"
	}
]

function PersonCard({ sliceObj }) {
	return (
		<div className="row gy-4">
			{personList.slice(0, sliceObj).map(item => (
				<div className="col-12 col-lg-4 col-md-6" key={item.index}>
					<div className="speakings__card">
						<div className="speakings__card-photo">
							<img src={`${require(`../../../src/assets/photo-${item.imgNumber}.jpg`)}`} alt="" />
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
