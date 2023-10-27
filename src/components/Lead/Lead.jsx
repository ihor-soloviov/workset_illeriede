import { useEffect, useState } from "react";
import "./Lead.scss";
import { FirstStep } from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";
import { ThirdStep } from "./components/ThirdStep";
import { FourthStep } from "./components/FourthStep";
import { FifthStep } from "./components/FifthStep";
import { SixthStep } from "./components/SixthStep";
import { SeventhStep } from "./components/SeventhStep";
import { Done } from "./components/Done";
import { Loader } from "./components/Loader";
import { sendingData } from "./api/sendData";

export const Lead = () => {
  const [step, setStep] = useState(1);
  const [zweck, setZweck] = useState(null);
  const [energieverbrauch, setEnergieverbrauch] = useState(0);
  const [dachForm, setDachForm] = useState(null);
  const [dachdatum, setDachdatum] = useState(null);
  const [verfugbare, setVerfugbare] = useState(null);
  const [adresse, setAdresse] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    sendingData(
      zweck,
      energieverbrauch,
      dachForm,
      dachdatum,
      verfugbare,
      adresse,
      userData
    );
  }, [userData]);

  const switchComponent = () => {
    switch (step) {
      case 1:
        return <FirstStep setZweck={setZweck} setStep={setStep} />;

      case 2:
        return (
          <SecondStep
            setStep={setStep}
            setEnergieverbrauch={setEnergieverbrauch}
          />
        );

      case 3:
        return <ThirdStep setDachForm={setDachForm} setStep={setStep} />;

      case 4:
        return <FourthStep setDachdatum={setDachdatum} setStep={setStep} />;

      case 5:
        return (
          <FifthStep
            setVerfügbare={setVerfugbare}
            setStep={setStep}
            zweck={zweck}
          />
        );

      case 6:
        return (
          <SixthStep
            setAdresse={setAdresse}
            setStep={setStep}
            setLoader={setLoader}
          />
        );

      case 7:
        return <SeventhStep setStep={setStep} setUserData={setUserData} />;

      case 8:
        return <Done setStep={setStep} />;

      default:
        return <h1>Page not found</h1>;
    }
  };

  return (
    <div className="lead" id="lead">
      <div className="lead-container">{switchComponent()}</div>
      {loader && <Loader />}
    </div>
  );
};
