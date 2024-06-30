import React, { useState } from 'react';
// import { Player } from 'video-react';
// import 'video-react/dist/video-react.css';
import './video.css';

const Video = () => {
  const [currentVideo, setCurrentVideo] = useState('/videos/video1.mp4'); 
  const videos = [
    { name: 'Video 1', src: '/videos/video1.mp4' },
    { name: 'Video 2', src: '/videos/video2.mp4' },
    { name: 'Video 3', src: '/videos/video3.mp4' }
  ];

  return (
    <div className="video-player-container">
      <Player playsInline src={currentVideo} />

      <div className="video-selection">
        {videos.map((video, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentVideo(video.src)}
            className="video-button"
          >
            {video.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Video;
