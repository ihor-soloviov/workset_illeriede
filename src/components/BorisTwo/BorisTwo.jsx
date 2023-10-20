/* eslint-disable react/prop-types */
import { Container } from "../Container";
import borisTwo from "../../assets/borisTwo.webp";
import "./BorisTwo.scss";

export const BorisTwo = () => (
  <div className="borisTwo">
    {window.innerWidth > 1024 ? (
      <div className="borisTwo-container">
        <div className="borisTwo-info__desktop">
          <div className="borisTwo-name">
            <h2>Boris Jung</h2>
            <p>Gründer der WorkSET Energy</p>
          </div>
          <ul className="borisTwo-info">
            <li>
              <b>Beruf:</b> <span> Wirtschaftsingenieur</span>
            </li>
            <li>
              <b>Wohnort:</b> <span> Vöhringen bei Ulm</span>
            </li>
          </ul>

          <div className="borisTwo-ziele">
            <h2>Ziele:</h2>
            <p>✓ Die Energiewende in Deutschland und weltweit voranzutreiben</p>
            <p>✓ Die Abhängigkeit von den Energiekonzernen zu minimieren</p>
            <p>
              ✓ Die Lukrativität des Wirtschaftsstandortes Deutschland, durch
              die erneuerbaren Energien, wiederzubeleben
            </p>
          </div>
        </div>
        <div className="borisTwo-photo__desktop">
          <img src={borisTwo} alt="Boris photo" />
        </div>
      </div>
    ) : (
      <>
        <div className="borisTwo-photo">
          <Container>
            <img src={borisTwo} alt="Boris photo" />
          </Container>
        </div>
        <div className="borisTwo-radiusCard">
          <div className="borisTwo-name">
            <h2>Boris Jung</h2>
            <p>Gründer der WorkSET Energy GmbH</p>
          </div>
          <ul className="borisTwo-info">
            <li>
              <b>Beruf:</b> <span> Wirtschaftsingenieur</span>
            </li>
            <li>
              <b>Wohnort:</b> <span> Vöhringen bei Ulm</span>
            </li>
          </ul>
          <p className="borisTwo-text">
            Boris war schon in seinem Studium ein Verfechter der Solarenergie
            und schrieb sein Bachelor mit herausragendem Ergebnis über dieses
            Thema. Nach seinem Studium als Wirtschaftsingenieur, hat er in
            namhaften Unternehmen Erfahrungen sammeln dürfen. Doch ihn hat seine
            Leidenschaft in die Welt der Photovoltaik zurückgeholt.
          </p>
          <p className="borisTwo-text">
            Als Familienvater war es ein riesiger Schritt für ihn die Sicherheit
            in einem großen Unternehmen aufzugeben und sich „selbst“ und
            „ständig“ auf den Weg in die Nachhaltigkeit zu machen.
          </p>
        </div>
      </>
    )}
  </div>
);
