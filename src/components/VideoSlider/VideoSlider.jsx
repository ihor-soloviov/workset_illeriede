/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import videoCodes from "./api.json";
import { SliderContainer } from "../SliderContainer/SliderContainer";
import { VideoSlide } from "./VideoSlide";
import { SwiperSlide } from "swiper/react";
import "./VideoSlider.scss";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Container } from "../Container";

export const VideoSlider = () => {
  const [videos, setVideos] = useState(null);
  const videoRef = useRef(null);
  useEffect(() => {
    setVideos(videoCodes);
  }, []);

  return (
    <div className="videoSlider">
      <Container>
        <h2>Unsere Objekte</h2>
      </Container>
      <SliderContainer
        timer={40000}
        swiperRef={videoRef}
        pagination={"videoPagination"}
      >
        {videos &&
          videos.map((video) => {
            const { id, video_code } = video;

            return (
              <SwiperSlide key={id}>
                <LazyLoadComponent>
                  <VideoSlide video_code={video_code} />
                </LazyLoadComponent>
              </SwiperSlide>
            );
          })}
      </SliderContainer>
    </div>
  );
};
