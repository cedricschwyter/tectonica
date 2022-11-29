import React from 'react';
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
    Button,
    Flex,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import Router from 'next/router';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { NavBar } from '@sections/NavBar';

export default function Home() {
    const [slider, setSlider] = React.useState<Slider | null>(null);
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });
    const projects = [
        {
            title: 'Heckenried Meggen',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
            pdf:
                '2003_Heckenried_Meggen.pdf',
        },
        {
            title: 'Wilstrasse Dübendorf',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
            pdf:
                '2006_Wilstrasse_Dübendorf.pdf',
        },
        {
            title: 'VKU Flughafen',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
            pdf:
                '2008_VKU_Flughafen.pdf',
        },
    ];
    return (
        <Flex flexDirection="column" w={'full'} minHeight="100vh" height="100%">
            <NavBar />
            <Box
                bgGradient={'radial(blackAlpha.700, transparent)'}
                height={'100vh'}
                width={'full'}
                overflow={'hidden'}>
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
                    dots={true}
                    arrows={true}
                    infinite={true}
                    autoplay={true}
                    speed={500}
                    autoplaySpeed={5000}
                    slidesToShow={1}
                    slidesToScroll={1}
                    ref={(slider) => setSlider(slider)}
                >
                    {projects.map((project, index) => (
                        <Box
                            key={index}
                            height={'6xl'}
                            position="relative"
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                            backgroundSize="cover"
                            backgroundImage={`url(${project.image})`}>
                            <Container size="container.lg" height="600px" position="relative">
                                <Stack key={index}
                                    spacing={6}
                                    w={'full'}
                                    maxW={'lg'}
                                    position="absolute"
                                    top="50%"
                                    transform="translate(0, -50%)">
                                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                        {project.title}
                                    </Heading>
                                    <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                                        {project.text}
                                    </Text>
                                    <Button onClick={() => { Router.push(`/pdf/${project.pdf}`) }}>
                                        Download PDF
                                    </Button>
                                </Stack>
                            </Container>
                        </Box>
                    ))}
                </Slider>
            </Box>
        </Flex>
    );
}