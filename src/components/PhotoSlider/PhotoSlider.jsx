/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef, useState } from "react";
import { Slide } from "../Slide";
import { fetchSliderPhotos } from "../../../utils/dataLoader";

import { Swiper } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/pagination";

import { SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import arrLeft from "../../assets/arrLeft.svg";
import arrRight from "../../assets/arrRight.svg";

import "./PhotoSlider.scss";
import { Container } from "../Container";

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
      <Container>
        <h2>Unser Referenzen</h2>
        <div className="photoSlider__buttons">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.7 }}
            className="photoSlider__button prev"
          >
            <img src={arrLeft} alt="arrLeft" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.7 }}
            className="photoSlider__button next"
          >
            <img src={arrRight} alt="arrRight" />
          </motion.button>
        </div>
      </Container>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        direction={"horizontal"}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        speed={400}
        loop={true}
        autoplay={{ delay: 5000 }}
        className="mySwiper"
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
