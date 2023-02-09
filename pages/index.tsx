import {
    Flex,
    Text,
    Stack,
    Icon,
    useBreakpointValue,
    SimpleGrid,
    Heading,
    Spinner,
    VStack
} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { ReactElement, useEffect } from 'react';
import { NavBar } from '@sections/NavBar';
import Footer from '@sections/Footer';
import PageTitle from '@components/PageTitle';
import { AnimationControls, motion, useAnimation } from "framer-motion";
import { isMobile } from 'react-device-detect';

interface FeatureProps {
    title: string;
    icon: ReactElement;
}

const Feature = ({ title, icon }: FeatureProps) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.100'}
                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
        </Stack>
    );
};
interface SectionLandingProps {
    image: string;
    children?: React.ReactNode;
    animation?: AnimationControls;
    zIndex?: number;
}
const SectionLanding = ({ image, children, zIndex = 0 }: SectionLandingProps) => {
    return (
            <Flex
                w={'full'}
                h={'100vh'}
                backgroundImage={
                    'url(' + image + ')'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}
                position={{ base: "static"}}
                zIndex={zIndex}
            >
                <VStack
                    w={'full'}
                    justify={'center'}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                    bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                    <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                        {children}
                    </Stack>
                </VStack>
            </Flex>
    )
}
const LandingPage = () => {
    /*
    let page = 1;
    const animation1 = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();
    const animation4 = useAnimation();
    const handleScroll = (e) => {
        if (e.deltaY > 0) {
            if (page == 1) {
                animation1.start({
                    opacity: 0
                });
                animation2.start({
                    opacity: 1
                });
                page++;
            } else if (page == 2) {
                animation2.start({
                    opacity: 0
                });
                animation3.start({
                    opacity: 1
                });
                page++;
            } else if (page == 3) {
                animation3.start({
                    opacity: 0
                });
                animation4.start({
                    opacity: 1
                });
                page++;
            }
        }
        if (e.deltaY < 0) {
            if (page == 2) {
                animation1.start({
                    opacity: 1
                })
                animation2.start({
                    opacity: 0
                })
                page--;
            } else if (page == 3) {
                animation2.start({
                    opacity: 1
                })
                animation3.start({
                    opacity: 0
                })
                page--;
            } else if (page == 4) {
                animation3.start({
                    opacity: 1
                })
                animation4.start({
                    opacity: 0
                })
                page--;
            }
        }
    };
    useEffect(() => {
        animation1.start({
            opacity: 1
        })
        window.addEventListener("wheel", handleScroll);
        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

    */
    return (
        <>
            <PageTitle title={"tectonica | Baurealisationen"} />
            <Flex flexDirection="column">
                <NavBar />
                <SectionLanding
                    image='https://unsplash.com/photos/h2yOqTOFu1w/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8TThqVmJMYlRSd3N8fHx8fDJ8fDE2NjkwNTgxOTk&force=true'
                >
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
                    >
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                        eiusmod tempor
                    </Text>
                </SectionLanding>
                <SectionLanding
                    image='https://unsplash.com/photos/Mzm6gC4tdak/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8TThqVmJMYlRSd3N8fHx8fDJ8fDE2NjkwNTgxOTk&force=true'
                >
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize="xl"
                    >
                        Vorstellung
                    </Text>
                </SectionLanding>
                <SectionLanding
                    image='https://unsplash.com/photos/ozAUtewYULI/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8TThqVmJMYlRSd3N8fHx8fDJ8fDE2NjkwNTgzMjg&force=true'
                >
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize="xl"
                    >
                        Philosophie
                    </Text>
                </SectionLanding>
                <SectionLanding
                    image='https://unsplash.com/photos/BeOEIEw1WOk/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8TThqVmJMYlRSd3N8fHx8fDJ8fDE2NjkwNTg2OTY&force=true'
                >
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize="xl"
                    >
                        Vision
                    </Text>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                        <Feature
                            icon={<Icon as={FcAssistant} w={10} h={10} />}
                            title={'Augenhöhe (Rhigetti Partner)'}
                        />
                        <Feature
                            icon={<Icon as={FcDonate} w={10} h={10} />}
                            title={'Denken auch ausserhalb des normalen Rahmens'}
                        />
                        <Feature
                            icon={<Icon as={FcInTransit} w={10} h={10} />}
                            title={'Den Ernst in die Sache investieren nicht in die Person'}
                        />
                    </SimpleGrid>
                </SectionLanding>
                <Footer />
            </Flex>
        </>
    );
}

export default LandingPage;