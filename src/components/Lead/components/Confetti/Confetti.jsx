/* eslint-disable react/prop-types */
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim/tsparticles.slim";
export const Confetti = ({device}) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const options = {
    fullScreen: {
      zIndex: 1,
    },
    particles: {
      color: {
        value: ["##30D6B0", "##E52F42", "#FDBC1F"],
      },
      number: {
        value: device.value,
        density: {
          enable: true,
          area: device.area,
        },
      },

      shape: {
        type: "image",
        options: {
          image: [
            {
              src: "https://sommeraktion.work-set.eu/assets/ee.svg",
              width: 10,
              height: 10,
              particles: {
                size: {
                  value: 10,
                },
              },
            },
            {
              src: "https://sommeraktion.work-set.eu/assets/ddd.svg",
              width: 10,
              height: 10,
              particles: {
                size: {
                  value: 10,
                },
              },
            },
            {
              src: "https://sommeraktion.work-set.eu/assets/fsds.svg",
              width: 10,
              height: 10,
              particles: {
                size: {
                  value: 10,
                },
              },
            },
            {
              src: "https://sommeraktion.work-set.eu/assets/rw.svg",
              width: 10,
              height: 10,
              particles: {
                size: {
                  value: 10,
                },
              },
            },
            {
              src: "https://sommeraktion.work-set.eu/assets/uno.svg",
              width: 10,
              height: 10,
              particles: {
                size: {
                  value: 10,
                },
              },
            },
          ],
        },
      },
      opacity: {
        value: 1,
        animation: {
          enable: true,
          minimumValue: 0,
          speed: 3,
          startValue: "max",
          destroy: "min",
        },
      },
      size: {
        value: 4,
        random: {
          enable: true,
          minimumValue: 2,
        },
      },

      life: {
        duration: {
          sync: true,
          value: 3,
        },
        count: 1,
      },
      move: {
        enable: true,
        gravity: {
          enable: true,
          acceleration: 10,
        },
        speed: {
          min: 10,
          max: 120,
        },
        decay: 0.1,
        direction: "none",
        straight: false,
        outModes: {
          default: "destroy",
          top: "none",
        },
      },
      rotate: {
        value: {
          min: 0,
          max: 90,
        },
        direction: "random",
        move: true,
        animation: {
          enable: true,
          speed: 60,
        },
      },

      roll: {
        darken: {
          enable: true,
          value: 25,
        },
        enable: true,
        speed: {
          min: 15,
          max: 25,
        },
      },
      wobble: {
        distance: 30,
        enable: true,
        move: true,
        speed: {
          min: 5,
          max: 15,
        },
      },
    },
    emitters: {
      life: {
        count: 1,
        duration: 0.1,
        delay: 0.4,
      },
      rate: {
        delay: 0,
        quantity: 100,
      },
      size: {
        width: 0,
        height: 0,
      },
    },
  };

  return (
    <Particles
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
};
