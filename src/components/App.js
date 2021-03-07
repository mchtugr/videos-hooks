import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyCnu0v20C52TzSNJqLxJPsoslaIeqqbQhg';

const App = () => {
  const [videosArr, setVideosArr] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(()=>{
    handleSubmit('cat');
  }, []);

  const handleSubmit =  async (keyword) => {
    const response = await youtube.get('/search', {
      params: {
        q: keyword,
        part : 'snippet',
        type : 'video',
        maxResults : 5,
        key: KEY
      }
    });
    setVideosArr(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  }

  return (
    <div className='ui container' style={{ marginTop : '10px'} }>
      <SearchBar handleSubmit={handleSubmit}/>
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo}/>
          </div>
          <div className='five wide column'>
            <VideoList handleVideoSelect={handleVideoSelect} videos={videosArr}/>
          </div>
        </div>
      </div>
     </div>
  );
};


export default App;
