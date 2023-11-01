/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Slide } from "../Slide";
import { Navigation as Nav } from "../Navigation";
import { fetchSliderPhotos } from "../../../utils/dataLoader";

import "swiper/scss";
import "swiper/scss/pagination";
import "./PhotoSlider.scss";

export const PhotoSlider = () => {
  const [content, setContent] = useState(null);
  const swiperRef = useRef();

  const getData = useCallback(async () => {
    const response = await fetchSliderPhotos();
    setContent(response);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="photoSlider">
      <Nav prev="prevPhoto" next="nextPhoto" title={"Unsere Referenzen"} />
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        direction={"horizontal"}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        navigation={{
          nextEl: ".nextPhoto",
          prevEl: ".prevPhoto",
        }}
        speed={400}
        autoplay={{ delay: 50000, disableOnInteraction: false }}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        className="photoSwiper"
      >
        {content &&
          content.map((slide) => {
            const { id, text, list, inner_slider, title } = slide;
            const images = inner_slider[0].imgs.data;

            return (
              <SwiperSlide key={id}>
                <Slide text={text} list={list} images={images} title={title} />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="swiper-pagination" />
    </div>
  );
};
