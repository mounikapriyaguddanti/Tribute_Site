// VideoComponent.js
import React from 'react';


const VideoComponent = () => {
  return (
    <div className="video-container">
      <h2>Video Tribute to Dr. A.P.J. Abdul Kalam</h2>
      <div className="video-wrapper">
        <iframe
          width="260"
          height="315"
          src="https://www.youtube.com/embed/aIzAY8ymtNk"
          title="Dr. A.P.J. Abdul Kalam - Life Journey of a Great Leader"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoComponent;