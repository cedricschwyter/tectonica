import NextLink from 'next/link';
import Image from "next/image";

interface TeamProps {
    // children: ReactNode;
}

const Team = ({ }: TeamProps) => {
    const members = [
        [
            {
                name: "Thomas Loetscher",
                picture: "",
                position: "dipl. Bauleiter HFP, Geschaeftsfuehrer"
            },
            {
                name: "Nicole Loetscher",
                picture: "",
                position: "Finanzen und Administration",
            },
        ],
        [

            {
                name: "Andy Naef",
                picture: "",
                position: "Abt. Fertigungstechnik",
            },
            {
                name: "Theo Rigas",
                picture: "",
                position: "dipl. Architekt ETH/SIA, beratender Architekt"
            },
            {
                name: "Cedric Schwyter",
                picture: "/img/IMG_0243.jpg",
                position: "Software-Ingenieur, EDV Verantwortlicher"
            }
        ]
    ]

    return (
        <>
            <div className="text-white text-4xl">
                Team
            </div>
            {members.map((row, index) => {
                return (
                    <div key={index} className="flex flex-row justify-center">
                        {row.map(element => {
                            return (
                                <div key={element.name} className="grid w-full min-h-[50%] grid-cols-12 grid-rows-6 shadow-lg">
                                    <div className="flex flex-col items-center justify-end h-full grid-rows-6 row-span-5 row-start-1 shadow-lg sm:row-start-2 sm:col-span-8 col-span-full sm:col-start-2 sm:row-span-4 sm:flex-row lg:col-span-8 lg:col-start-2 2xl:col-span-6 2xl:col-start-4 rounded-xl bg-black/25 backdrop-blur-md">
                                        <div className="flex flex-col w-full m-1 sm:translate-x-1/3 sm:translate-y-0 translate-y-1/4 2xl:translate-x-[16.666667%] rounded-2xl sm:m-0">
                                            <div className="m-4 text-4xl font-bold text-center text-white grow">
                                                {element.name}
                                            </div>
                                            <div className="text-white mb-4">
                                                {element.position}
                                            </div>
                                        </div>
                                        <div id='map' className="w-full translate-y-1/2 bg-blue-400 shadow-lg translate-x-0sition-all sm:w-full sm:translate-x-1/2 2xl:translate-x-1/4 sm:translate-y-0 h-2/5 sm:h-4/5 rounded-xl sm:hover:scale-105">
                                            <NextLink href={element.picture} target="_blank">
                                                <Image className="rounded-xl object-cover" src={element.picture} layout="fill" alt={`Bild ${element.name}`} />
                                            </NextLink>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </>
    );
}

export default Team;
