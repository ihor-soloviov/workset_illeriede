/* eslint-disable react/prop-types */
import borisOne from "../../assets/boris-one.jpeg";
import { Container } from "../Container";
import "./BorisOne.scss";

export const BorisOne = () => {
  return (
    <div className="borisOne">
      <div className="boricOne-photo">
        <img src={borisOne} alt="Boris photo" />
      </div>
      {window.innerWidth > 1024 ? (
        <div className="borisOne-desktop">
          <div className="borisOne-inner">
            <div className="borisOne-name">
              <h2>Boris Jung</h2>
              <h4>Gründer der WorkSET Energy</h4>
            </div>

            <p>
              Boris Jung bietet dir für nur kurze Zeit höchste Qualität zum
              unschlagbaren Preis. Du erhältst eine komplette PV-Anlage, mit
              professioneller Montage und maßgeschneiderter Projektierung. Im
              Anschluss übernehmen wir die Netzanmeldung und das
              Online-Monitoring deiner PV-Anlage.
            </p>

            <p>
              Mach bei der “PV-Sommeraktion” mit und unterstütze mit der WorkSET
              Energy die Energiewende in Deutschland. Lass uns die kostenfreie
              Sommersonne nutzen und deine Abhängigkeit von den Energiekonzernen
              und den Strompreisen auf ein Minimum senken.
            </p>

            <p>
              Wir expandieren stetig und kommen jetzt auch in deine Region. Die
              WorkSET Energy freut sich, auch dich durch Professionalität, gute
              Planung, freundliche Mitarbeiter und zügige Umsetzung zu
              begeistern.
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
              Boris Jung bietet dir für nur kurze Zeit höchste Qualität zum
              unschlagbaren Preis. Du erhältst eine komplette PV-Anlage, mit
              professioneller Montage und maßgeschneiderter Projektierung. Im
              Anschluss übernehmen wir die Netzanmeldung und das
              Online-Monitoring deiner PV-Anlage.
            </p>

            <p>
              Mach bei der “PV-Sommeraktion” mit und unterstütze mit der WorkSET
              Energy die Energiewende in Deutschland. Lass uns die kostenfreie
              Sommersonne nutzen und deine Abhängigkeit von den Energiekonzernen
              und den Strompreisen auf ein Minimum senken.
            </p>

            <p>
              Wir expandieren stetig und kommen jetzt auch in deine Region. Die
              WorkSET Energy freut sich, auch dich durch Professionalität, gute
              Planung, freundliche Mitarbeiter und zügige Umsetzung zu
              begeistern.
            </p>
          </div>
        </Container>
      )}
    </div>
  );
};
