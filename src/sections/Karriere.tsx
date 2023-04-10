interface KarriereProps {
    // children: ReactNode;
}

const Karriere = ({ }: KarriereProps) => {
    return (
        <>
            <div id="karriere" className="flex m-2">
                <div className="flex pb-24 pt-20 h-full w-full m-2 md:mx-[20%] shadow-lg rounded-xl bg-black/40 backdrop-blur-xl hover:shadow-teal-600 hover:shadow-2xl transition-all">
                    <div className="p-3">
                        <h1 className="mb-6 text-6xl font-bold text-white grow">
                            Karriere
                        </h1>
                        <div className="text-white text-2xl">
                            <p className="hidden">
                                Wir realisieren im Grossraum Zuerich anspruchsvolle Bauwerke
                                fuer Industrie, oeffentliche Hand und Private.
                            </p>
                            Zur Ergaenzung unseres Teams suchen wir eine/n
                            <span className="text-teal-500 font-bold">
                                {" "}
                                dipl. Bauleiter/In Hochbau{" "}
                            </span>
                            mit Pensum von 50 - 100%.
                            <p className="mt-5">
                                Wir bieten fortschrittliche Anstellungsbedingungen, mindestens 5
                                Wochen Ferien und, wo moeglich, ein gewisses Pensum im
                                Home-Office.
                            </p>
                            <p className="text-white mt-5 text-xl">
                                Sie sind interessiert an einer selbstaendigen Taetigkeit in
                                einem kleinen Team? Dann freuen wir uns auf Ihre vollstaendige
                                Bewerbung per Mail an{" "}
                                <a
                                    className="text-teal-500 font-bold "
                                    href="mailto:nicole.loetscher@tectonica-bau.ch"
                                >
                                    nicole.loetscher@tectonica-bau.ch
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Karriere;
