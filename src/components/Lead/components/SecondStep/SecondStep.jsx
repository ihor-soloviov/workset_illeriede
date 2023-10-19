/* eslint-disable react/prop-types */
import classNames from "classnames";
import { Progress } from "../Progress";
import { Range } from "../Range";
import "./SecondStep.scss";
import { useState } from "react";

export const SecondStep = ({ setStep, setEnergieverbrauch }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [range, setRange] = useState(14000);
  const [isError, setIsError] = useState(false);

  const buttonHandler = () => {

    setIsVisible(false);
    setEnergieverbrauch(range);
    setTimeout(() => {
      setStep(3);
    }, 500);
  };

  return (
    <div className={classNames("secondStep", { "slide-enter": !isVisible })}>
      <div className="secondStep-main">
        <Progress />
        <div className="secondStep-header">
          <h1>Dein geschätzter Jahresstromverbrauch?</h1>
        </div>
        <Range
          range={range}
          setRange={setRange}
          setIsError={setIsError}
          isError={isError}
        />
      </div>
      <button
        disabled={isError}
        onClick={buttonHandler}
        className={classNames("secondStep-button", "step-2", { disabled: isError })}
      >
        Weiter
      </button>
    </div>
  );
};
