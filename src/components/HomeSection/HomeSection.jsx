/* eslint-disable react/prop-types */
import { Container } from "../Container";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/arrow.svg";
import starFace from "../../assets/starFace.png";
import exploFace from "../../assets/exploFace.png";

import "./HomeSection.scss";
import { Presentation } from "../Presentation/Presentation";

export const HomeSection = () => {
  const scrollToTable = () => {
    window.scrollTo({
      top: 3550,
      behavior: "smooth",
    });
  };

  return (
    <div className="homeSection">
      {window.innerWidth > 1024 && (
        <div className="homeSection-header">
          <div className="header-logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
      )}
      <Container>
        {window.innerWidth < 1024 && (
          <div className="homeSection-header">
            <div className="header-logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
        )}

        <h1>Komplette PV-Anlage</h1>

        <Presentation />

        <button className="homeSection-button" onClick={scrollToTable}>
          <p>Preise</p> <img src={arrow} alt="Preise" />
        </button>

        <div className="sonderpreise">
          Sonderpreise <img  src={exploFace} alt="exploding-face" />
          <img  src={starFace} alt="star-face" />{" "}
          {window.innerWidth < 1024 && <br />}
          Greifen Sie jetzt zu!
        </div>
      </Container>
    </div>
  );
};
