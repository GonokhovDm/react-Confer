import React, {useState} from 'react'

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

	const [showAccordion, setShowAccordion] = useState(0);

	return (
		<footer>
			<div className="container">
				<div className="screen">
					<div className="row gx-5">
						<div className="col-12 col-lg-3 col-md-12">
							<div className="footer-col">
								<a href='/' className="footer-col__logo">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512">
										<defs>
											<linearGradient id="MyGradient" gradientTransform="rotate(60)">
												<stop offset="10%" stopColor="#df42b1" />
												<stop offset="95%" stopColor="#734bbb" />
											</linearGradient>
										</defs>
										<path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
									</svg>
									<span className="nav-logo__text">CONFER</span>
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
						<div className="col-12 col-lg-3 col-md-6">
							<div className="footer-col">
								<div className="footer-col__contact">
									<span className='footer-col__title'>Contact</span>
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
						<div className="col-12 col-lg-3 col-md-6">
							<div className="footer-col">
								<div className="footer-col__workshop">
									<span className='footer-col__title'>Workshops</span>
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
						<div className="col-12 col-lg-3 col-md-12">
							<div className="footer-col">
								<div className="footer-col__gallery">
									<span className='footer-col__title'>Gallery</span>
									<div className="row gx-2">
										<div className="col-4">
											<img src={require('../../assets/photo-1.jpg')} alt="" />
										</div>
										<div className="col-4">
											<img src={require('../../assets/photo-2.jpg')} alt="" />
										</div>
										<div className="col-4">
											<img src={require('../../assets/photo-3.jpg')} alt="" />
										</div>
										<div className="col-4">
											<img src={require('../../assets/photo-4.jpg')} alt="" />
										</div>
										<div className="col-4">
											<img src={require('../../assets/photo-5.jpg')} alt="" />
										</div>
										<div className="col-4">
											<img src={require('../../assets/photo-6.jpg')} alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mobile">
				<div className="row gx-5">
						<div className="col-12 col-lg-3">
							<div className="footer-col">
								<a href='/' className="footer-col__logo">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512">
										<defs>
											<linearGradient id="MyGradient" gradientTransform="rotate(60)">
												<stop offset="10%" stopColor="#df42b1" />
												<stop offset="95%" stopColor="#734bbb" />
											</linearGradient>
										</defs>
										<path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
									</svg>
									<span className="nav-logo__text">CONFER</span>
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
									<span className='footer-col__title' onClick={() => showAccordion === 0 ? setShowAccordion(1) : setShowAccordion(0)}>Contact</span>
									<div className={`footer-col__content ${showAccordion === 1 ? "show" : ""}`}>
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
						</div>
						<div className="col-12 col-lg-3">
							<div className="footer-col">
								<div className="footer-col__workshop">
									<span className='footer-col__title' onClick={() => showAccordion === 0 ? setShowAccordion(2) : setShowAccordion(0)}>Workshops</span>
									<div className={`footer-col__content ${showAccordion === 2 ? "show" : ""}`}>
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
						</div>
						<div className="col-12 col-lg-3">
							<div className="footer-col">
								<div className="footer-col__gallery">
									<span className='footer-col__title' onClick={() => showAccordion === 0 ? setShowAccordion(3) : setShowAccordion(0)}>Gallery</span>
									<div className={`footer-col__content ${showAccordion === 3 ? "show" : ""}`}>
										<div className="row gx-2">
											<div className="col-4">
												<img src={require('../../assets/photo-1.jpg')} alt="" />
											</div>
											<div className="col-4">
												<img src={require('../../assets/photo-2.jpg')} alt="" />
											</div>
											<div className="col-4">
												<img src={require('../../assets/photo-3.jpg')} alt="" />
											</div>
											<div className="col-4">
												<img src={require('../../assets/photo-4.jpg')} alt="" />
											</div>
											<div className="col-4">
												<img src={require('../../assets/photo-5.jpg')} alt="" />
											</div>
											<div className="col-4">
												<img src={require('../../assets/photo-6.jpg')} alt="" />
											</div>
										</div>
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
