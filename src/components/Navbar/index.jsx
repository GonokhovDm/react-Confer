import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

import Button from '../Button';

function Navbar() {
	
	const [isActiveBurger, setIsActiveBurger] = useState(true);

	const burgerClick = () => {
			setIsActiveBurger(!isActiveBurger);
			console.log('click')
	}

	const hideMenu = () => {
		setIsActiveBurger(true);
	}

	return (
		<nav>
			<div className="container jc-space-between ai-center">
				<Link to='/' className='nav-logo' onClick={hideMenu}>
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
				</Link>
				<div className={`nav-burger ${isActiveBurger === false ? "active" : ""}`} onClick={burgerClick}>
					<span></span>
				</div>
				<ul className={`nav-body ${isActiveBurger === false ? "active" : ""}`}>
					<li> <Link to='/react-confer/' onClick={hideMenu}>Home</Link> </li>
					<li> <Link to='/react-confer/speakers' onClick={hideMenu}>Speakers</Link> </li>
					<li> <Link to='/react-confer/blog' onClick={hideMenu}>Blog</Link> </li>
					<li> <Link to='/react-confer/contact' onClick={hideMenu}>Contact</Link> </li>
					<li>
						<Button title="Get tickets" />
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
