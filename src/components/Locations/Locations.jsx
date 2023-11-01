/* eslint-disable react/prop-types */
import {m} from "framer-motion"
import pin from "../../assets/marker.svg";
import "./Locations.scss";

export const Locations = () => {
  const locations = [
    "Illerrieden",
    "Vöhringen",
    "Bellenberg",
    "Illertissen",
    "Dietenheim",
  ];
  return (
    <div className="locations">
      <div className="locations__container">
        <h2>PV-Förderprogramm in Diesen Regionen</h2>

        <div className="locations__inner">
          {locations.map((el) => (
            <m.div whileHover={{ scale: 1.1 }} key={el} className="location">
              <img src={pin} alt="location pin" />
              <p>{el}</p>
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
};
