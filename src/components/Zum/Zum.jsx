/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import "./Zum.scss";
import classNames from "classnames";
import axios from "axios";
import { useCallback, useState } from "react";

export const Zum = ({ setIsZumOpened }) => {
  const [isDataSent, setIsDataSent] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onSubmit" });

  const handleZumAngebot = (data) => {
    try {
      const apiData = {
        data: {
          first_name: data["Name"],
          last_name: data["Nachname"],
          email: data["E-Mail-Addresse"],
          phone: data["Telefon"],
        },
      };
      axios.post("https://api.work-set.eu/api/contact-forms", apiData);

      setIsDataSent(true);
    } catch (error) {
      console.log(error);
    }

    reset();
  };

  const placeholderChanger = useCallback((name) => {
    switch (name) {
      case "E-Mail-Addresse":
        return "Deine E-Mail-Adresse";

      case "Telefon":
        return "Deine Telefonnummer";

      default:
        return `Ihr ${name}`;
    }
  }, []);

  const formItems = ["Name", "Nachname", "E-Mail-Addresse", "Telefon"];

  return (
    <div className="zum">
      <div className="modal">
        {isDataSent ? (
          <div className="modal-container">
            <div className="modal-button__close">
              <button onClick={() => setIsZumOpened(false)}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.85339 3.02675L10.0001 8.17342L15.1201 3.05341C15.2331 2.93304 15.3694 2.83674 15.5206 2.7703C15.6718 2.70385 15.8349 2.66863 16.0001 2.66675C16.3537 2.66675 16.6928 2.80722 16.9429 3.05727C17.1929 3.30732 17.3334 3.64646 17.3334 4.00008C17.3365 4.16355 17.3062 4.32593 17.2443 4.47726C17.1824 4.62858 17.0902 4.76566 16.9734 4.88008L11.7867 10.0001L16.9734 15.1867C17.1931 15.4017 17.322 15.6929 17.3334 16.0001C17.3334 16.3537 17.1929 16.6928 16.9429 16.9429C16.6928 17.1929 16.3537 17.3334 16.0001 17.3334C15.8301 17.3405 15.6606 17.3121 15.5022 17.2501C15.3438 17.1882 15.2001 17.0939 15.0801 16.9734L10.0001 11.8267L4.86672 16.9601C4.75406 17.0764 4.61947 17.1693 4.47072 17.2334C4.32197 17.2975 4.16201 17.3315 4.00005 17.3334C3.64643 17.3334 3.30729 17.1929 3.05725 16.9429C2.8072 16.6928 2.66672 16.3537 2.66672 16.0001C2.66361 15.8366 2.69394 15.6742 2.75585 15.5229C2.81775 15.3716 2.90993 15.2345 3.02672 15.1201L8.21339 10.0001L3.02672 4.81341C2.80697 4.59843 2.67811 4.3073 2.66672 4.00008C2.66672 3.64646 2.8072 3.30732 3.05725 3.05727C3.30729 2.80722 3.64643 2.66675 4.00005 2.66675C4.32005 2.67075 4.62672 2.80008 4.85339 3.02675Z"
                    fill="#0B0B0C"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="done">
              <div className="done__swoosh"></div>
              <div className="done__header">
                <p>Zurück zur Seite!</p>
              </div>

              <button
                onClick={() => setIsZumOpened(false)}
                className="done__button"
              >
                Erledigt
              </button>
            </div>
          </div>
        ) : (
          <div className="modal-container">
            <div className="modal-button__close">
              <button onClick={() => setIsZumOpened(false)}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.85339 3.02675L10.0001 8.17342L15.1201 3.05341C15.2331 2.93304 15.3694 2.83674 15.5206 2.7703C15.6718 2.70385 15.8349 2.66863 16.0001 2.66675C16.3537 2.66675 16.6928 2.80722 16.9429 3.05727C17.1929 3.30732 17.3334 3.64646 17.3334 4.00008C17.3365 4.16355 17.3062 4.32593 17.2443 4.47726C17.1824 4.62858 17.0902 4.76566 16.9734 4.88008L11.7867 10.0001L16.9734 15.1867C17.1931 15.4017 17.322 15.6929 17.3334 16.0001C17.3334 16.3537 17.1929 16.6928 16.9429 16.9429C16.6928 17.1929 16.3537 17.3334 16.0001 17.3334C15.8301 17.3405 15.6606 17.3121 15.5022 17.2501C15.3438 17.1882 15.2001 17.0939 15.0801 16.9734L10.0001 11.8267L4.86672 16.9601C4.75406 17.0764 4.61947 17.1693 4.47072 17.2334C4.32197 17.2975 4.16201 17.3315 4.00005 17.3334C3.64643 17.3334 3.30729 17.1929 3.05725 16.9429C2.8072 16.6928 2.66672 16.3537 2.66672 16.0001C2.66361 15.8366 2.69394 15.6742 2.75585 15.5229C2.81775 15.3716 2.90993 15.2345 3.02672 15.1201L8.21339 10.0001L3.02672 4.81341C2.80697 4.59843 2.67811 4.3073 2.66672 4.00008C2.66672 3.64646 2.8072 3.30732 3.05725 3.05727C3.30729 2.80722 3.64643 2.66675 4.00005 2.66675C4.32005 2.67075 4.62672 2.80008 4.85339 3.02675Z"
                    fill="#0B0B0C"
                  ></path>
                </svg>
              </button>
            </div>
            <h2>Gerne beraten wir Sie</h2>
            <p className="modal-text">
              Kontaktformular ausfüllen und absenden. In Kürze wird sich ein
              Fachberater aus unserem Team mit Ihnen in Verbindung setzen.
            </p>
            <form onSubmit={handleSubmit(handleZumAngebot)}>
              <div className="form-inner">
                {formItems.map((formItem) => (
                  <div key={formItem}>
                    <p>{formItem}</p>
                    <input
                      type={formItem === "E-Mail-Addresse" ? "email" : "text"}
                      className={classNames({
                        error: errors?.[`${formItem}`],
                      })}
                      {...register(`${formItem}`, {
                        required: "Feld ist erforderlich",
                      })}
                      placeholder={placeholderChanger(formItem)}
                    />
                  </div>
                ))}
              </div>
              <button type="submit" className="modal-button__sender">
                Sender
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
