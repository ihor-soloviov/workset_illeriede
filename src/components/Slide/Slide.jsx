/* eslint-disable react/prop-types */
import React, { useState } from "react";
import markerBlack from "../../assets/markerBlack.svg";
import "./Slide.scss";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Slide = React.memo(({ title, list, text, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container">
      <div className="slide" onClick={() => nextSlide()}>
        <div className="slide-image__block">
          <LazyLoadImage
          effect="blur"
            className="slide-image"
            src={`https://api.work-set.eu${images[currentIndex].attributes.url}`}
            alt="slide-photo"
          />
        </div>
        <div className="slide-info">
          <div className="slide-city">
            <img className="marker" src={markerBlack} alt="marker" />
            <p>{title}</p>
          </div>
          <p className="slide-text">{text}</p>
          <div className="slide-values">
            {list.map((el) => (
              <div className="slide-value " key={el.id}>
                <span className="key">{el.key}:</span>
                <span className="value">{el.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {window.innerWidth > 1024 && (
        <div className="slide-info__desktop">
          <div className="desktop-inner">
            <div className="slide-city">
              <img className="marker" src={markerBlack} alt="marker" />
              <p>{title}</p>
            </div>
            <p className="slide-text">{text}</p>
            <div className="slide-values">
              {list.map((el) => (
                <div className="slide-value" key={el.id}>
                  <span className="key">{el.key}:</span>
                  <span className="value">{el.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

Slide.displayName = "Slide";
