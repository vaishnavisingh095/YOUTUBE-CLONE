import React, { useState, useEffect } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import {API_KEY, value_converter} from '../../data'
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
import thumbnail9 from '../../assets/thumbnail9.jpeg';
import thumbnail10 from '../../assets/thumbnail10.jpeg';
import thumbnail11 from '../../assets/thumbnail11.jpeg';
import thumbnail12 from '../../assets/thumbnail12.jpeg';
import thumbnail13 from '../../assets/thumbnail13.jpeg';
import thumbnail14 from '../../assets/thumbnail14.jpeg';
import thumbnail15 from '../../assets/thumbnail15.jpeg';
import thumbnail16 from '../../assets/thumbnail16.jpeg';
import moment from 'moment';



const Feed = ({category}) => {

const [data,setData] = useState([]);

  const fetchData = async ()=>{
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
    await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
  }

  useEffect(()=>{
    fetchData();
  },[category])


  return (
    <div className="feed">
      {data.map((item,index)=>{
        return(
          <Link to = {`video/20/4521`}className='card'>
        <img src={item.snippet.thumbnails.medium.url} alt="Thumbnail 1" />
        <h2>{item.snippet.title}</h2>
        <h3>{item.snippet.channelTitle}</h3>
        <p>{value_converter(item.statistics.viewCount)}views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
      </Link>

        
        )})}
    </div>
  )}


export default Feed;
