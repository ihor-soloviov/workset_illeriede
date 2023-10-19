/* eslint-disable react/prop-types */
import { useState } from "react";
import { Container } from "../Container";
import "./CookiesModal.scss";

import classNames from "classnames";
import drop from "../../assets/drop.svg";
import { Switch } from "@chakra-ui/react";

export const CookiesModal = ({
  setModalCookiesVisibility,
  setIsCookiesShown,
}) => {
  const [openedCookie, setOpenedCookie] = useState(0);

  const handleCookieTextClicker = (id) => {
    if (openedCookie !== id) {
      setOpenedCookie(id);
      return;
    }

    setOpenedCookie(0);
  };

  const handleModal = () => {
    setModalCookiesVisibility();
    setIsCookiesShown(false);
  };

  return (
    <div className="cookiesModal">
      <div className="cookiesModal-inner">
        <Container>
          <div className="cookiesModal-menu">
            <h2>Einwilligung zur Datenverarbeitung</h2>
            <p>
              Wir nutzen Cookies und andere/ähnliche Technologien (Zusammen:
              Cookies) auf unserer Website. Einige von ihnen sind essenziell,
              während andere uns helfen, diese Website und deine Erfahrung zu
              verbessern. Mehr erfahren
            </p>
            <div className="cookiesModal-links">
              <a href="https://work-set.eu/impressum" target="_blank" rel="noreferrer">Impressum</a>
              <a href="https://work-set.eu"  target="_blank" rel="noreferrer">Datenschutz</a>
            </div>
            <div className="cookiesModal-dropdown__items">
              <div className="cookiesModal-dropdown__item">
                <div className="dropdown-left">
                  <button onClick={() => handleCookieTextClicker(1)}>
                    <img src={drop} alt="dropdown-button" />
                  </button>
                  <span>Notwendige Cookies</span>
                </div>
                <Switch
                  colorScheme="whatsapp"
                  size="md"
                  isChecked={true}
                  isDisabled={true}
                />
              </div>
              <div
                className={classNames("cookiesModal-dropdown__text", {
                  "dropdown__text--opened": openedCookie === 1,
                })}
              >
                Diese Cookies sind unerlässlich, damit Sie die Website nutzen
                und ihre Funktionen nutzen können. Sie können nicht abgeschaltet
                werden. Sie werden als Antwort auf Anfragen von Dir gesetzt, wie
                z.B. das Einstellen Ihrer Datenschutzeinstellungen, das
                Einloggen oder das Ausfüllen von Formularen. Hier findest du
                eine Liste der von uns verwendeten Cookies.
              </div>
              <div className="cookiesModal-dropdown__item">
                <div className="dropdown-left">
                  <button onClick={() => handleCookieTextClicker(2)}>
                    <img src={drop} alt="dropdown-button" />
                  </button>
                  <span>Cookies für Marketing</span>
                </div>
                <Switch colorScheme="whatsapp" size="md" />
              </div>
              <div
                className={classNames("cookiesModal-dropdown__text", {
                  "dropdown__text--opened": openedCookie === 2,
                })}
              >
                Diese Cookies ermöglichen es dem Betreiber dieser Website,
                zukünftige Interessenten zu identifizieren und die Verkaufs- und
                Marketinginteraktionen mit ihnen zu personalisieren. Basierend
                auf den von uns gewählten Einstellungen können Informationen von
                Marketing Cookies auch an andere Werbefirmen weitergegeben
                werden. Hier findest du eine Liste der von uns verwendeten
                Cookies.
              </div>
              <div className="cookiesModal-dropdown__item">
                <div className="dropdown-left">
                  <button onClick={() => handleCookieTextClicker(3)}>
                    <img src={drop} alt="dropdown-button" />
                  </button>
                  <span>Cookies für Medien</span>
                </div>
                <Switch colorScheme="whatsapp" size="md" />
              </div>
              <div
                className={classNames("cookiesModal-dropdown__text", {
                  "dropdown__text--opened": openedCookie === 3,
                })}
              >
                Diese Cookies ermöglichen es dem Betreiber dieser Website,
                Inhalte von Videoplattformen und Social-Media-Plattformen
                anzuzeigen. Wenn Cookies von externen Medien akzeptiert werden,
                bedarf der Zugriff auf diese Inhalte keiner manuellen Zustimmung
                mehr, andernfalls werden diese standardmäßig blockiert. Die
                Informationen von Medien Cookies können an andere Werbefirmen
                weitergegeben werden. Hier findest du eine Liste der von uns
                verwendeten Cookies.
              </div>
            </div>
            <div className="cookiesModal-buttons">
              <button onClick={handleModal} className="green-btn">
                Alle Cookies akzeptieren
              </button>
              <button
                onClick={handleModal}
                className="default-btn left-btn"
              >
                Auswahl speichern
              </button>
              <button
                onClick={() => setIsCookiesShown(false)}
                className="default-btn right-btn"
              >
                Alle ablehnen
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
