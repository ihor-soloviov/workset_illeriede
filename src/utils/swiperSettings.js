import { FreeMode, Navigation, Pagination } from "swiper/modules";

export const videoSwiperSettings = {
  modules: [Navigation, Pagination, FreeMode],
  direction: "horizontal",
  slidesPerView: "auto",
  freeMode: window.innerWidth > 1024 ? true : false,
  spaceBetween: 36,
  speed: 400,
  autoplay: { delay: 6000 },
  grabCursor: true,
  pagination: { clickable: true, el: ".portfolio-feedback__dots" }
};