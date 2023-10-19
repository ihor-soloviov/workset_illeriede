/* eslint-disable react/prop-types */
import { useState } from "react";
import classNames from "classnames";
import { Progress } from "../Progress";
import "./ThirdStep.scss";
import flach from "./assets/flach.svg";
import pult from "./assets/pult.svg";
import sattel from "./assets/sattel.svg";
import zelt from "./assets/zelt.svg";
import sonstiges from "./assets/sonstiges.svg";

export const ThirdStep = ({ setDachForm, setStep }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleOption = (value) => {

    setIsVisible(false);
    setDachForm(value);
    setTimeout(() => {
      setStep(4);
    }, 500);
  };

  return (
    <div className={classNames("thirdStep", { "slide-enter": !isVisible })}>
      <Progress />
      <div className="thirdStep-header">
      <h1>Um welche Dachform handelt es sich?</h1>
      </div>
      <div className="flex__five">
        <button
          className="flex__item step-3"
          onClick={() => handleOption("Flachdach")}
        >
          <img className="step-3" src={flach} alt="Flachdach" />
          <p className="step-3">Flachdach</p>
        </button>
        <button className="flex__item step-3" onClick={() => handleOption("Pultdach")}>
          <img className="step-3" src={pult} alt="Pultdach" />
          <p className="step-3">Pultdach</p>
        </button>
        <button
          className="flex__item step-3"
          onClick={() => handleOption("Satteldach")}
        >
          <img className="step-3" src={sattel} alt="Satteldach" />
          <p className="step-3">Satteldach</p>
        </button>
        <button className="flex__item step-3" onClick={() => handleOption("Zeltdach")}>
          <img className="step-3" src={zelt} alt="Zeltdach" />
          <p className="step-3">Zeltdach</p>
        </button>
        <button
          className="flex__item step-3"
          onClick={() => handleOption("Sonstiges Dach")}
        >
          <img className="step-3" src={sonstiges} alt="Sonstiges Dach" />
          <p className="step-3">Sonstiges Dach</p>
        </button>
      </div>
    </div>
  );
};
