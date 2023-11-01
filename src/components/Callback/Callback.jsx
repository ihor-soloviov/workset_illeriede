/* eslint-disable react/prop-types */

import { m } from "framer-motion";
import phone from "../../assets/phone.svg";
import callback from "../../assets/callback.png";
import "./Callback.scss";
import classNames from "classnames";
import { useState } from "react";
import { callbackAnimation } from "../../animations/animations";

export const Callback = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
      <div className="callback">
        <m.div initial="hidden" whileInView="visible" variants={callbackAnimation} className={classNames("callback-inner", { isOpened })}>
          <b>Hast du noch Fragen? Einfach anrufen:</b>
          <div className="callback-contact">
            <img src={callback} alt="assistent phone number" />
            <div className="callback-number">
              <p>Frau Claudia Weber</p>
              <a href="tel:+49 89 2000 663 89">+49 89 2000 663 89</a>
            </div>
          </div>
        </m.div>

        <m.img
          className="callback-button"
          onClick={() => setIsOpened((prev) => !prev)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.7 }}
          src={phone}
          alt="call button"
        />
      </div>
  );
};
