/* eslint-disable react/prop-types */
import { GridContainer } from "../GridContainer";
import { useState } from "react";
import { Progress } from "../Progress";
import classNames from "classnames";
import before2000 from "./assets/before2000.svg";
import after2000 from "./assets/after2000.svg";
import newOne from "./assets/newOne.svg";
import plan from "./assets/plan.svg";
import "./FourthStep.scss";

export const FourthStep = ({ setDachdatum, setStep }) => {
  const buttons = [
    { value: "Vor dem Jahr 2000", img: before2000 },
    { value: "Nach dem Jahr 2000", img: after2000 },
    { value: "Vor Kurzem", img: newOne },
    { value: "In Planung", img: plan },
  ];
  const [isVisible, setIsVisible] = useState(true);

  const handleOption = (value) => {

    setIsVisible(false);
    setDachdatum(value);
    setTimeout(() => {
      setStep(5);
    }, 500);
  };

  return (
    <div className={classNames("fourthStep", { "slide-enter": !isVisible })}>
      <Progress />
      <div className="fourthStep-header">
        <h1>Wann wurde dein Dach gebaut/saniert?</h1>
      </div>
      <GridContainer
        grid="grid__four"
        array={buttons}
        handleOption={handleOption}
        step="step-4"
      />
    </div>
  );
};
