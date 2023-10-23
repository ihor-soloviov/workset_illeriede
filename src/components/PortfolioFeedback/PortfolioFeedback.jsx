import React, { useEffect, useRef, useState } from "react";
import { ButtonArrow } from "../Buttons/ButtonArrow";
import { Rating } from "./Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import { fetchReviews } from "../../../utils/dataLoader";
import apiReviews from "./reviews.json";
import "./PortfolioFeedback.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const PortfolioFeedback = () => {
  // const containerRef = useRef(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // fetchReviews();
    setReviews(apiReviews);
  }, []);

  const portfolioRef = useRef(null);

  return (
    <div className="portfolio-feedback">
      <div className="container">
        <div className="portfolio-feedback__header">
          <h3>
            Feedback unserer <br /> Kunden
          </h3>
          {window.innerWidth > 1024 && (
            <div className="portfolio-feedback__header--buttons">
              <ButtonArrow
                size={"small"}
                direction={"left"}
                color={"outline-black"}
                onClick={() => portfolioRef.current?.slidePrev()}
              />
              <ButtonArrow
                size={"small"}
                direction={"right"}
                color={"outline-black"}
                onClick={() => portfolioRef.current?.slideNext()}
              />
            </div>
          )}
        </div>
      </div>
      <div className="portfolio-feedback__items">
        <Swiper
          modules={[Navigation, Pagination]}
          direction={"horizontal"}
          slidesPerView={window.innerWidth > 1024 ? 3 : 1}
          spaceBetween={36}
          speed={400}
          loop={true}
          autoplay={{ delay: 6000 }}
          grabCursor={true}
          pagination={{ clickable: true, el: ".portfolio-feedback__dots" }}
          onBeforeInit={(swiper) => {
            portfolioRef.current = swiper;
          }}
        >
          {reviews &&
            reviews.map((review) => (
              <SwiperSlide key={review.author_name}>
                <div className="feedback">
                  <div className="feedback-item">
                    {window.innerWidth < 1024 ? (
                      <React.Fragment>
                        <div className="feedback-item__head">
                          <img
                            className="head__photo"
                            src={review.profile_photo_url}
                            alt="profile_photo"
                          />
                          <div className="head__name">
                            <h4>{review.author_name}</h4>
                          </div>
                        </div>
                        <div className="rating">
                          <Rating
                            index={review.author_name}
                            rating={review.rating}
                          />
                          <p>{review.relative_time_description}</p>
                        </div>
                      </React.Fragment>
                    ) : (
                      <div className="feedback-item__head">
                        <img
                          className="head__photo"
                          src={review.profile_photo_url}
                          alt="profile_photo"
                        />
                        <div className="head__name">
                          <h4>{review.author_name}</h4>
                          <div className="rating">
                            <Rating
                              index={review.author_name}
                              rating={review.rating}
                            />
                            <p>{review.relative_time_description}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="feedback-item__text">{review.text}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div style={{ height: "5px" }} className="portfolio-feedback__dots" />
      </div>
    </div>
  );
};
