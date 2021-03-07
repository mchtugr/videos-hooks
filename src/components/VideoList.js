import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, handleVideoSelect }) => {

  const renderedList = videos.map((videoItem)=>{
    return (
      <VideoItem
      handleVideoSelect={handleVideoSelect}
      video={videoItem}
      key={videoItem.id.videoId}
      />
    )
  });

  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  );
};




export default VideoList;
