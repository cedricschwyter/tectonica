import PageTitle from "@components/PageTitle";
import NextLink from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaDownload } from "react-icons/fa";
import { pdfjs, Document, Page, Thumbnail } from 'react-pdf'
import Router from "next/router";


const cardItems = [
    {
        projectName: "Erweiterung Zentrallager Digitec Galaxus Halle B",
        referenceSheet: "/pdf/2022_Erweiterung_Zentrallager_Digitec_Galaxus_Halle_B.pdf",
        description: null,
        images: null,
    },
    {
        projectName: "Erweiterung und Umnutzung Halle B mitte",
        referenceSheet: "/pdf/2021_Erweiterung_und_Umnutzung_Halle_B_mitte.pdf",
        description: null,
        images: null
    },
    {
        projectName: "Umbau Halle B Mietfläche Estee Lauder",
        referenceSheet: "/pdf/2019_Umbau_Halle_B_Mietflaeche_Estee_Lauder.pdf",
        description: null,
        images: null
    },
    {
        projectName: "Umbau Halle B Mietfläche Digitec Shuttle",
        referenceSheet: "/pdf/2019_Umbau_Halle_B_Mietflaeche_Digitec_Shuttle.pdf",
        description: null,
        images: null
    },
    {
        projectName: "Ferrowohlen Umbau Halle B",
        referenceSheet: "/pdf/2019_Ferrowohlen_Umbau_Halle_B.pdf",
        description: null,
        images: null
    },
    {
        projectName: "EFH Amanjiwo 2 Luzern",
        referenceSheet: "/pdf/2017_EFH_Amanjiwo_2_Luzern.pdf",
        description: null,
        images: null
    },
    {
        projectName: "Biozentrum Basel",
        referenceSheet: "/pdf/2017_Biozentrum_Basel-2.pdf",
        description: null,
        images: null
    },
    {
        projectName: "EAH Hotel 25Hours",
        referenceSheet: "/pdf/2014_EAH_Hotel_25Hours.pdf",
        description: null,
        images: null
    },
    {
        projectName: "Zypressenhof Dietikon",
        referenceSheet: "/pdf/2012_Zypressenhof_Dietikon.pdf",
        description: null,
        images: null
    },
    {
        projectName: "SCK Kloten",
        referenceSheet: "/pdf/2012_SCK_Kloten.pdf",
        description: null,
        images: null
    },
    {
        projectName: "HLM Einsiedeln Verwaltung",
        referenceSheet: "/pdf/2012_HLM_Einsiedeln_Verwaltung.pdf",
        description: null,
        images: null
    },
    {
        projectName: "HLM Einsiedeln Halle 70-80",
        referenceSheet: "/pdf/2012_HLM_Einsiedeln_Halle_70-80.pdf",
        description: null,
        images: null
    },
    {
        projectName: "Hochdorf Nutritec Sulgen",
        referenceSheet: "/pdf/2009_Hochdorf_Nutritec_Sulgen.pdf",
        description: null,
        images: null
    },
    {
        projectName: "VKU Flughafen",
        referenceSheet: "/pdf/2008_VKU_Flughafen.pdf",
        description: null,
        images: ["/img/2008_VKU_Flughafen.jpg"],
    },
    {
        projectName: "Wilstrasse Dübendorf",
        referenceSheet: "/pdf/2006_Wilstrasse_Duebendorf.pdf",
        description: null,
        images: null
    },
    {
        projectName: "Heckenried Meggen",
        referenceSheet: "/pdf/2003_Heckenried_Meggen.pdf",
        description: null,
        images: null
    },
];

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Referenzen = () => {
    const [index, setIndex] = useState(0);

    return (
        <>
            <PageTitle title={"tectonica | Referenzen"} />
            <div className="grid w-full min-h-screen grid-cols-12 grid-rows-6 justify-center">
                <div className="flex flex-col items-center justify-end h-full grid-rows-6 row-span-5 row-start-1 shadow-lg sm:row-start-2 sm:col-span-8 col-span-full sm:col-start-2 sm:row-span-4 sm:flex-row lg:col-span-8 lg:col-start-2 2xl:col-span-6 2xl:col-start-4 rounded-xl bg-black/25 backdrop-blur-md">
                    <div className={cardItems[index].referenceSheet ? "flex flex-col w-full m-1 sm:translate-x-1/3 sm:translate-y-0 translate-y-1/4 2xl:translate-x-[16.666667%] rounded-2xl sm:m-0" : "flex flex-col w-full m-1 sm:translate-y-0 translate-y-1/4 rounded-2xl sm:m-0"}>
                        <div className="m-4 text-4xl font-bold text-center text-white grow">
                            {cardItems[index].projectName}
                        </div>
                        {cardItems[index].description &&
                            <div className="m-4 text-2xl text-center text-white grow">
                                {cardItems[index].description}
                            </div>
                        }
                        <div className="flex justify-evenly">
                            <div
                                className="btn bg-transparent text-white hover:text-teal-600 hover:border-teal-600 hover:bg-transparent"
                                onClick={() =>
                                    setIndex((index - 1 + cardItems.length) % cardItems.length)
                                }
                            >
                                <FaArrowLeft />
                            </div>
                            <div
                                className="btn bg-transparent text-white hover:text-teal-600 hover:border-teal-600 hover:bg-transparent"
                                onClick={() => setIndex((index + 1) % cardItems.length)}
                            >
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                    {cardItems[index].referenceSheet &&
                        <div className="w-full translate-y-1/2 bg-transparent shadow-lg translate-x-0sition-all sm:w-full sm:translate-x-1/2 2xl:translate-x-1/4 sm:translate-y-0 h-2/5 sm:h-4/5 rounded-xl sm:hover:scale-105 transition-transform">
                            <Document file={cardItems[index].referenceSheet} onItemClick={() => Router.push(cardItems[index].referenceSheet)}>
                                <Thumbnail pageIndex={0} />
                            </Document>
                        </div>

                    }
                </div>
            </div>
        </>
    );
};

export default Referenzen;
