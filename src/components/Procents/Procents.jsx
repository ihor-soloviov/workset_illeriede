/* eslint-disable react/prop-types */
import { animate } from "framer-motion";
import { Container } from "../Container";
import anza from "../../assets/anza.svg";
import risiko from "../../assets/risiko.svg";
import natur from "../../assets/natur.svg";
import { useEffect, useRef, useState } from "react";

import "./Procents.scss";

export const Procents = () => {
  const [isVisible, setIsVisible] = useState(false);

  function Counter({ from, to }) {
    const nodeRef = useRef();

    useEffect(() => {
      if (isVisible) {
        const node = nodeRef.current;

        const controls = animate(from, to, {
          duration: 2,
          onUpdate(value) {
            node.textContent = value.toFixed(0) + "%";
          },
        });

        return () => controls.stop();
      }
    }, [from, to, isVisible]);

    return <h2 ref={nodeRef} />;
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    const target = document.querySelector(".procents");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);
  return (
    <div className="procents">
      <Container>
        <div className="procents-item">
          <h2>0%</h2>
          <div className="procents-item__name">
            <img src={anza} alt="Anzahlung" />
            <p>Anzahlung</p>
          </div>
        </div>
        <div className="procents-item">
          <h2>0%</h2>
          <div className="procents-item__name">
            <img src={risiko} alt="Risiko" />
            <p>Risiko</p>
          </div>
        </div>
        <div className="procents-item">
          <Counter from={0} to={100} />
          <div className="procents-item__name">
            <img src={natur} alt="Naturstrom" />
            <p>Naturstrom</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
