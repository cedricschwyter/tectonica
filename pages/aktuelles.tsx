import PageTitle from "@components/PageTitle";
import NextLink from 'next/link';
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaDownload } from "react-icons/fa";

const cardItems = [
    {
        projectName: 'VKU Flughafen',
        description: 'description',
        referenceSheet: '/pdf/2008_VKU_Flughafen.pdf',
        image: '/img/2008_VKU_Flughafen.jpg'
    },
    {
        projectName: 'VKU Flughafen1',
        description: 'description',
        referenceSheet: '/pdf/2008_VKU_Flughafen.pdf',
        image: '/img/2008_VKU_Flughafen.jpg'
    },
    {
        projectName: 'VKU Flughafen2',
        description: 'description',
        referenceSheet: '/pdf/2008_VKU_Flughafen.pdf',
        image: '/img/2008_VKU_Flughafen.jpg'
    }
];

const Aktuelles = () => {
    const [index, setIndex] = useState(0);

    return (
        <>
            <PageTitle title={"tectonica | Kontakt"} />
            <div className="grid w-full min-h-screen grid-cols-12 grid-rows-6 shadow-lg" style={{
                backgroundImage: 'url(https://unsplash.com/photos/8KfCR12oeUM/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc2ODAxMzU1&force=true&w=2400)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                }}>

                <div className="flex flex-col items-center justify-end h-full grid-rows-6 row-span-5 row-start-1 shadow-lg sm:row-start-2 sm:col-span-8 col-span-full sm:col-start-2 sm:row-span-4 sm:flex-row lg:col-span-8 lg:col-start-2 2xl:col-span-6 2xl:col-start-4 rounded-xl bg-black/25 backdrop-blur-md">
                    <div className="flex flex-col w-full m-1 sm:translate-x-1/3 sm:translate-y-0 translate-y-1/4 2xl:translate-x-[16.666667%] rounded-2xl sm:m-0">
                        <div className="m-4 text-4xl font-bold text-center text-white grow">
                            {cardItems[index].projectName}
                        </div>
                        <div className="m-4 text-2xl text-center text-white grow">
                            {cardItems[index].description}
                        </div>
                        <div className="flex justify-between">
                            <div className="btn" onClick={() => setIndex((index - 1 + cardItems.length) % cardItems.length)}><FaArrowLeft /></div>
                            <NextLink href={cardItems[index].referenceSheet} target="_blank">
                                <div className="btn">
                                    <FaDownload className="m-1"/>
                                    <p>Download Referenzblatt</p>
                                </div>
                            </NextLink>
                            <div className="btn" onClick={() => setIndex((index + 1) % cardItems.length)}><FaArrowRight /></div>
                        </div>
                    </div>
                    <div className="w-full translate-y-1/2 bg-blue-400 shadow-lg translate-x-0sition-all sm:w-full sm:translate-x-1/2 2xl:translate-x-1/4 sm:translate-y-0 h-2/5 sm:h-4/5 rounded-xl sm:hover:scale-105 object-contain">
                        <NextLink href={cardItems[index].image} target="_blank">
                            <Image className="rounded-xl object-cover" src={cardItems[index].image} layout="fill" alt={`${cardItems[index].projectName} image`} />
                        </NextLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Aktuelles;
