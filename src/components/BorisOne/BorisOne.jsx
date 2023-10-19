/* eslint-disable react/prop-types */
import { Container } from "../Container";
import "./BorisOne.scss";

export const BorisOne = () => {
  return (
    <div className="borisOne">
      <div className="borisOne-photo"></div>
      {window.innerWidth > 1024 ? (
        <div className="borisOne-desktop">
          <div className="borisOne-inner">
            <div className="borisOne-name">
              <h2>Boris Jung</h2>
              <h4>Gründer der WorkSET Energy</h4>
            </div>

            <p>
              Unsere Experten stehen bereit, um Illerrieden bei der Umstellung
              auf Solarenergie zu unterstützen. Wir helfen Ihnen kostenlos,
              unkompliziert und effizient bei der Auswahl der besten Solarlösung
              für Ihr Zuhause und verwenden nur hochwertige Materialien von
              führenden Herstellern. Mit WorkSET Energy erhalten Sie nicht nur
              ein effizientes und langlebiges System, sondern auch den besten
              Service und Unterstützung nach der Installation.
            </p>

            <p>
              Die Rettung unseres Planeten ist unsere oberste Priorität, und wir
              sind stolz darauf, dass unsere Solarsysteme das Leben unserer
              Kunden grüner und nachhaltiger machen. Die Installation einer
              Solaranlage auf Ihrem Haus spart nicht nur Geld, sondern schont
              auch die Umwelt. WorkSET Energy ist bereit, Sie auf diesem Weg zu
              begleiten und Ihr Zuhause umweltfreundlicher zu gestalten.
            </p>

            <p>
              Kontaktieren Sie uns, um mehr darüber zu erfahren, wie die
              Installation einer Solaranlage Ihnen und Ihrer Familie
              zugutekommen kann. Gemeinsam gestalten wir eine nachhaltige
              Zukunft für Illerrieden!
            </p>
          </div>
          <div className="redblock-inner">
            <div className="redBlock">
              <h4>
                Gültig bis 30.09.2023 <br /> Sicher dir jetzt dein Angebot!
              </h4>
            </div>
          </div>
        </div>
      ) : (
        <Container>
          <div className="borisOne-inner">
            <div className="borisOne-name">
              <h2>Boris Jung</h2>
              <h4>Gründer der WorkSET Energy</h4>
            </div>

            <p>
              Unsere Experten stehen bereit, um Illerrieden bei der Umstellung
              auf Solarenergie zu unterstützen. Wir helfen Ihnen kostenlos,
              unkompliziert und effizient bei der Auswahl der besten Solarlösung
              für Ihr Zuhause und verwenden nur hochwertige Materialien von
              führenden Herstellern. Mit WorkSET Energy erhalten Sie nicht nur
              ein effizientes und langlebiges System, sondern auch den besten
              Service und Unterstützung nach der Installation.
            </p>

            <p>
              Die Rettung unseres Planeten ist unsere oberste Priorität, und wir
              sind stolz darauf, dass unsere Solarsysteme das Leben unserer
              Kunden grüner und nachhaltiger machen. Die Installation einer
              Solaranlage auf Ihrem Haus spart nicht nur Geld, sondern schont
              auch die Umwelt. WorkSET Energy ist bereit, Sie auf diesem Weg zu
              begleiten und Ihr Zuhause umweltfreundlicher zu gestalten.
            </p>

            <p>
              Kontaktieren Sie uns, um mehr darüber zu erfahren, wie die
              Installation einer Solaranlage Ihnen und Ihrer Familie
              zugutekommen kann. Gemeinsam gestalten wir eine nachhaltige
              Zukunft für Illerrieden!
            </p>
          </div>
        </Container>
      )}
    </div>
  );
};
