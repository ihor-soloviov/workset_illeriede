/* eslint-disable react/prop-types */
import { m } from "framer-motion";
import { opacityAnimation } from "../../animations/animations";
import { Container } from "../Container";
import arrow from "../../assets/arrow.svg";
import logo from "../../assets/logo.svg";
import location from "../../assets/location.svg";

import "./HomeSection.scss";
import { Presentation } from "../Presentation/Presentation";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const HomeSection = () => {
  const scrollToLead = () => {
    const target = document.getElementById("lead");
    target.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="homeSection">
      {window.innerWidth < 1024 && (
        <div className="homeSection-header">
          <div className="header-logo">
            <LazyLoadImage src={logo} alt="logo" />
          </div>
        </div>
      )}
      <Container>
        {window.innerWidth > 1024 && (
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
        <m.div
          className="location"
          initial="hidden"
          whileInView="visible"
          variants={opacityAnimation}
          viewport={{ once: true }}
        >
          <LazyLoadImage src={location} alt="location icon" />
          <p className="location-name">Illerrieden</p>
        </m.div>
        <h2 className="location-header">PV-Montage für Sie </h2>
        <m.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.7 }}
          className="location-scroll"
          onClick={() => scrollToLead()}
        >
          <p>Zur Terminbuchung</p>
          <LazyLoadImage src={arrow} alt="arow icon" />
        </m.button>
      </div>
    </div>
  );
};
