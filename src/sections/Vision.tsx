import { ReactElement } from 'react'
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

interface FeatureProps {
    title: string;
    icon: ReactElement;
    text: string;
}
const FeatureCard = ({ title, icon, text }: FeatureProps) => {
    return (
        <div
            style={{
                background: 'linear-gradient(125deg, rgba(0,123,132,.3) 0%, rgba(0,0,0,.7) 100%)'
            }}
            className='text-white group min-w-[330px] w-full backdrop-blur-xl rounded-xl gap-3 p-4 pt-8 shadow-xl flex justify-start justify-items-start hover:shadow-xl transition-all flex-col'>
            <div className='z-10 flex flex-col w-full h-full gap-5 justify-left justify-items-start'>
                <span className='flex text-[10rem] justify-center'>
                    {icon}
                </span>
                <h2 className='text-xl font-semibold text-center md:text-3xl'>{title}</h2>
                <p className='p-3 md:text-xl'>
                    {text}
                </p>
            </div>
        </div>
    );
};

export const Vision = () => {
    const iconSize = 20;

    return (
        <>
            <div id="vision" className="grid w-full min-h-screen grid-cols-12 grid-rows-6 shadow-lg">

                <div className="flex flex-col items-center justify-end h-full grid-rows-6 row-span-5 row-start-1 shadow-lg sm:row-start-2 sm:col-span-8 col-span-full sm:col-start-2 sm:row-span-4 sm:flex-row lg:col-span-8 lg:col-start-2 2xl:col-span-6 2xl:col-start-4 rounded-xl bg-black/25 backdrop-blur-md">
                    <div className="flex flex-col w-full m-1 sm:translate-x-1/3 sm:translate-y-0 translate-y-1/4 2xl:translate-x-[16.666667%] rounded-2xl sm:m-0">
                        <div className="m-4 text-4xl font-bold text-center text-white grow">
                            Vision
                        </div>
                        <div className="text-white">
                            Serioes in Planung, Ausfuehrung und Kostenkontrolle
                        </div>
                        <div className="text-white">
                            Unser oberstes Credo ist die in jeder Hinsicht erfolgreiche Umsetzung Ihres Bauvorhabens.
                            Unsere langjaehrige Erfahrung garantiert Ihnen eine qualitativ hochstehende Ausfuehrung Ihres Bauobjektes. Mit Kompetenz, Innovation und guter Vernetzung zu Architekten und Fachplanern bieten wir Ihnen eine komplette und erfolgreiche Bauabwicklung aus einer Hand.
                            Wo immer moeglich arbeiten wir mit ausgewiesenen lokalen Unternehmen um damit unseren Beitrag an die Wirtschaftlichkeit des Arbeitsplatzes Schweiz zu leisten. Genau so viel Wert legen wir bei unseren Bauobjekten auf zukunftsweisende energetische und oekologische Standards.
                        </div>
                    </div>
                    <div id='map' className="w-full translate-y-1/2 bg-blue-400 shadow-lg translate-x-0sition-all sm:w-full sm:translate-x-1/2 2xl:translate-x-1/4 sm:translate-y-0 h-2/5 sm:h-4/5 rounded-xl sm:hover:scale-105">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vision;

