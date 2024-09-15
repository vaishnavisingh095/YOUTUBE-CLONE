import React from 'react';
import './Video.css';
import PlayVideo from '../../Components/PlayVideo/PlayVideo';
import Recommended from '../../Components/Recommended/Recommended';
import { useParams } from 'react-router-dom';

const Video = ({categoryId}) => {
  // const { videoId } = useParams(); // Use videoId from URL parameters
  const videoId = 'OyhoHq-_Xms';
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId}/>
      <Recommended categoryId={categoryId}/>
    </div>
  );
};

export default Video;
