import React, { useState, useEffect } from 'react';
import './PlayVideo.css'; // Ensure this CSS file exists for styling
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import moment from 'moment';
import { API_KEY, value_converter } from '../../data'; // Ensure these are correctly imported

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      const videoDetails_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;

      try {
        const response = await fetch(videoDetails_url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.items.length === 0) {
          throw new Error('No video data found');
        }
        setApiData(data.items[0]);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    if (apiData) {
      const fetchOtherData = async () => {
        const channelData_url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        const comment_url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=${API_KEY}`;

        try {
          const channelResponse = await fetch(channelData_url);
          if (!channelResponse.ok) {
            throw new Error('Network response was not ok');
          }
          const channelData = await channelResponse.json();
          setChannelData(channelData.items[0]);

          const commentResponse = await fetch(comment_url);
          if (!commentResponse.ok) {
            throw new Error('Network response was not ok');
          }
          const commentData = await commentResponse.json();
          setCommentData(commentData.items);
        } catch (error) {
          setError(error.message);
        }
      };

      fetchOtherData();
    }
  }, [apiData, videoId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!apiData) {
    return <div>Loading...</div>;
  }

  const { snippet, statistics } = apiData;

  return (
    <div className='play-video'>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="no-referrer"
        allowFullScreen
      ></iframe>
      <h3>{snippet.title}</h3>
      <div className="play-video-info">
        <p>{value_converter(statistics.viewCount)} views &bull; {moment(snippet.publishedAt).fromNow()}</p>
        <div>
          <span><img src={like} alt="Like" />{value_converter(statistics.likeCount)}</span>
          <span><img src={dislike} alt="Dislike" />{value_converter(statistics.dislikeCount)}</span>
          <span><img src={share} alt="Share" />{value_converter(statistics.shareCount)}</span>
          <span><img src={save} alt="Save" />{value_converter(statistics.saveCount)}</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData ? channelData.snippet.thumbnails.default.url : ''} alt="Publisher" />
        <div>
          <p>{snippet.channelTitle}</p>
          <span>{value_converter(channelData ? channelData.statistics.subscriberCount : 0)} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{snippet.description.slice(0, 250)}</p>
        <hr />
        <h4>{value_converter(statistics.commentCount)} Comments</h4>
        {commentData.map((item, index) => (
          <div key={index} className="comment">
            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="User" />
            <div>
              <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
              <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
              <div className="comment-action">
                <img src={like} alt="Like" /> <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                <img src={dislike} alt="Dislike" /> <span>{value_converter(item.snippet.topLevelComment.snippet.dislikeCount)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayVideo;
