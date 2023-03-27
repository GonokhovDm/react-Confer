import React from "react";

import Navbar from "./components/Navbar";
import PersonCard from "./components/Person-card";
import Button from "./components/Button";
import Schedule from "./components/Schedule";
import Price from "./components/Price";
import Partners from "./components/Partners"
import News from "./components/News";
import ContactForm from "./components/contact-form";
import Footer from "./components/Footer";




function App() {
	return (
		<div >
			<nav>
				<Navbar></Navbar>
			</nav>
			<header className="jc-center">
				<div className="header-background"></div>
				<div className="container jc-space-between ai-center">
					<div className="welcome">
						<div className="welcome__content">
							<span className="welcome__title">Science</span>
							<div className="underlined"></div>
							<span className="welcome__title">Conference</span>
							<p>Shangri-la hotel, bangkok, bangkok, thailand</p>
							<Button title="More information" />
						</div>
					</div>
				</div>
			</header>
			<main>
				<section className="about-area jc-center">
					<div className="container ">
						<div className="about">
							<div className="about__content">
								<div className="row">
									<div className="col-12 col-lg-6">
										<div className="about__content-left">
											<h4>about conference</h4>
											<h2>WELCOME TO THE PROJECT MANAGEMENT</h2>
											<p>The Project Management is a platform to learn expert techniques for building successful project teams, creating efficient plans and implementing effective tracking measures to ensure your projects come in on deadline and on budget. In one fast-paced, well-designed day, we’ll cover all the essential elements of project management.</p>
											<Button title="Intrested" />
										</div>
									</div>

									<div className="col-12 col-lg-6">
										<div className="about__content-right">
											<img src={require('./assets/about.png')} alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="speakings-area jc-center">
					<div className="container">
						<div className="speakings">
							<div className="speakings__title">
								<h4>our speakings</h4>
								<h2>who's speaking</h2>
							</div>

							<div className="row g-5">
								<div className="col-12 col-lg-4 col-md-6">
									<PersonCard name="Albert Barnes" title="Founder" imageUrl="./img/photo-2.jpg" />
								</div>
								<div className="col-12 col-lg-4 col-md-6">
									<PersonCard name="Patricia Stanley" title="Product Lead" imageUrl="./img/photo-1.jpg" />
								</div>
								<div className="col-12 col-lg-4 col-md-6">
									<PersonCard name="Evelyn Stone" title="Photographer" imageUrl="./img/photo-3.jpg" />
								</div>
								<div className="col-12 col-lg-4 col-md-6">
									<PersonCard name="Evelyn Stone" title="Photographer" imageUrl="./img/photo-4.jpg" />
								</div>
								<div className="col-12 col-lg-4 col-md-6">
									<PersonCard name="Susan Hopkins" title="UX Manager" imageUrl="./img/photo-5.jpg" />
								</div>
								<div className="col-12 col-lg-4 col-md-6">
									<PersonCard name="Michael Fowler" title="Product Designer" imageUrl="./img/photo-6.jpg" />
								</div>
							</div>

							<a href="/">View all speaker</a>
						</div>
					</div>
				</section>

				<section className="schedule-area jc-center">
					<div className="container">
						<Schedule />
					</div>
				</section>

				<section className="price-area">
					<div className="container">
						<Price />
					</div>
				</section>

				<section className="partners-area">
					<div className="container">
						<Partners />
					</div>
				</section>

				<section className="news-area">
					<div className="container">
						<News/>
					</div>
				</section>

				<section className="contact">
					<div className="container">
						<h4>Have question?</h4>
						<h2>Contact us</h2>
						<div className="row">
							<div className="col-12 col-lg-4">
								<div className="contact__info">
									<div className="contact__info-row">
										Address :
										<span>184 Main Collins Street</span>
									</div>
									<div className="contact__info-row">
										Phone :
										<span>{'(226) 446 9371'}</span>
									</div>
									<div className="contact__info-row">
										Email:
										<span>confer@gmail.com</span>
									</div>
									<div className="contact__info-row">
										Website:
										<span>www.confer.com</span>
									</div>
								</div>
							</div>
							<div className="col-12 col-lg-8">
								<ContactForm/>
							</div>
						</div>
					</div>
				</section>

				<Footer/>
				
			</main>
		</div >
	);
}

export default App;
