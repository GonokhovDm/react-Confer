import React from 'react';
import arrowSvg from '../../assets/button-arrow.svg';


function NewsItem( {newsObj} ) {
	return (
	<div className="row gx-4">
		{newsObj.map (item => (
			<div className="col-12 col-lg-4" key={item.imgName}>
			<div className="news__cards-item">
				<div className="news__cards-item-photo">
					<img style={{ backgroundImage: `url(${require(`../../assets/${item.imgName}`)})` }} alt="" />
				</div>
				<div className="content">
					<h6>{item.title}</h6>
					<div className="content-info">
						<div className="content-info-date">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								fill='#df42b1'
							>
								<path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
							</svg>
							{item.date}
						</div>
						<div className="content-info-author">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								fill='#df42b1'
							>
								<path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
							</svg>
							{item.author}
						</div>
					</div>
					<p>{item.text}</p>
				</div>
				<a href="/" className="content-link">
					<img src={arrowSvg} alt="" />
				</a>
			</div>
		</div>
		))}
	</div>
	)
}

export default NewsItem
