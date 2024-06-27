
import React from 'react';
import './home.css';
import Video from '../../assets/video.mp4';
import { VscArrowRight } from "react-icons/vsc";
export default function Home() {
  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video}autoPlay loop muted></video>
      </div>
      <div className='sectionText'>
        <h1>unlock Your Coding Dream With us!</h1>
        <p> Coding allows you to create something from scratch. Whether it's a website, an app, a game, or a piece of software, coding empowers you to bring your ideas to life in the digital world. The ability to build something tangible from your imagination is
           incredibly fulfilling and motivating.</p>
           <button className='btn flex'>GET STARTED<VscArrowRight className='icon'/></button>
      </div>
      <div className='famous-language'>
        <div className='content'>
          <h3>Famous-Language</h3>
          <div className='images flex'>
              {/* <img src=''></img> */}
              {/* <img src=''></img> */}
              {/* <img src=''></img> */}
              {/* <img src=''></img> */}
          </div>
        </div>
      </div>
    </div>
  );
}
