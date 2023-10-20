import { useEffect, useState } from "react";
import * as Components from "./utils/Imports.js";

import ReactPixel from "react-facebook-pixel";
import TagManager from "react-gtm-module";

export const App = () => {
  const [isCookiesShown, setIsCookiesShown] = useState(false);
  const [isZumOpened, setIsZumOpened] = useState(false);

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
      <Components.HomeSection />
      <Components.BorisOne />
      {window.innerWidth < 1024 && <Components.RedBlock />}
      <Components.PortfolioSlider setIsZumOpened={setIsZumOpened} />
      <Components.VideoSlider/>
      <Components.PortfolioFeedback />
      <Components.Lead />
      <Components.BorisTwo />
      <Components.Benefits />
      <Components.Procents />
      <Components.Footer />
      {isZumOpened && <Components.Zum setIsZumOpened={setIsZumOpened} />}
    </>
  );
};
