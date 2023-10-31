/* eslint-disable react/prop-types */
import line from "../../assets/line.svg";
import mainPic from "../../assets/mainPic.webp";

import "./Presentation.scss";

export const Presentation = () => (
  <div className="presentation">
    <div className="presentation-item">
      <div className="happy-hack"></div>
      <img className="benefit-line" src={line} alt="just a line" />
      <p className="presentation-benefit">
        Module Trina Glas-Glas <br /> (440 Watt)
      </p>
    </div>

    <div className="presentation-picture-block">
      <div className="picture-block">
        <img src={mainPic} alt="main-picture" />
      </div>
      <p>PV-Komponenten von Huawei</p>
    </div>
  </div>
);
