/* eslint-disable react/prop-types */
import { m } from "framer-motion";
import { textAnimationToLeft } from "../../animations/animations";
import { Container } from "../Container";
import "./PersoneOne.scss";

export const PersoneOne = () => {
  return (
    <div className="personeOne">
      <div className="personeOne-photo"></div>
      {window.innerWidth > 1024 ? (
        <div className="personeOne-desktop">
          <div className="personeOne-inner">
            <div className="personeOne-name">
              <m.h2
                initial="hidden"
                whileInView="visible"
                variants={textAnimationToLeft}
                viewport={{ amount: 0.5, once: true }}
              >
                Boris Jung
              </m.h2>
              <m.h4
                initial="hidden"
                whileInView="visible"
                variants={textAnimationToLeft}
                viewport={{ amount: 0.5, once: true }}
              >
                Gründer der WorkSET Energy
              </m.h4>
            </div>

            <m.p
              initial="hidden"
              whileInView="visible"
              variants={textAnimationToLeft}
              custom={2}
              viewport={{ amount: 0.5, once: true }}
            >
              Unsere Experten stehen bereit, um Deutschland bei der Umstellung
              auf Solarenergie zu unterstützen. Wir helfen Ihnen kostenlos,
              unkompliziert und effizient bei der Auswahl der besten Solarlösung
              für Ihr Zuhause und verwenden nur hochwertige Materialien von
              führenden Herstellern. Mit WorkSET Energy erhalten Sie nicht nur
              ein effizientes und langlebiges System, sondern auch den besten
              Service und Unterstützung nach der Installation.
            </m.p>

            <m.p
              initial="hidden"
              whileInView="visible"
              variants={textAnimationToLeft}
              custom={2.3}
              viewport={{ amount: 0.5, once: true }}
            >
              Die Rettung unseres Planeten ist unsere oberste Priorität, und wir
              sind stolz darauf, dass unsere Solarsysteme das Leben unserer
              Kunden grüner und nachhaltiger machen. Die Installation einer
              Solaranlage auf Ihrem Haus spart nicht nur Geld, sondern schont
              auch die Umwelt. WorkSET Energy ist bereit, Sie auf diesem Weg zu
              begleiten und Ihr Zuhause umweltfreundlicher zu gestalten.
            </m.p>

            <m.p
              initial="hidden"
              whileInView="visible"
              variants={textAnimationToLeft}
              custom={2.6}
              viewport={{ amount: 0.5, once: true }}
            >
              Kontaktieren Sie uns, um mehr darüber zu erfahren, wie die
              Installation einer Solaranlage Ihnen und Ihrer Familie
              zugutekommen kann. Gemeinsam gestalten wir eine nachhaltige
              Zukunft für Deutschland!
            </m.p>
          </div>
          <div className="redblock-inner">
            <div className="redBlock">
              <h4>Sicher dir jetzt dein Angebot!</h4>
            </div>
          </div>
        </div>
      ) : (
        <Container>
          <div className="personeOne-inner">
            <div className="personeOne-name">
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
