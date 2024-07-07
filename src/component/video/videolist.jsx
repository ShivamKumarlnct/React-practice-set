import React from 'react';
import './videol.css';

const videolist = ({ videos, onVideoSelect, emptyHeading }) => {
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

export default videolist;
