/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef, useState } from "react";
import { Slide } from "../Slide";
import { fetchSliderPhotos } from "../../../utils/dataLoader";

import { SwiperSlide, useSwiper } from "swiper/react";
import { SliderContainer } from "../SliderContainer/SliderContainer";

import { motion } from "framer-motion";
import arrLeft from "../../assets/arrLeft.svg";
import arrRight from "../../assets/arrRight.svg";
import "swiper/scss";
import "swiper/scss/pagination";

import "./PhotoSlider.scss";
import { Container } from "../Container";

export const PhotoSlider = () => {
  const [content, setContent] = useState(null);
  const swiperRef = useRef(null);

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
            className="photoSlider__button"
            onClick={() => swiperRef?.current?.slidePrev()}
          >
            <img src={arrLeft} alt="arrLeft" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.7 }}
            className="photoSlider__button"
            onClick={() => swiperRef?.current?.slideNext()}
          >
            <img src={arrRight} alt="arrRight" />
          </motion.button>
        </div>
      </Container>
      <SliderContainer
        timer={8000}
        swiperRef={swiperRef}
        pagination={"swiper-pagination"}

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
      </SliderContainer>
    </div>
  );
};
