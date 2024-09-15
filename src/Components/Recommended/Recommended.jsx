import React, { useEffect, useState } from 'react';
import './Recommended.css'
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
import { API_KEY, value_converter } from '../../data';
 

const Recommended = ({categoryId}) => {
const[apiData,setApiData]=useState([]);
const fetchData = async() =>{
  const relatedVideo_url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`

 await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items))
}
useEffect(()=>{
  fetchData
},[])
  return (
  
<div className='recommended'>
<div className="side-video-list">
<img src={thumbnail1} alt="" />
<div className="vid-info">
  <h4>Laugh your way through the latest in tech with our cartoon</h4>
  <p>GreatStack</p>
</div>
</div>
<div className="side-video-list">
<img src={thumbnail2} alt="" />
<div className="vid-info">
  <h4>deep dives into tech trends, reviews, and future tech innovations</h4>
  <p>Stack</p>
</div>
</div>
<div className="side-video-list">
<img src={thumbnail3} alt="" />
<div className="vid-info">
  <h4>Fueling your curiosity, one byte at a time</h4>
  
  <p>GreatStack</p>
</div>
</div>
<div className="side-video-list">
<img src={thumbnail4} alt="" />
<div className="vid-info">
  <h4>Explore the unknown, redefine the possible</h4>
  <p>GreatStack</p>
</div>
</div>
<div className="side-video-list">
<img src={thumbnail5} alt="" />
<div className="vid-info">
  <h4>Elevate your hustle, inspire your grind</h4>
  <p>GreatStack</p>
</div>
</div>
<div className="side-video-list">
<img src={thumbnail6} alt="" />
<div className="vid-info">
  <h4>Laugh your way through the latest in tech with our cartoon</h4>
  <p>GreatStack</p>
</div>
</div>
<div className="side-video-list">
<img src={thumbnail7} alt="" />
<div className="vid-info">
  <h4>The recipe for success starts here.</h4>
  <p>GreatStack</p>
</div>
</div>
<div className="side-video-list">
<img src={thumbnail8} alt="" />
<div className="vid-info">
  <h4>Laugh your way through the latest in tech with our cartoon</h4>
  <p>Life in Pixels</p>
</div>
</div>
<div className="side-video-list">
<img src={thumbnail9} alt="" />
<div className="vid-info">
  <h4>Laugh your way through the latest in tech with our cartoon</h4>
  <p>GreatStack</p>
</div>
</div>
<div className="side-video-list">
<img src={thumbnail10} alt="" />
<div className="vid-info">
  <h4>For creative DIY projects and artistic endeavors.</h4>
  <p>CineCraft</p>
</div>
</div>
<div className="side-video-list">
<img src={thumbnail11} alt="" />
<div className="vid-info">
  <h4>Laugh your way through the latest in tech with our cartoon</h4>
  <p>The Curious Creator</p>
</div>
</div>
<div className="side-video-list">
<img src={thumbnail12} alt="" />
<div className="vid-info">
  <h4>Laugh your way through the latest in tech with our cartoon</h4>
  <p>Vibe with Me</p>
</div>
</div>
<div className="side-video-list">
<img src={thumbnail13} alt="" />
<div className="vid-info">
  <h4>Where every adventure begins.</h4>
  <p>GreatStack</p>
</div>
</div>
<div className="side-video-list">
<img src={thumbnail14} alt="" />
<div className="vid-info">
  <h4>gaming, tech, or pop culture content.</h4>
  <p>The Quantum Quest</p>
</div>
</div>
<div className="side-video-list">
<img src={thumbnail15} alt="" />
<div className="vid-info">
  <h4>Explore the unknown, redefine the possible</h4>
  <p>Next Level Nerd</p>
</div>
</div>
<div className="side-video-list">
<img src={thumbnail16} alt="" />
<div className="vid-info">
  <h4>Vibes, creativity, and endless possibilities.</h4>
  <p>GreatStack</p>
</div>
</div>
    </div>
  )
}

export default Recommended