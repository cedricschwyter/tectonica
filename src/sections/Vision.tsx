import { ReactElement } from "react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

interface FeatureProps {
  title: string;
  icon: ReactElement;
  text: string;
}
const FeatureCard = ({ title, icon, text }: FeatureProps) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(125deg, rgba(0,123,132,.3) 0%, rgba(0,0,0,.7) 100%)",
      }}
      className="text-white group min-w-[330px] w-full backdrop-blur-xl rounded-xl gap-3 p-4 pt-8 shadow-xl flex justify-start justify-items-start hover:shadow-xl transition-all flex-col"
    >
      <div className="z-10 flex flex-col w-full h-full gap-5 justify-left justify-items-start">
        <span className="flex text-[10rem] justify-center">{icon}</span>
        <h2 className="text-xl font-semibold text-center md:text-3xl">
          {title}
        </h2>
        <p className="p-3 md:text-xl">{text}</p>
      </div>
    </div>
  );
};

export const Vision = () => {
  const iconSize = 20;

  return (
    <>
      <div id="vision" className="flex w-full justify-center">
        <div className="flex pb-24 pt-20 h-full w-full m-2 md:mx-[20%] shadow-lg rounded-xl bg-black/40 backdrop-blur-xl hover:shadow-teal-600 hover:shadow-2xl transition-all">
          <div className="flex flex-col m-8">
            <div className="mb-3 text-6xl font-bold text-white grow">
              Vision
            </div>
            <div className="text-white text-2xl mb-2">
              Serioes in{" "}
              <strong className="text-teal-500 text-3xl">Planung</strong>,{" "}
              <strong className="text-teal-500 text-3xl">Ausfuehrung</strong>{" "}
              und{" "}
              <strong className="text-teal-500 text-3xl">
                Kostenkontrolle
              </strong>
            </div>
            <div className="text-white text-xl flex flex-col gap-1">
              <p>
                Unser oberstes Credo ist die in jeder Hinsicht erfolgreiche
                Umsetzung Ihres Bauvorhabens.
              </p>
              <p>
                Unsere langjaehrige Erfahrung garantiert Ihnen eine qualitativ
                hochstehende Ausfuehrung Ihres Bauobjektes.
              </p>
              <p>
                Mit Kompetenz, Innovation und guter Vernetzung zu Architekten
                und Fachplanern bieten wir Ihnen eine komplette und erfolgreiche
                Bauabwicklung aus einer Hand.
              </p>
              <p>
                Wo immer moeglich arbeiten wir mit ausgewiesenen lokalen
                Unternehmen um damit unseren Beitrag an die Wirtschaftlichkeit
                des Arbeitsplatzes Schweiz zu leisten.
              </p>
              <p>
                Genau so viel Wert legen wir bei unseren Bauobjekten auf
                zukunftsweisende energetische und oekologische Standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
