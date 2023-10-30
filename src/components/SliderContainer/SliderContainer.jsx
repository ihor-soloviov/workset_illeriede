/* eslint-disable react/prop-types */



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
        autoplay={{ running: true, delay: 5000 }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
          console.log(swiper);
        }}
        className="mySwiper"
      >
        {children}
      </Swiper>
      <div className={`${pagination}`}></div>
    </div>
  );
};
