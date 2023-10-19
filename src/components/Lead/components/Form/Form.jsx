/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import "./Form.scss";
import arrow from "../../assets/Arrow.svg";
import classNames from "classnames";
import { useEffect, useState } from "react";


export const Form = ({ handler, formItems, seventhStep = false, setZeitpunkt, zeitpunkt, step }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onSubmit" });


  const [isSelectOpened, setIsSelectOpened] = useState(false);
  const [error, setError] = useState(false);

  const handleSelect = () => {
    setIsSelectOpened(true);
  };

  const onSender = (data) => {
    handler(data);
    reset();
  };

  useEffect(() => {
    if (zeitpunkt !== null) {
      setError(false);
    }
    console.log(zeitpunkt)
  }, [zeitpunkt]);

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSender)}>
        <div className="form__inner">
          {formItems.map((formItem) => {
            if (formItem !== "E-Mail Adresse") {
              return (
                <div className="form__item" key={formItem}>
                  <p className="label">{formItem}</p>
                  <input
                    className={classNames("form__input", {
                      error: errors?.[`${formItem}`],
                    })}
                    type="text"
                    placeholder={formItem}
                    {...register(`${formItem}`, {
                      required: "Feld ist erforderlich",
                    })}
                  />

                  {errors?.[`${formItem}`] && (
                    <p className="error-message">
                      {errors?.[`${formItem}`]?.message}
                    </p>
                  )}
                </div>
              );
            } else {
              return (
                <div className="form__item" key={formItem}>
                  <p className="label">{formItem}</p>
                  <input
                    className={classNames("form__input", {
                      error: errors?.[`${formItem}`],
                    })}
                    type="text"
                    placeholder={formItem}
                    {...register(`${formItem}`, {
                      required: "Feld ist erforderlich",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Ungültiges E-Mail Format",
                      },
                    })}
                  />

                  {errors?.[`${formItem}`] && (
                    <p className="error-message">
                      {errors?.[`${formItem}`]?.message}
                    </p>
                  )}
                </div>
              );
            }
          })}
          {seventhStep && (
            <div className="custom-select__inner">
              <div
                className="form__item"
                onClick={() => setIsSelectOpened((prev) => !prev)}
              >
                <p className="label custom-label">
                  Wann kann man dich am Besten erreichen?
                </p>
                <div
                  className={classNames("form__input", "custom-select", {
                    error: error,
                  })}
                >
                  <p>
                    {zeitpunkt || "Wann kann man dich am Besten erreichen?"}
                  </p>
                  <img onClick={handleSelect} src={arrow} alt="arrow" />
                </div>
                <div
                  className={classNames("custom-select__dropdown", {
                    "dropdown-opened": isSelectOpened,
                  })}
                >
                  <p
                    className={classNames({
                      selected: zeitpunkt === "Vormittags",
                    })}
                    onClick={() => {
                      setZeitpunkt("Vormittags");
                    }}
                  >
                    Vormittags
                  </p>
                  <p
                    className={classNames({
                      selected: zeitpunkt === "Nachmittags",
                    })}
                    onClick={() => setZeitpunkt("Nachmittags")}
                  >
                    Nachmittags
                  </p>
                  <p
                    className={classNames({
                      selected: zeitpunkt === "Abends",
                    })}
                    onClick={() => setZeitpunkt("Abends")}
                  >
                    Abends
                  </p>
                  <p
                    className={classNames({
                      selected: zeitpunkt === "Ganztags",
                    })}
                    onClick={() => setZeitpunkt("Ganztags")}
                  >
                    Ganztags
                  </p>
                </div>
              </div>

              {error && <p className="error-message">Feld ist erforderlich</p>}
            </div>
          )}
        </div>
        <button type="submit" className={`form__button ${step}`}>
          {seventhStep ? "Zum Angebot" : "Weiter"}
        </button>
      </form>
    </div>
  );
};
