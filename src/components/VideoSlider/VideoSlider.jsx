/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { SliderContainer } from "../SliderContainer/SliderContainer";
import { VideoSlide } from "./VideoSlide";
import videoCodes from "./api.json";
import "./VideoSlider.scss";
import { SwiperSlide } from "swiper/react";
// import { SwiperSlide } from "swiper/react";
// import { Slide } from "../Slide";

export const VideoSlider = () => {
  const [videos, setVideos] = useState(null);
  const videoRef = useRef(null);
  useEffect(() => {
    setVideos(videoCodes);
  }, []);

  // const currentSlideHandler = (ref) => {
  //   setCurrentSlider(ref?.current?.activeIndex);
  //   console.log("slide change", ref?.current?.activeIndex);
  // };

  return (
    <div className="videoSlider">
      <SliderContainer
        timer={40000}
        swiperRef={videoRef}
        pagination={"videoPagination"}
        headerText={"Unsere Objekte"}
      >
        {videos &&
          videos.map((video) => {
            const { id, video_code } = video;

            return (
              <SwiperSlide key={id}>
                <VideoSlide video_code={video_code} />
              </SwiperSlide>
            );
          })}
      </SliderContainer>
    </div>
  );
};
