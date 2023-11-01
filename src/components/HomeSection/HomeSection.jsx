/* eslint-disable react/prop-types */
import { m } from "framer-motion";
import { opacityAnimation } from "../../animations/animations";
import { Container } from "../Container";
import arrow from "../../assets/arrow.svg";
import logo from "../../assets/logo.svg";

import "./HomeSection.scss";
import "../Container/Container.scss"
import { Presentation } from "../Presentation/Presentation";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const HomeSection = () => {
  const scrollToLead = () => {
    const target = document.getElementById("lead");
    target.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      variants={opacityAnimation}
      viewport={{ once: true }}
      className="homeSection"
    >
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
          <p className="location-name">PV-Förderprogramm</p>
        </m.div>
        <h2 className="location-header">
          PV-Förderprogramm für <br /> nur kurze Zeit!
        </h2>
        <m.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
          className="location-scroll"
          onClick={() => scrollToLead()}
        >
          <p>Zur Terminbuchung</p>
          <LazyLoadImage src={arrow} alt="arow icon" />
        </m.button>
      </div>
    </m.div>
  );
};
