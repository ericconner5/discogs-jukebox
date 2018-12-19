import React from 'react';
// import YouTube from 'react-youtube';
import YoutubeEmbedVideo from "youtube-embed-video";


function YouTubePlayer(){
  return (
    <div className="youtube">
      <YoutubeEmbedVideo videoId="dZdGb3LiJ2E" suggestions={false} />
    </div>
  )
};

export default YouTubePlayer;
