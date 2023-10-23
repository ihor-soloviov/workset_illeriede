/* eslint-disable react/prop-types */
export const ButtonArrow = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`button-arrow button-arrow_size-${
        props.size
      } button-arrow_color-${props.color} button-arrow_direction-${
        props.direction
      } ${
        props.swiperDirection
          ? `swiper-` + props.swiperDirection
          : props.swiperDirection
      }`}
    >
      <svg viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.15039 19.1C0.900391 18.85 0.775391 18.554 0.775391 18.212C0.775391 17.87 0.900391 17.5743 1.15039 17.325L8.47539 10L1.12539 2.65C0.892057 2.41667 0.775391 2.125 0.775391 1.775C0.775391 1.425 0.900391 1.125 1.15039 0.875C1.40039 0.625 1.69639 0.5 2.03839 0.5C2.38039 0.5 2.67606 0.625 2.92539 0.875L11.3254 9.3C11.4254 9.4 11.4964 9.50833 11.5384 9.625C11.5804 9.74167 11.6011 9.86667 11.6004 10C11.6004 10.1333 11.5794 10.2583 11.5374 10.375C11.4954 10.4917 11.4247 10.6 11.3254 10.7L2.90039 19.125C2.66706 19.3583 2.37939 19.475 2.03739 19.475C1.69539 19.475 1.39972 19.35 1.15039 19.1Z"
          fill="white"
        />
      </svg>
    </button>
  );
};
