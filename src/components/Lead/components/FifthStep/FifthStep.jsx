/* eslint-disable react/prop-types */
import { useState } from "react";
import { GridContainer } from "../GridContainer";
import classNames from "classnames";
import one from "./assets/0-10.svg";
import two from "./assets/10-20.svg";
import three from "./assets/20-30.svg";
import four from "./assets/30+.svg";
import "./FifthStep.scss";
import { Progress } from "../Progress";

export const FifthStep = ({ setStep, setVerfügbare, zweck }) => {
  const buttons =
    zweck === "Privathaushalt"
      ? [
          { value: "0 - 20 m²", img: one },
          { value: "20 - 40 m²", img: two },
          { value: "40 - 100 m²", img: three },
          { value: "100+ m²", img: four },
        ]
      : [
          { value: "0 - 60 m²", img: one },
          { value: "60 - 200 m²", img: two },
          { value: "200 - 800 m²", img: three },
          { value: "800+ m²", img: four },
        ];
  const [isVisible, setIsVisible] = useState(true);

  const handleOption = (value) => {
    setIsVisible(false);
    setVerfügbare(value);
    setTimeout(() => {
      setStep(6);
    }, 500);
  };
  return (
    <div className={classNames("fifthStep", { "slide-enter": !isVisible })}>
      <Progress />
      <div className="fifthStep-header">
        <h1>Wie viel Fläche steht für eine Solaranlage ca. zur Verfügung?</h1>
      </div>
      <GridContainer
        grid="grid__four"
        array={buttons}
        handleOption={handleOption}
        step='step-5'
      />
    </div>
  );
};
