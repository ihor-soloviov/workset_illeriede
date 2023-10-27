/* eslint-disable react/prop-types */
import { Progress } from "../Progress";
import { Form } from "../Form";
import "./SixthStep.scss";
import { useState } from "react";
import classNames from "classnames";

export const SixthStep = ({ setStep, setAdresse, setLoader }) => {
  const [isVisible, setIsVisible] = useState(true);

  const formItems = ["PLZ", "Ort", "Straße", "Hausnummer"];

  const handleAddresse = (value) => {
    const target = document.getElementById("top");
    target.scrollIntoView({ behavior: "smooth" });
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
      setIsVisible(false);
      setAdresse(value);
      setStep(7);
    }, 3500);
  };

  return (
    <>
      <div id="top" className={classNames("seventhStep", { "slide-enter": !isVisible })}>
        <Progress second="true" />
        <div className="seventhStep__header">
          <h1>Wo ist das PV-Projekt geplant?</h1>
        </div>
        <Form handler={handleAddresse} formItems={formItems} step='step-6' />
        <div className="rules">
          <div className="rules__inner">
            <div className="rules__item">
              <h3>Sichere Übertragung</h3>
              <p>
                Deine Daten werden per TSL verschlüsselt an uns übermittelt und
                nicht an andere weitergegeben.
              </p>
            </div>
            <div className="rules__item">
              <h3>100% Kostenfrei</h3>
              <p>
                Deine persönliche Stromkostenersparnis und dein individuelles
                Angebot sind völlig kostenlos und unverbindlich.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
