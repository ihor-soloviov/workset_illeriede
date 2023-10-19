/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Form } from "../Form";
import "./SeventhStep.scss";
import classNames from "classnames";
import { Confetti } from "../Confetti";
import { useAnalyticsEventTracker } from "../../../../../utils/useAnalyticsEventTracker";

export const SeventhStep = ({ setUserData, setStep }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [enable, setEnable] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [device, setDevice] = useState({ area: 800, value: 150 });
  const [isConfetti, setIsConfetti] = useState(false);
  const [zeitpunkt, setZeitpunkt] = useState(null);

  const formItems = ["Vorname", "Nachname", "E-Mail Adresse", "Telefonnummer"];

  const handleUserData = (value) => {
    window.scrollTo({
      top: 4755,
      behavior: "smooth",
    });
    
    useAnalyticsEventTracker()

    setIsVisible(false);
    if (zeitpunkt) {
      value.zeitpunkt = zeitpunkt;
    }
    setUserData(value);

    setTimeout(() => {
      setStep(8);
    }, 500);
  };

  useEffect(() => {
    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      setScreenWidth(newScreenWidth);

      let newDevice;

      if (newScreenWidth < 836) {
        newDevice = { area: 200, value: 350 };
      } else if (newScreenWidth < 1200) {
        newDevice = { area: 400, value: 250 };
      } else {
        newDevice = { area: 800, value: 150 };
      }

      setDevice(newDevice);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  useEffect(() => {
    const enableTimeout = setTimeout(() => {
      setEnable(true);
    }, 500);

    const confettiTimeout = setTimeout(() => {
      setIsConfetti(true);
    }, 750);

    const confettiClearTimeout = setTimeout(() => {
      setIsConfetti(false);
    }, 3000);

    return () => {
      setEnable(false);
      clearTimeout(enableTimeout);
      clearTimeout(confettiTimeout);
      clearTimeout(confettiClearTimeout);
    };
  }, []);

  return (
    <section style={{ display: "flex", flexDirection: "column" }}>
      <div
        className={classNames("eighthStep", {
          shown: enable,
          "slide-enter": !isVisible,
        })}
      >
        <span>Glückwunsh!</span>
        <div className="eighthStep__header">
          <h1>Dein PV-Projekt können wir realisieren.</h1>
          <p>Wen soll unser Berater kontaktieren?</p>
        </div>

        <Form
          handler={handleUserData}
          formItems={formItems}
          seventhStep={true}
          setZeitpunkt={setZeitpunkt}
          zeitpunkt={zeitpunkt}
          step="step-7"
        />

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
      {isConfetti && <Confetti device={device} />}
    </section>
  );
};
