/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import {
  BrowserRouter as Router, useNavigate} from "react-router-dom";
import * as Components from "./utils/Imports.js";

import ReactPixel from "react-facebook-pixel";
import TagManager from "react-gtm-module";
import { LazyMotion, domAnimation } from "framer-motion";
import "./components/Container/Container.scss";

export const App = () => {
  const [isCookiesShown, setIsCookiesShown] = useState(false);

  const leadRef = useRef(null);
  

  useEffect(() => {
    ReactPixel.init(1022736382298315);
    TagManager.initialize({ gtmId: "GTM-5K2S8JNN" });

    ReactPixel.pageView();
  }, []);

  useEffect(() => {
    const showModalValue = localStorage.getItem("showModal");

    if (showModalValue === null || showModalValue === "true") {
      localStorage.setItem("showModal", "true");
      setIsCookiesShown(true);
    } else {
      setIsCookiesShown(false);
    }
  }, []);

  const setModalCookiesVisibility = () => {
    localStorage.setItem("showModal", "false");
  };

  const scrollToLead = () => {
    if (leadRef?.current) {
      leadRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      {isCookiesShown && (
        <Components.CookiesModal
          setModalCookiesVisibility={setModalCookiesVisibility}
          setIsCookiesShown={setIsCookiesShown}
        />
      )}
      <LazyMotion features={domAnimation}>
        <Components.Callback />
      </LazyMotion>
      <LazyMotion features={domAnimation}>
        <Components.HomeSection scrollToLead={scrollToLead} />
      </LazyMotion>
      <LazyMotion features={domAnimation}>
        <Components.PersoneOne />
      </LazyMotion>
      {window.innerWidth < 1024 && <Components.RedBlock />}
      <LazyMotion features={domAnimation}>
        <Components.Locations />
      </LazyMotion>
      <Components.PhotoSlider />
      <Components.VideoSlider leadRef={leadRef} />
      <Components.PortfolioFeedback />
      <Components.Lead leadRef={leadRef} />
      <LazyMotion features={domAnimation}>
        <Components.EricTwo amount="0.2" />
      </LazyMotion>
      <LazyMotion features={domAnimation}>
        <Components.Benefits />
      </LazyMotion>
      <Components.Procents />
      <Components.Footer />
    </Router>
  );
};
