import React from 'react';
import Feedback from './Feedback.jsx'

import './Partners.scss';

function Partners() {
	return (
		<div className="partners">
			<div className="partners__title">
				<h4>Partners & sponsors</h4>
				<h2>Official Sponsor</h2>
			</div>
			<div className="partners__tab">
				<div className="row g-0">
					<div className="col-12 col-lg-3 col-md-6">
						<div className="partners__tab-item">
							<a href="/">
								<img src={require("../../assets/brand-1.png")} alt="" />
							</a>
						</div>
					</div>
					<div className="col-12 col-lg-3 col-md-6">
						<div className="partners__tab-item">
							<a href="/">
								<img src={require("../../assets/brand-2.png")} alt="" />
							</a>
						</div>
					</div>
					<div className="col-12 col-lg-3 col-md-6">
						<div className="partners__tab-item">
							<a href="/">
								<img src={require("../../assets/brand-4.png")} alt="" />
							</a>
						</div>
					</div>
					<div className="col-12 col-lg-3 col-md-6">
						<div className="partners__tab-item">
							<a href="/">
								<img src={require("../../assets/brand-5.png")} alt="" />
							</a>
						</div>
					</div>
					<div className="col-12 col-lg-3 col-md-6">
						<div className="partners__tab-item">
							<a href="/">
								<img src={require("../../assets/brand-6.png")} alt="" />
							</a>
						</div>
					</div>
					<div className="col-12 col-lg-3 col-md-6">
						<div className="partners__tab-item">
							<a href="/">
								<img src={require("../../assets/brand-4.png")} alt="" />
							</a>
						</div>
					</div>
					<div className="col-12 col-lg-3 col-md-6">
						<div className="partners__tab-item">
							<a href="/">
								<img src={require("../../assets/brand-1.png")} alt="" />
							</a>
						</div>
					</div>
					<div className="col-12 col-lg-3 col-md-6">
						<div className="partners__tab-item">
							<a href="/">
								<img src={require("../../assets/brand-3.png")} alt="" />
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="partners__feedback">
				<div className="row gy-4">
					<Feedback />
					<Feedback />
				</div>
			</div>
		</div>
	)
}

export default Partners
