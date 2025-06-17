import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Navbar = ({ onAboutClick }) => {
  return (
    <nav className="navbar">
      <img src={logo} alt='logo' className='logo' />

      <div className='desktopMenu'>
        <Link
          activeClass='active'
          to='intro'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>

        <span className="desktopMenuListItem" onClick={onAboutClick}>About</span>

        <Link
          activeClass='active'
          to='skills'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Skills
        </Link>
               <a
          href="/Teja resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="desktopMenuListItem"
        
        >
          Resume
        </a>
      </div>

      <button
        className='desktopMenuBtn'
        onClick={() => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <img src={contactImg} alt='contact' className='desktopMenuImg' />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
