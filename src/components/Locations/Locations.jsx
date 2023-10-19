/* eslint-disable react/prop-types */
import { Container } from "../Container";
import marker from "../../assets/marker.svg";
import "./Locations.scss";

export const Locations = () => {
  const locations = [
    "Rhein-Main-Gebiet",
    "Landkreis Unterallgäu",
    "Ostallgäu",
    "Oberallgäu",
    "Landkreis Ravensburg",
  ];
  return (
    <div className="locations">
      {window.innerWidth > 1024 ? (
        <div className="desktop-container">
          <div className="locations-container">
            <h3>Sommeraktion in diesen Regionen</h3>

            <ul className="locations-inner">
              {locations.map((location) => (
                <li className="locations-item" key={location}>
                  <div className="item-inner">
                    <img src={marker} alt="marker" />
                    <p>{location}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <Container>
          <div className="locations-container">
            <h3>Sommeraktion in diesen Regionen</h3>

            <ul className="locations-inner">
              {locations.map((location) => (
                <li className="locations-item" key={location}>
                  <img src={marker} alt="marker" />
                  <p>{location}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      )}
    </div>
  );
};
