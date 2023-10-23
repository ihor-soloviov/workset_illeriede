/* eslint-disable react/prop-types */
import "./PortfolioFeedback.scss"
const Star = () => (
  <svg
    width="27"
    height="26"
    viewBox="0 0 27 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.8194 23.8333L8.59044 16.2229L2.65063 11.1042L10.4977 10.4271L13.5494 3.25L16.601 10.4271L24.4481 11.1042L18.5083 16.2229L20.2793 23.8333L13.5494 19.7979L6.8194 23.8333Z"
      fill="#FCAD1E"
    />
  </svg>
);

export const Rating = ({ rating }) => {
  const maxStars = 5;
  const limitedRating = Math.max(0, Math.min(rating, maxStars));

  const stars = Array.from({ length: limitedRating }, (_, index) => (
    <Star key={index} />
  ));

  return <div className="star-wrapper">{stars}</div>;
};