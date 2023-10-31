/* eslint-disable react/prop-types */
import arrLeft from "../../assets/arrLeft.svg";
import arrRight from "../../assets/arrRight.svg";
import { motion } from "framer-motion";
import { Container } from "../Container";
import "./Navigation.scss";

export const Navigation = ({ prev, next }) => (
  <div className="navigation">
    <Container>
      <h2>Unsere Objekte</h2>
      <div className="navigation__buttons">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.7 }}
          className={`navigation__button ${prev}`}
        >
          <img src={arrLeft} alt="arrLeft" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.7 }}
          className={`navigation__button ${next}`}
        >
          <img src={arrRight} alt="arrRight" />
        </motion.button>
      </div>
    </Container>
  </div>
);
