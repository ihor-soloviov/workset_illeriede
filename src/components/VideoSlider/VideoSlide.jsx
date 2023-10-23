/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import YouTube from "react-youtube";
import classNames from "classnames";

export const VideoSlide = ({ video_code }) => {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlayerReady = (event) => {
    setPlayer(event.target);
  };

  const a = () => {
    if (player !== null) {
      if (isPlaying === true) {
        player.playVideo();
      } else if (isPlaying === false) {
        player.stopVideo();
      }
    }
  };

  useEffect(() => {
    a();
  }, [isPlaying]);

  const opts = {
    playerVars: {
      controls: 1,
    },
  };

  return (
    <div
      className="videoSlide"
      onClick={() => {
        a();
        setIsPlaying((prev) => !prev);
      }}
    >
      <div className="videoSlide-inner">
        <YouTube
          opts={opts}
          videoId={video_code}
          className="youTube__block"
          iframeClassName={classNames("youTube__video", { active: isPlaying })}
          onReady={onPlayerReady}
          onPause={() => setIsPlaying(false)}
        />
      </div>
    </div>
  );
};

// <div className="portfolio-video__video-wrapper">
// <div
//   className={`portfolio-video__play ${
//     isPlay && "portfolio-video__play--active"
//   }`}
//   onClick={() => {
//     setIsPlay(true);
//     if (isPlay === true) {
//       setIsPlay(false);
//     }
//     console.log(isPlay);
//   }}
// ></div>
// <VideoComp
//   className="portfolio-video__slide"
//   videoId={video_code}
//   index={index}
//   isPlay={isPlay}
// />
// </div>
