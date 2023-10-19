/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Done.scss";
import classNames from "classnames";

export const Done = ({setStep}) => {
  const [isVisible, setIsVisible] = useState(true);

  const toFirstStep = () => {
    setIsVisible(false);
    setTimeout(() => {
      setStep(1);
    }, 500);
  };

  return (
    <div className={classNames("done", { "to-start": !isVisible })}>
      <div className="done__swoosh"></div>
      <div className="done__header">
        <h1>Das Team der WorkSET dankt!</h1>
        <p>In Kürze wirst du kontaktiert</p>
      </div>

      <button onClick={toFirstStep} className="done__button">
        Weiter
      </button>
    </div>
  );
};
