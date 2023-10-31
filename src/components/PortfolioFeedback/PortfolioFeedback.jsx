import React, { useEffect, useRef, useState } from "react";
import { Rating } from "./Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import apiReviews from "./reviews.json";
import { videoSwiperSettings } from "../../utils/swiperSettings";
import { Navigation } from "../Navigation";
import "./PortfolioFeedback.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const PortfolioFeedback = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(apiReviews);
  }, []);

  const portfolioRef = useRef(null);

  return (
    <div className="portfolio-feedback">
      <Navigation prev="prevFeed" next="nextFeed" />
      <div className="portfolio-feedback__items">
        <Swiper
          {...videoSwiperSettings}
          onBeforeInit={(swiper) => {
            portfolioRef.current = swiper;
          }}
          navigation={{
            nextEl: ".nextFeed",
            prevEl: ".prevFeed",
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
                          <p className="data">
                            {review.relative_time_description}
                          </p>
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
                          </div>
                        </div>
                        <p className="data">
                          {review.relative_time_description}
                        </p>
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
