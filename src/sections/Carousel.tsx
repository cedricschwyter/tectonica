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
    Link,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { Slide } from './Slide';

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export function Carousel() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });

    return (
        <Box
            w={'full'}
            h={'100vh'}
            overflow={'hidden'}>
            {/* CSS files for react-slick */}
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
            {/* Left Icon */}
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
            {/* Right Icon */}
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
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                <Slide
                    index={0}
                    title={"Heckenried Meggen"}
                    text={"The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters."}
                    image={'/img/2003_Heckenried_Meggen.jpg'}
                    pdf={'2003_Heckenried_Meggen.pdf'}
                />
                <Slide
                    index={1}
                    title={"Design Projects 2"}
                    text={"The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters."}
                    image={'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80'}
                    pdf={'2006_Wilstrasse_Dübendorf.pdf'}
                />
                <Slide
                    index={2}
                    title={"Design Projects 3"}
                    text={"The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters."}
                    image={"https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"}
                    pdf={'2008_VKU_Flughafen.pdf'}
                />
            </Slider>
        </Box>
    );
}
