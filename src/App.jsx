import { useEffect, useState } from "react";
import * as Components from "./utils/Imports.js";

import ReactPixel from "react-facebook-pixel";
import TagManager from "react-gtm-module";
import { LazyMotion, domAnimation } from "framer-motion";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export const App = () => {
  const [isCookiesShown, setIsCookiesShown] = useState(false);

  useEffect(() => {
    ReactPixel.init(655308656583923);
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

  return (
    <>
      {isCookiesShown && (
        <Components.CookiesModal
          setModalCookiesVisibility={setModalCookiesVisibility}
          setIsCookiesShown={setIsCookiesShown}
        />
      )}
      <LazyMotion features={domAnimation}>
        <Components.HomeSection />
      </LazyMotion>
      <LazyMotion features={domAnimation}>
        <Components.PersoneOne />
      </LazyMotion>
      {window.innerWidth < 1024 && <Components.RedBlock />}
      <LazyLoadComponent>
        <Components.PhotoSlider />
      </LazyLoadComponent>
      <Components.VideoSlider />
      <Components.PortfolioFeedback />
      <Components.Lead />
      <LazyMotion features={domAnimation}>
        <Components.EricTwo amount="0.2" />
      </LazyMotion>
      <Components.Benefits />
      <Components.Procents />
      <Components.Footer />
    </>
  );
};
