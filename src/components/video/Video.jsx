import React, { useState } from "react";
import { BsPlayFill } from "react-icons/bs";
import YouTube from "react-youtube";
import "./video.scss";

const Video = ({ videoThumbnail, videoID }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="video section">
      <div className="video__row row">
        {!isPlaying ? (
          <div
            className="video__item"
            style={{
              backgroundImage: `url(${videoThumbnail})`,
            }}
            onClick={handlePlay}
          >
            <div className="video__item__overlay"></div>
            <div className="video__item__play-icon">
              <BsPlayFill />
            </div>
          </div>
        ) : (
          <YouTube
            className="video__video"
            videoId={videoID}
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 1,
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Video;
