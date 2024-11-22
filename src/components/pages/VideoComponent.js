import React from 'react';
import vid from "../../video/vid.mp4"

const VideoComponent = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-full max-w-3xl">
          <video
            className="w-full h-[30rem] rounded-lg shadow-lg"
            autoPlay
            muted
            controls
            src={vid} // Replace with your video URL
            alt="Sample Video"
          />
        </div>
      </div>
    );
  };  

export default VideoComponent;
