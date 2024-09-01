import React, { useState } from 'react';
import './navbar.css'; 
import { BiLogoMediumOld } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FiAlignJustify } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Navbar() { 
  const [showNavbar, setShowNavbar] = useState(false);
  const toggleNavbar = () => {
    setShowNavbar(!showNavbar); 
  };

  return (
    <div className='navbar'>
      <div className='logo'>
        <BiLogoMediumOld className='icons' />
        <span>S-SIKASHA</span>
      </div>
      <div className={showNavbar ? 'menu showNavbar' : 'menu'}>
        <ul>
          <li className='navlist'>
            <Link to="/" onClick={toggleNavbar}>Home</Link>
          </li>
          <li className='navlist'>
            <Link to="/about" onClick={toggleNavbar}>About</Link>
          </li>
          <li className='navlist' onClick={toggleNavbar}>
          <Link to="/test" onClick={toggleNavbar}>Tes</Link>
          </li>
          <li className='navlist' onClick={toggleNavbar}>
         <Link to="/video" onClick={toggleNavbar}>Video</Link>

          </li>
          <li className='navlist'>
          <Link to="https://razorpay.me/@shivamkumar2807" onClick={toggleNavbar}>Payment</Link>
          </li>
          
        </ul>
        <AiFillCloseCircle className='icon closeIcon' onClick={toggleNavbar} />
      </div>
      <button className='sign-btn'><Link to="/sign">Sign-up</Link>
</button>
      <FiAlignJustify className='icon menuIcon' onClick={toggleNavbar} />
    </div>
  );
}
