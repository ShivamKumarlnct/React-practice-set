import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './video.css';

const VideoPlayer = ({ playlist, options }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleMoreOptionsClick = () => {
    setShowOptions(!showOptions);
  };

  const handlePrevClick = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : playlist.length - 1));
  };

  const handleNextClick = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex < playlist.length - 1 ? prevIndex + 1 : 0));
  };

  const handleVideoSelect = (video) => {
    const index = playlist.findIndex(v => v.id === video.id);
    if (index !== -1) {
      setCurrentVideoIndex(index);
    }
  };

  const filterVideos = (videos, searchText) => {
    if (!searchText) {
      return videos;
    }
    return videos.filter(video =>
      video.title.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const foundVideos = filterVideos(playlist, searchText);

  if (!playlist || playlist.length === 0) {
    return <div>No videos available</div>;
  }

  return (
    <div className="video-player-container">
      {/* <div className="options-menu">
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
      </div> */}
      <div className="video-player">
        <ReactPlayer url={playlist[currentVideoIndex].url} className="react-player" controls />
      </div>
      <div className="playlist-controls">
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
      <input
        type="text"
        placeholder="Search videos..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="search-input"
      />
      <VideoList videos={foundVideos} onVideoSelect={handleVideoSelect} emptyHeading={`No matches for “${searchText}”`} />
    </div>
  );
};

const VideoList = ({ videos, onVideoSelect, emptyHeading }) => {
  const count = videos.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? 'Videos' : 'Video';
    heading = count + ' ' + noun;
  }

  return (
    <section className="video-list">
      <h2>{heading}</h2>
      {videos.map(video => (
        <div key={video.id} className="video-item" onClick={() => onVideoSelect(video)}>
          {video.title}
        </div>
      ))}
    </section>
  );
};

export default VideoPlayer;
