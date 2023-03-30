import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

import Button from '../Button';

function Navbar() {
	return (
		<nav>
			<div className="container jc-space-between ai-center">
				<a href='/' className='nav-logo'>
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
				<ul>
					<li> <Link to='/'>Home</Link> </li>
					<li> Pages </li>
					<li> <Link to='/speakers'>Speakers</Link> </li>
					<li> <Link to='/blog'>Blog</Link> </li>
					<li> <Link to='/contact'>Contact</Link> </li>
					<li>
						<Button title="Get tickets" />
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
