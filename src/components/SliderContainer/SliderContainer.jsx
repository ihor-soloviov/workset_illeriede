/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Container } from "../Container";

import { Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/pagination";
import "./SliderContainer.scss";

export const SliderContainer = ({ children }) => {
  const swiperRef = useRef(null);
  return (
    <div className="sliderContainer">
      <Container>
        <h2>Unsere Referenzen</h2>
      </Container>

      <Swiper
        modules={[Pagination, Autoplay]}
        direction={"horizontal"}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        speed={400}
        loop={true}
        // autoplay={{ delay: 8000 }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper"
      >
        {children}
      </Swiper>
        <div className="swiper-pagination"></div>
    </div>
  );
};
