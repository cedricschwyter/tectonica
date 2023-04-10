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
                                // <div
                                //   key={element.name}
                                //   classNameName="grid w-full min-h-[50%] grid-cols-12 grid-rows-6"
                                // >
                                //   <div classNameName="flex flex-col items-center justify-end h-full grid-rows-6 row-span-5 row-start-1 shadow-lg sm:row-start-2 sm:col-span-8 col-span-full sm:col-start-2 sm:row-span-4 sm:flex-row lg:col-span-8 lg:col-start-2 2xl:col-span-6 2xl:col-start-4 rounded-xl bg-black/25 backdrop-blur-md">
                                //     <div classNameName="flex flex-col w-full m-1 sm:translate-x-1/3 sm:translate-y-0 translate-y-1/4 2xl:translate-x-[16.666667%] rounded-2xl sm:m-0">
                                //       <div classNameName="m-4 text-4xl font-bold text-center text-white grow">
                                //         {element.name}
                                //       </div>
                                //       <div classNameName="text-white mb-4">{element.position}</div>
                                //     </div>
                                //     <div
                                //       id="map"
                                //       classNameName="w-full translate-y-1/2 bg-blue-400 shadow-lg translate-x-0sition-all sm:w-full sm:translate-x-1/2 2xl:translate-x-1/4 sm:translate-y-0 h-2/5 sm:h-4/5 rounded-xl sm:hover:scale-105"
                                //     >
                                //       <NextLink href={element.picture} target="_blank">
                                //         <Image
                                //           classNameName="rounded-xl object-cover"
                                //           src={element.picture}
                                //           layout="fill"
                                //           alt={`Bild ${element.name}`}
                                //         />
                                //       </NextLink>
                                //     </div>
                                //   </div>
                                // </div>
                                <div className="mb-24 mx-2" key={index}>
                                    <div className="rounded-lg hover:shadow-teal-600 hover:shadow-3xl hover:scale-105 transition-all shadow-lg h-full block bg-black/25 backdrop-blur-md text-white min-w-[370px] ">
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
