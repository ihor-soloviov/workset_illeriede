/* eslint-disable react/prop-types */
import { Container } from "../Container";
import "./RedBlock.scss";

export const RedBlock = ({ nextblock = "" }) => (
  <div className="redBlock">
    <Container>
      {nextblock === "lead" ? (
        <h3>In nur wenigen Schritten <br /> zur Projektierung</h3>
      ) : (
        <h4>
          Gültig bis 30.09.2023 <br /> Sicher dir jetzt dein Angebot!
        </h4>
      )}
    </Container>
  </div>
);
