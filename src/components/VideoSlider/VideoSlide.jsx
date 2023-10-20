/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { VideoComp } from "./VideoComp";

export const VideoSlide = ({ video_code, isActive, index }) => {
  const [isPlay, setIsPlay] = useState(null);
  useEffect(() => {
    if (isActive !== index) {
      setIsPlay(false);
    }
  }, [isActive]);

  return (
    <div className="portfolio-video__video-wrapper">
      <div
        className={`portfolio-video__play ${
          isPlay && "portfolio-video__play--active"
        }`}
        onClick={() => {
          setIsPlay(true);
          if (isPlay === true) {
            setIsPlay(false);
          }
          console.log(isPlay);
        }}
      ></div>
      <VideoComp
        className="portfolio-video__slide"
        videoId={video_code}
        isPlay={isPlay}
      />
    </div>
  );
};
