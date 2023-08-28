import NextLink from "next/link";
import Image from "next/image";

interface TeamProps {
    // children: ReactNode;
}

const Team = ({ }: TeamProps) => {
    const members = [
        [
            {
                name: "Thomas Loetscher",
                picture: "/img/profile.jpg",
                position: "dipl. Bauleiter HFP, Geschäftsführer",
            },
            {
                name: "Nicole Loetscher",
                picture: "/img/profile.jpg",
                position: "Finanzen und Administration",
            },
        ],
        [
            {
                name: "Andy Naef",
                picture: "/img/profile.jpg",
                position: "Abt. Fertigungstechnik",
            },
            {
                name: "Teo Rigas",
                picture: "/img/profile.jpg",
                position: "dipl. Architekt ETH/SIA, beratender Architekt",
            },
            {
                name: "Cedric Schwyter",
                picture: "/img/IMG_0243.jpg",
                position: "Software-Ingenieur, EDV Verantwortlicher",
            },
        ],
    ];

    return (
        <div className="flex w-full min-h-screen grid-cols-12 grid-rows-6 justify-center">
            <div className="flex flex-col items-center justify-end h-full grid-rows-6 row-span-5 row-start-1 shadow-lg sm:row-start-2 sm:col-span-8 col-span-full sm:col-start-2 sm:row-span-4 sm:flex-row lg:col-span-8 lg:col-start-2 2xl:col-span-6 2xl:col-start-4 rounded-xl bg-black/25 backdrop-blur-md">
                <div className="flex flex-col w-full m-1 sm:translate-y-0 translate-y-1/4 rounded-2xl sm:m-0 items-center">
                    <div className="m-4 text-6xl font-bold text-center text-white grow">
                        Team
                    </div>
                    {members.map((row, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row justify-around mt-24 flex-wrap"
                            >
                                {row.map((element, index) => {
                                    return (
                                        <div className="mb-24 mx-2" key={index}>
                                            <div className="rounded-lg hover:scale-105 transition-all shadow-lg h-full block bg-black/25 backdrop-blur-md text-white min-w-[370px] ">
                                                <div className="flex justify-center">
                                                    <div className="flex justify-center -mt-[75px]">
                                                        <Image
                                                            width={150}
                                                            height={150}
                                                            src={element.picture}
                                                            className="rounded-full mx-auto shadow-lg h-[150px]"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="p-6">
                                                    <h5 className="text-lg font-bold mb-4">{element.name}</h5>
                                                    <p className="mb-6">{element.position}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Team;
