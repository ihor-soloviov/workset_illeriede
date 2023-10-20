/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";
import { Slide } from "../Slide";
import { fetchSliderPhotos } from "../../../utils/dataLoader";

import { SwiperSlide } from "swiper/react";
import { SliderContainer } from "../SliderContainer/SliderContainer";

import "swiper/scss";
import "swiper/scss/pagination";

import "./PortfolioSlider.scss";

export const PortfolioSlider = ({ setIsZumOpened }) => {
  const [content, setContent] = useState(null);

  const getData = useCallback(async () => {
    const response = await fetchSliderPhotos();
    setContent(response);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="portfolioSlider">
      <SliderContainer>
        {content &&
          content.map((slide) => {
            const { id, text, list, inner_slider, title } = slide;
            const images = inner_slider[0].imgs.data;

            return (
              <SwiperSlide key={id}>
                <Slide
                  setIsZumOpened={setIsZumOpened}
                  text={text}
                  list={list}
                  images={images}
                  title={title}
                />
              </SwiperSlide>
            );
          })}
      </SliderContainer>
    </div>
  );
};
