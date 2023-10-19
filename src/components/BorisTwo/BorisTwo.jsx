/* eslint-disable react/prop-types */
import { Container } from "../Container";
import borisTwo from "../../assets/boris-two.png";
import "./BorisTwo.scss";

export const BorisTwo = () => (
  <div className="borisTwo">
    {window.innerWidth > 1024 ? (
      <div className="borisTwo-container">
        <div className="borisTwo-info__desktop">
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
            <li>
              <b>Seit Beginn des Studiums:</b>
            </li>
            <li>
              <p>Hohe Begeisterung für die Photovoltaik</p>
            </li>
            <li>
              <b>Seit 2019:</b> <span> aktiv in der PV-Branche tätig</span>
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
        <Container>
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
            <li>
              <b>Seit Beginn des Studiums:</b>
            </li>
            <li>
              <p>Hohe Begeisterung für die Photovoltaik</p>
            </li>
            <li>
              <b>Seit 2019:</b> <span> aktiv in der PV-Branche tätig</span>
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
        </Container>
      </>
    )}
  </div>
);
