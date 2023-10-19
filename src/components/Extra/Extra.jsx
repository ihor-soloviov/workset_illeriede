/* eslint-disable react/prop-types */
import star from "../../assets/star.svg";
import { Container } from "../Container";
import "./Extra.scss";

export const Extra = () => (
  <div className="extra">
    <Container>
      <div className="extra-inner">
        <h3>Upgrades</h3>
        <div className="extra-star">
          <img src={star} alt="star" />
          <div className="extra-span">
            <span>Mit 10 kWh Speicher</span>
            <span>2.499,90  EUR</span>
          </div>
        </div>
        <div className="extra-star">
          <img src={star} alt="star" />
          <div className="extra-span">
            <span>Mit einer Wallbox 22 kW</span>
            <span>1.999,90 EUR</span>
          </div>
        </div>
        <div className="extra-star">
          <img src={star} alt="star" />
          <div className="extra-span">
            <span>Mit Notstromlösung</span>
            <span>1.499,90  EUR</span>
          </div>
        </div>
      </div>

      <div className="extra-details">
        <p>*Inkl. Optimierer</p>
        <p>**Angebot gilt nur, wenn 2 MPP-Tracker geplant <br /> werden</p>
      </div>
    </Container>
  </div>
);
