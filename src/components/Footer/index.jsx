import React from 'react'

import './Footer.scss'

import fbSvg from '../../../src/assets/facebook.svg';
import instSvg from '../../../src/assets/instagram.svg';
import twitterSvg from '../../../src/assets/twitter.svg';
import linkedinSvg from '../../../src/assets/linkedin.svg';
import mapSvg from '../../../src/assets/map.svg';
import phoneSvg from '../../../src/assets/phone.svg';
import messageSvg from '../../../src/assets/message.svg';
import gitSvg from '../../../src/assets/github.svg';

function Footer() {
	return (
		<footer>
			<div className="container">
				<div className="row gx-5">
					<div className="col-12 col-lg-3">
						<div className="footer-col">
							<a href="/">
								<div className="footer-col__title">CONFER</div>
							</a>
							<p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain.</p>
							<div className="footer-col__social">
								<ul>
									<li className="footer-col__social-elem">
										<a href="/">
											<img src={fbSvg} alt="" />
										</a>
									</li>
									<li className="footer-col__social-elem">
										<a href="/">
											<img src={instSvg} alt="" />
										</a>
									</li>
									<li className="footer-col__social-elem">
										<a href="/">
											<img src={twitterSvg} alt="" />
										</a>
									</li>
									<li className="footer-col__social-elem">
										<a href="/">
											<img src={linkedinSvg} alt="" />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-3">
						<div className="footer-col">
							<div className="footer-col__contact">
								<span>Contact</span>
								<ul>
									<li>
										<img src={mapSvg} alt="" />
										<p>Novosibirsk city</p>
									</li>
									<li>
										<img src={phoneSvg} alt="" />
										<p>{'(906) 909 1221'}</p>
									</li>
									<li>
										<img src={messageSvg} alt="" />
										<p>gonokhov.dm@gmail.com</p>
									</li>
									<li>
										<img src={gitSvg} alt="" />
										<a href="https://github.com/GonokhovDm">
											<p>github.com</p>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-3">
						<div className="footer-col">
							<div className="footer-col__workshop">
								<span>Workshops</span>
								<ul>
									<li>
										<a href="/">
											<p>OSHA Compliance</p>
										</a>
									</li>
									<li>
										<a href="/">
											<p>Microsoft Exel Basics</p>
										</a>
									</li>
									<li>
										<a href="/">
											<p>Forum Speaker Series</p>
										</a>
									</li>
									<li>
										<a href="/">
											<p>Tedx Moscow Conference</p>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-3">
						<div className="footer-col">
							<div className="footer-col__gallery">
								<span>Gallery</span>
								<div className="row gx-2">
									<div className="col-12 col-lg-4">
										<img src={require('../../assets/photo-1.jpg')} alt="" />
									</div>
									<div className="col-12 col-lg-4">
										<img src={require('../../assets/photo-2.jpg')} alt="" />
									</div>
									<div className="col-12 col-lg-4">
										<img src={require('../../assets/photo-3.jpg')} alt="" />
									</div>
									<div className="col-12 col-lg-4">
										<img src={require('../../assets/photo-4.jpg')} alt="" />
									</div>
									<div className="col-12 col-lg-4">
										<img src={require('../../assets/photo-5.jpg')} alt="" />
									</div>
									<div className="col-12 col-lg-4">
										<img src={require('../../assets/photo-6.jpg')} alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
