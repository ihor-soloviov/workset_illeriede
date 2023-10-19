/* eslint-disable react/prop-types */
import { Container } from "../Container";
import arrow from "../../assets/arrow.svg";
import logo from "../../assets/logo.svg";
import location from "../../assets/location.svg";

import "./HomeSection.scss";
import { Presentation } from "../Presentation/Presentation";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const HomeSection = () => {
  return (
    <div className="homeSection">
      {window.innerWidth > 1024 && (
        <div className="homeSection-header">
          <div className="header-logo">
            <LazyLoadImage src={logo} alt="logo" />
          </div>
        </div>
      )}
      <Container>
        {window.innerWidth < 1024 && (
          <div className="homeSection-header">
            <div className="header-logo">
              <LazyLoadImage src={logo} alt="logo" />
            </div>
          </div>
        )}

        <h1>Komplette PV-Anlage</h1>

        <Presentation />
      </Container>
      <div className="homeSection__location">
        <div className="location">
          <LazyLoadImage src={location} alt="location icon" />
          <p className="location-name">Illerrieden</p>
        </div>
        <h2 className="location-header">PV-Montage für Sie </h2>
        <button className="location-scroll">
          <p>Zur Terminbuchung</p>
          <LazyLoadImage src={arrow} alt="arow icon" />
        </button>
      </div>
    </div>
  );
};
