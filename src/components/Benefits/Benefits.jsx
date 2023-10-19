/* eslint-disable react/prop-types */
import { Container } from "../Container";
import firstPic from "../../assets/firstPic.svg";
import secPic from "../../assets/secPic.svg";
import thirdtPic from "../../assets/thirdPic.svg";
import fourPic from "../../assets/fourPic.svg";
import "./Benefits.scss";

export const Benefits = () => {
  const benefits = [
    {
      id: 0,
      img: firstPic,
      text: "Mit Menschen für Menschen, dank Menschen!",
    },
    {
      id: 1,
      img: secPic,
      text: "Unternehmenskultur auf Augenhöhe",
    },
    {
      id: 2,
      img: thirdtPic,
      text: "Die Wünsche des Kunden sind unsere Verpflichtungen",
    },
    {
      id: 3,
      img: fourPic,
      text: "Maximale Qualitätskontrolle, aufrgund ausschließlich eigener Mitarbeiter",
    },
  ];
  return (
    <div className="benefits">
      {window.innerWidth > 1024 ? (
        <div className="benefits-container">
          <ul className="benefits-inner">
            {benefits.map((benefit) => (
              <li className="benefits-item" key={benefit.id}>
                <img width={65} src={benefit.img} alt="da" />
                <p>{benefit.text}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <Container>
            <div className="benefits-container">
              <ul className="benefits-inner">
                {benefits.map((benefit) => (
                  <li className="benefits-item" key={benefit.id}>
                    <img width={65} src={benefit.img} alt="da" />
                    <p>{benefit.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </>
      )}
    </div>
  );
};
