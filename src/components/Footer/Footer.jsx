/* eslint-disable react/prop-types */
import { Container } from "../Container";
import "./Footer.scss";

export const Footer = () => (
  <div className="footer">
    <Container>
      <div className="footer-inner">
        <p>2023 © WorkSet Real Estate</p>
        <a
          href="https://work-set.eu/impressum"
          target="_blank"
          rel="noreferrer"
        >
          Impressum
        </a>
        <a href="https://work-set.eu/kontakt" target="_blank" rel="noreferrer">
          Kontakt
        </a>
      </div>
    </Container>
  </div>
);
