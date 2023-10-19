/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "../Container";
import { Slide } from "../Slide";
import { fetchSliderPhotos } from "../../../utils/dataLoader";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/pagination";

import "./PortfolioSlider.scss";

export const PortfolioSlider = ({setIsZumOpened}) => {
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
    <div className="portfolioSlider">
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
        {content &&
          content.map((slide) => {
            const { id, text, list, inner_slider, title } = slide;
            const images = inner_slider[0].imgs.data;

            return (
              <SwiperSlide key={id}>
                <Slide setIsZumOpened={setIsZumOpened} text={text} list={list} images={images} title={title} />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <Container>
        <div style={{ height: "20px" }} className="swiper-pagination"></div>
      </Container>
      
    </div>
  );
};
