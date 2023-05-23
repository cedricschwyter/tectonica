import PageTitle from "@components/PageTitle";

function Dienstleistungen() {
    return (
        <>
            <PageTitle title={"tectonica | Dienstleistungen"} />
            <div className="grid w-full min-h-screen grid-cols-12 grid-rows-6 shadow-lg">
                <div className="flex flex-col items-center justify-end h-full grid-rows-6 row-span-5 row-start-1 shadow-lg sm:row-start-2 sm:col-span-8 col-span-full sm:col-start-2 sm:row-span-4 sm:flex-row lg:col-span-8 lg:col-start-2 2xl:col-span-6 2xl:col-start-4 rounded-xl bg-black/25 backdrop-blur-md">
                    <div className="flex flex-col w-full m-1 sm:translate-x-1/3 sm:translate-y-0 translate-y-1/4 2xl:translate-x-[16.666667%] rounded-2xl sm:m-0">
                        <div className="m-4 text-4xl font-bold text-center text-white grow">
                            Dienstleistungen
                        </div>
                        <div className="flex flex-col text-white items-center">
                            Wir bieten Ihnen ein umfassendes Paket an Dienstleistungen in den
                            Bereichen Neubau, Umbau und Sanierung. Unsere Kernkompetenzen
                            umfassen die Bereiche
                        </div>
                        <ul className="text-white">
                            <li className="list-disc">Bauherrenberatung</li>
                            <li className="list-disc">Kostenschätzung</li>
                            <li className="list-disc">Kostenvoranschlag</li>
                            <li className="list-disc">Devisierung</li>
                            <li className="list-disc">Bauausschreibungen</li>
                            <li className="list-disc">Terminplanung</li>
                            <li className="list-disc">Bau- und Projektleitung</li>
                            <li className="list-disc">Kostenkontrolle</li>
                            <li className="list-disc">Troubleshooting</li>
                            <li className="list-disc">Qualitätssicherung</li>
                        </ul>
                    </div>
                    <div
                        className="w-full translate-y-1/2 bg-blue-400 shadow-lg translate-x-0sition-all sm:w-full sm:translate-x-1/2 2xl:translate-x-1/4 sm:translate-y-0 h-2/5 sm:h-4/5 rounded-xl sm:hover:scale-105"
                    ></div>
                </div>
            </div>
        </>
    );
}

export default Dienstleistungen;
