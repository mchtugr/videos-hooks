import './VideoItem.css';
import React from 'react';
import he from 'he'; // decodes html entities. video title includes '&amp'

const VideoItem = ({ video, handleVideoSelect }) => {

  const title = video.snippet.title;

  return (
    <div className="item video-item" onClick={() => handleVideoSelect(video)}>
      <img
      className='ui image'
      src={video.snippet.thumbnails.medium.url}
      alt={video.snippet.title}
      />
      <div className='content'>
        <div className='header'>{he.decode(title)}</div>
      </div>
    </div>
  );
};


export default VideoItem;
