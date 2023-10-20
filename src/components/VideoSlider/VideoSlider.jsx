/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { SliderContainer } from "../SliderContainer/SliderContainer";
import { VideoSlide } from "./VideoSlide";
import videoCodes from "./api.json";
import "./VideoSlider.scss";
import { SwiperSlide } from "swiper/react";
// import { SwiperSlide } from "swiper/react";
// import { Slide } from "../Slide";

export const VideoSlider = () => {
  const [videos, setVideos] = useState(null);
  const [currentSlider, setCurrentSlider] = useState(null);
  useEffect(() => {
    setVideos(videoCodes);
    console.log(videoCodes);
  }, []);

  return (
    <div className="videoSlider">
      <SliderContainer>
        {videos &&
          videos.map((video) => {
            const { id, video_code } = video;

            return (
              <SwiperSlide key={id}>
                <VideoSlide video_code={video_code} isActive={currentSlider} index={id}/>
              </SwiperSlide>
            );
          })}
      </SliderContainer>
    </div>
  );
};
