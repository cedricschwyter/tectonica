import React from 'react';
import {
    Box,
    IconButton,
    useBreakpointValue,
    Heading,
    Text,
    Button,
    Flex,
    Image,
    Link,
    Spacer,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import Router from 'next/router';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { NavBar } from '@sections/NavBar';
import CenteredWidget from '@components/CenteredWidget';
import PageTitle from '@components/PageTitle';
import Background from '@components/Background';

const Projects = () => {
    const [slider, setSlider] = React.useState<Slider | null>(null);
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });
    const pdfs = [
        '2003_Heckenried_Meggen',
        '2006_Wilstrasse_Dübendorf',
        '2008_VKU_Flughafen',
        '2009_Hochdorf_Nutritec_Sulgen',
        '2012_HLM_Einsiedeln_Halle_70-80',
        '2012_SCK_Kloten',
        '2012_HLM_Einsiedeln_Verwaltung',
        '2012_Zypressenhof_Dietikon',
        '2014_EAH_Hotel_25Hours',
        '2017_EFH_Amanjiwo_2_Luzern',
        '2017_Biozentrum_Basel-2',
    ];
    const projects = [
        {
            title: 'Heckenried Meggen',
            text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            file: pdfs[0],
        },
        {
            title: 'Wilstrasse Dübendorf',
            text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            file: pdfs[1],
        },
        {
            title: 'VKU Flughafen',
            text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            file: pdfs[2],
        },
    ];
    const StyleSheet = () => {
        return (
            <>
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
            </>
        )
    }
    return (
        <>
            <StyleSheet />
            <Background />
            <PageTitle title={"tectonica | Projekte"} />
            <Flex flexDirection="column" w={'full'} minHeight="100vh" height="100%">
                <NavBar />
                <Box
                    bgGradient={'radial(blackAlpha.700, transparent)'}
                    height={'100vh'}
                    width={'full'}
                    overflow={'hidden'}>
                    <IconButton
                        aria-label="left-arrow"
                        variant="ghost"
                        position="absolute"
                        left={side}
                        top={top}
                        transform={'translate(0%, -50%)'}
                        zIndex={2}
                        onClick={() => slider?.slickPrev()}>
                        <BiLeftArrowAlt size="40px" />
                    </IconButton>
                    <IconButton
                        aria-label="right-arrow"
                        variant="ghost"
                        position="absolute"
                        right={side}
                        top={top}
                        transform={'translate(0%, -50%)'}
                        zIndex={2}
                        onClick={() => slider?.slickNext()}>
                        <BiRightArrowAlt size="40px" />
                    </IconButton>
                    <Slider
                        dots={false}
                        arrows={true}
                        infinite={true}
                        slidesToShow={1}
                        slidesToScroll={1}
                        ref={(slider) => setSlider(slider)}
                    >
                        {projects.map((project, index) => (
                            <CenteredWidget key={index}>
                                <Flex flexDir={{ base: "column", md: "row-reverse" }}>
                                    <Flex>
                                        <Image src={`/img/${project.file}.jpg`} alt="Preview" />
                                    </Flex>
                                    <Flex flexDir={"column"} mr="2%" width={"100%"}>
                                        <Heading fontSize={{ base: '2xl', md: '4xl' }} color={"white"}>
                                            {project.title}
                                        </Heading>
                                        <Text fontSize={{ base: 'sm', lg: 'md' }} color="GrayText">
                                            {project.text}
                                        </Text>
                                        <Spacer />
                                        <Button onClick={() => { Router.push(`/pdf/${project.file}.pdf`) }}>
                                            Download PDF
                                        </Button>
                                    </Flex>
                                </Flex>
                            </CenteredWidget>
                        ))}
                        <CenteredWidget key={4}>
                            <Flex flexDir={"column"} mr="2%">
                                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color={"white"}>
                                    Alle Projekte
                                </Heading>
                                <Flex flexDir={"column"}>
                                    {
                                        pdfs.map((pdf, index) => {
                                            return (<Link target="_blank" href={'/pdf/' + pdf + '.pdf'} key={index} color="GrayText">{pdf.replaceAll('_', ' ')}</Link>)
                                        })
                                    }
                                </Flex>
                            </Flex>
                        </CenteredWidget>
                    </Slider>
                </Box>
            </Flex >
        </>
    );
}

export default Projects;