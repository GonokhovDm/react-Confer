import React from 'react';
import './Navbar.scss';
import Button from '../Button';

function Navbar() {
  return (
    <div className="container jc-space-between ai-center">
      <span className="nav-logo">CONFER</span>
      <ul>
        <li>Home</li>
        <li>Pages</li>
        <li>Speakers</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>
          <Button title="Get tickets"/>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
