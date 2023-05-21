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
                picture: "https://xsgames.co/randomusers/avatar.php?g=male",
                position: "dipl. Bauleiter HFP, Geschaeftsfuehrer",
            },
            {
                name: "Nicole Loetscher",
                picture: "https://xsgames.co/randomusers/avatar.php?g=male",
                position: "Finanzen und Administration",
            },
        ],
        [
            {
                name: "Andy Naef",
                picture: "https://xsgames.co/randomusers/avatar.php?g=male",
                position: "Abt. Fertigungstechnik",
            },
            {
                name: "Theo Rigas",
                picture: "https://xsgames.co/randomusers/avatar.php?g=male",
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
        <div className="min-h-screen">
            <div className="text-white text-center shadow text-4xl my-6">Team</div>
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
    );
};

export default Team;
