/* eslint-disable react/prop-types */
import { m } from "framer-motion";
import {
  opacityAnimation,
  textAnimationToRight,
} from "../../animations/animations";

import eric from "../../assets/borisTwo.webp";

import "./EricTwo.scss";

export const EricTwo = ({ amount = 0}) => (
  <div className="ericTwo">
    <div className="redLine" />
    <m.div
      initial="hidden"
      whileInView="visible"
      variants={textAnimationToRight}
      viewport={{ amount: 0, once: true }}
      className="ericTwo__photo"
      style={{ backgroundImage: `url(${eric})` }}
    />
    <div className="ericTwo__text">
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount, once: true }}
        className="ericTwo__text--inner"
      >
        <m.h2 variants={opacityAnimation} custom={1}>
          Boris Jung
        </m.h2>
        <m.h3 variants={opacityAnimation} custom={2}>
          Gründer der WorkSET Energy
        </m.h3>
        <m.h4 variants={opacityAnimation} custom={3}>
          <b>Beruf: </b> Wirtschaftsingenieur
        </m.h4>
        <m.h4 variants={opacityAnimation} custom={3}>
          <b>Wohnort: </b> Vöhringen bei Ulm
        </m.h4>

        <m.div
          className="text-overflow"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount, once: true }}
        >
          <m.p variants={opacityAnimation} custom={3}>
            Boris war schon in seinem Studium ein Verfechter der Solarenergie
            und schrieb sein Bachelor mit herausragendem Ergebnis über dieses
            Thema. Nach seinem Studium als Wirtschaftsingenieur, hat er in
            namhaften Unternehmen Erfahrungen sammeln dürfen. Doch ihn hat seine
            Leidenschaft in die Welt der Photovoltaik zurückgeholt.
          </m.p>
          <m.p variants={opacityAnimation} custom={3}>
            Als Familienvater war es ein riesiger Schritt für ihn die Sicherheit
            in einem großen Unternehmen aufzugeben und sich „selbst“ und
            „ständig“ auf den Weg in die Nachhaltigkeit zu machen.
          </m.p>
          <m.p variants={opacityAnimation} custom={3}>
            Das gesamte Team der WorkSET Energy ist ihm dankbar, dass Boris Jung
            solch eine mutige Entscheidung getroffen hat!
          </m.p>
          <m.p variants={opacityAnimation} custom={3}>
            Durch seinen natürlichen Führungsstil hat er eine Schar von Experten
            um sich versammelt, die ihn heute bei seinen Visionen begleiten und
            unterstützen.
          </m.p>
          <m.p variants={opacityAnimation} custom={3}>
            Boris‘ Visionen: <br />
            - Deutschland ist und bleibt der Wirtschaftsstandort Nr. 1 in
            Europa. Seiner Meinung nach, ist das langfristig nur mit der
            Unabhängigkeit von Rohstoffen möglich. <br />
            -Boris setzt als Ingenieur stets auf neue Technologien und hält
            jeden Tag Ausschau nach den neuesten Komponenten für erneuerbare
            Energien. Er ist der festen Überzeugung, dass die Technologie in
            naher Zukunft absolute Autarkie für jeden Haushalt ermöglicht.
            <br />- Die Umwelt mit seinem zielstrebigen Einsatz positiv zu
            beeinflussen und die Natur für seine Nachwelt zu bewahren.
            <br /> - Boris Jung setzt sich mit der WorkSET Energy für
            Nachhaltigkeit und Fortschritt, weit über die Landesgrenzen hinaus,
            ein.
          </m.p>
        </m.div>
      </m.div>
    </div>
  </div>
);
