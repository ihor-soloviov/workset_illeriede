/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Navigation as Nav } from "../Navigation";
import videoCodes from "./api.json";
import { VideoSlide } from "./VideoSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./VideoSlider.scss";

export const VideoSlider = () => {
  const [videos, setVideos] = useState(null);
  const videoRef = useRef(null);
  useEffect(() => {
    setVideos(videoCodes);
  }, []);

  return (
    <div className="videoSlider">
      <Nav prev="prevVideo" next="nextVideo" title={"Unsere Objekte"} />
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        direction={"horizontal"}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".videoPagination",
        }}
        navigation={{
          nextEl: ".nextVideo",
          prevEl: ".prevVideo",
        }}
        speed={400}
        onBeforeInit={(swiper) => (videoRef.current = swiper)}
        className="videoSwiper"
      >
        {videos &&
          videos.map((video) => {
            const { id, video_code } = video;

            return (
              <SwiperSlide key={id}>
                <LazyLoadComponent visibleByDefault={true}>
                  <VideoSlide video_code={video_code} />
                </LazyLoadComponent>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="videoPagination" />
    </div>
  );
};
