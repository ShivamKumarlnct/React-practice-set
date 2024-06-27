import React from 'react'
import './footer.css';
import { BiLogoMediumOld } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

export default function footer() {
  return (
    <div className='footer'>
      <div className='secContainer container grid'>
        <div className='logoDiv'>
          <div className='footerLogo'>
            <BiLogoMediumOld className='icon'/>
            <span>S-SIKASHA</span>
          </div>
          <div className='socials flex'>
             <FaFacebook className='icon' />
            <CiLinkedin className='icon'/>
            <FaXTwitter className='icon' />
          </div>
          <div className='footerLinks'>
            <span className='linkTitle'>
                Information
            </span>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
              </li> 
              <li>
                <a href=''>Blog</a>
                </li>
          <li>     
            <a href=''>Payment</a>
          </li>         
 </div>
          <div className='footerLinks'>
            <span className='linkTitle'>
                Helpful Link
            </span>
            <li>
              <a href=''>Language</a>
              </li>
            <li>
              <a href=''>Support</a>
              </li>
            <li>  
              <a href=''>Course</a>
              </li> 
            <li>
              <a href=''>privacy</a>
              </li>             
                      </div>
              <div className='footerLinks'>
                <span className='linkTitle'>contact Details</span>
                <span className='phone'>91+0123456789</span>
                <span className='email'>SIKASHA@gmail.com</span>

              </div>
        </div>
      </div>
    </div>
  )
}
