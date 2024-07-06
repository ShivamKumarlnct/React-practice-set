import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './video.css';

const VideoPlayer = ({ url, options }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleMoreOptionsClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="video-player-container">
      <div className="options-menu">
        <button className="more-options-btn" onClick={handleMoreOptionsClick}>
          More Options
        </button>
        {showOptions && (
          <ul>
            {options.map((option, index) => (
              <li key={index}>
                <button onClick={option.onClick}>{option.label}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="video-player">
        <ReactPlayer url={url} className="react-player" controls />
      </div>
    </div>
  );
};

export default VideoPlayer;
