/* eslint-disable react/prop-types */

import { Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/pagination";
import "./SliderContainer.scss";

export const SliderContainer = ({ swiperRef, children, timer, pagination }) => {
  return (
    <div className="sliderContainer">
      <Swiper
        modules={[Pagination, Autoplay]}
        direction={"horizontal"}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: `.${pagination}`,
        }}
        speed={400}
        loop={true}
        autoplay={{ delay: timer }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper"
      >
        {children}
      </Swiper>
      <div className={`${pagination}`}></div>
    </div>
  );
};
