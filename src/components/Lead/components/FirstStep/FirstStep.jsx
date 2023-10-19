/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import "./FirstStep.scss";
import { Progress } from "../Progress";
import first from "./assets/firstDesktop.svg";
import second from "./assets/secondDesktop.svg";
import { useState } from "react";
import classNames from "classnames";
// import { useAnalyticsEventTracker } from "../../../../../utils/useAnalyticsEventTracker";

export const FirstStep = ({ setZweck, setStep }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleOption = (value) => {
    setIsVisible(false);
    setZweck(value);
    setTimeout(() => {
      setStep(2);
    }, 500);
  };

  return (
    <div className={classNames("firstStep", { "slide-enter": !isVisible })}>
      <div className="firstStep-head">
        <div className="firstStep-head__top">
          <h1>Was kostet dich dein PV-Projekt?</h1>
          <p>Fragebogen ausfüllen und Angebot sichern</p>
        </div>
        <div className="firstStep-head__bot">
          <Progress />
        </div>
      </div>
      <div className="firstStep-options">
        <h1>Welcher Immobilientyp</h1>
        <div className="options__grid">
          <div className="option__grid">
            <button
              className="grid-item step-1"
              onClick={() => {
                // useAnalyticsEventTracker("Step1");
                handleOption("Privathaushalt");
              }}
            >
              <img
                src={first}
                alt="Privathaushalt"
                className="grid-item__image step-1"
              />
            </button>
            <p className="step-1">Privathaushalt</p>
          </div>
          <div className="option__grid">
            <button
              className="grid-item step-1"
              onClick={() => handleOption("Gewerbe")}
            >
              <img
                src={second}
                alt="Gewerbe"
                className="grid-item__image step-1"
              />
            </button>
            <p className="step-1">Gewerbe</p>
          </div>
        </div>
      </div>
    </div>
  );
};
