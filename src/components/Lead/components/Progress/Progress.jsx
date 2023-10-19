/* eslint-disable react/prop-types */
import "./Progress.scss";
import checkDesk from "../../assets/check-desk.svg";
import line from "../../assets/line.svg";
import classNames from "classnames";
import { useEffect, useState } from "react";

export const Progress = ({ second = false }) => {
  const [pic, setPic] = useState(line);

  useEffect(() => {
    // Функція, яка виконується під час монтажу компонента
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let newLine;

      // Визначаємо значення newLine залежно від ширини екрану
      switch (true) {
        case screenWidth >= 1200:
          newLine = "large";
          break;
        case screenWidth >= 768:
          newLine = "medium";
          break;
        default:
          newLine = "small";
          break;
      }

      // Змінюємо стан line, якщо нове значення відрізняється від поточного
      if (newLine !== line) {
        setPic(newLine);
      }
    };

    // Викликаємо функцію handleResize при монтажі компонента та при ресайзі вікна
    handleResize(); // Викликаємо її один раз при монтажі, щоб встановити початкове значення
    window.addEventListener("resize", handleResize);

    // Функція, яка виконується під час розмонтажу компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pic]);

  return (
    <div className="progress">
      <div className="progress-item">
        <div className="progress-circle active">1</div>
        <p>Analyse</p>
      </div>

      <div className="progress-item">
        <div className={classNames("progress-circle", { active: second })}>
          2
        </div>
        <p>Kontaktdaten</p>
      </div>

      <div className="progress-item">
        <div className="progress-circle">
          <img src={checkDesk} alt="done" />
        </div>
        <p>Angebot</p>
      </div>
    </div>
  );
};
