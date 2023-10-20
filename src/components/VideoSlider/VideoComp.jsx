/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

export const VideoComp = ({ videoId, isPlay }) => {
  const [player, setPlayer] = useState(null);
  const [play, setPlay] = useState(isPlay);
  const onPlayerReady = (event) => {
    setPlayer(event.target);
  };

  useEffect(() => {
    if (player !== null) {
      if (isPlay === true) {
        player.playVideo();
      } else if (isPlay === false) {
        player.stopVideo();
      }
    }
  }, [isPlay]);

  const opts = {
    playerVars: {
      controls: 1,
    },
  };

  return (
    <YouTube
      className="portfolio-video__slide"
      videoId={videoId}
      opts={opts}
      iframeClassName={`portfolio-video__video ${
        isPlay === true && "portfolio-video__video-active"
      }`}
      onReady={onPlayerReady}
    />
  );
};
