/* eslint-disable react/prop-types */
import { Container } from "../Container";
import anza from "../../assets/anza.svg";
import risiko from "../../assets/risiko.svg";
import natur from "../../assets/natur.svg";

import "./Procents.scss";

export const Procents = () => (
  <div className="procents">
    <Container>
      <div className="procents-item">
        <h2>0%</h2>
        <div className="procents-item__name">
          <img src={anza} alt="Anzahlung" />
          <p>Anzahlung</p>
        </div>
      </div>
      <div className="procents-item">
        <h2>0%</h2>
        <div className="procents-item__name">
          <img src={risiko} alt="Risiko" />
          <p>Risiko</p>
        </div>
      </div>
      <div className="procents-item">
        <h2>100%</h2>
        <div className="procents-item__name">
          <img src={natur} alt="Naturstrom" />
          <p>Naturstrom</p>
        </div>
      </div>
    </Container>
  </div>
);
