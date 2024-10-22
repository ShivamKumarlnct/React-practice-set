import React from 'react';
import './home.css';
import Video from '../../assets/video.mp4';
import { VscArrowRight } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Home() {
  const navigate = useNavigate(); // Initialize navigate

  const handleGetStarted = () => {
    navigate('/codinglanguages'); // Navigate to CodingLanguages page
  };

  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>
      <div className='sectionText'>
        <h1>Unlock Your Coding Dream With Us!</h1>
        <p>
          Coding allows you to create something from scratch. Whether it's a website, an app, a game, or a piece of software, coding empowers you to bring your ideas to life in the digital world. The ability to build something tangible from your imagination is incredibly fulfilling and motivating.
        </p>
        <button className='btn flex' onClick={handleGetStarted}>
          GET STARTED <VscArrowRight className='icon' />
        </button>
      </div>
      <div className='famous-language'>
        <div className='content'>
          <h3>Famous-Language</h3>
          <div className='images flex'>
            {/* Add your images here */}
          </div>
        </div>
      </div>
    </div>
  );
}
