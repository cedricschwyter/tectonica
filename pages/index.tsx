import {
    Flex,
    Text,
    Stack,
    Icon,
    useBreakpointValue,
    VStack,
    SimpleGrid
} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { ReactElement } from 'react';
import { NavBar } from '@sections/NavBar';
import Footer from '@sections/Footer';

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

export default function WithSubnavigation() {
    return (
        <Flex flexDirection="column">
            <NavBar />
            <Flex
                w={'full'}
                h={'100vh'}
                backgroundImage={
                    'url(https://unsplash.com/photos/h2yOqTOFu1w/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8TThqVmJMYlRSd3N8fHx8fDJ8fDE2NjkwNTgxOTk&force=true)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}
            >

                <VStack
                    w={'full'}
                    justify={'center'}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                    bgGradient={'radial(blackAlpha.700, transparent)'}>
                    <Stack
                        maxW={'2xl'}
                        align={'flex-start'}
                        spacing={6}
                        p={'10vh'}>
                        <Text
                            color={'white'}
                            fontWeight={700}
                            lineHeight={1.2}
                            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                            eiusmod tempor
                        </Text>
                    </Stack>
                </VStack>
            </Flex>
            <Flex
                w={'full'}
                h={'100vh'}
                backgroundImage={
                    'url(https://unsplash.com/photos/Mzm6gC4tdak/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8TThqVmJMYlRSd3N8fHx8fDJ8fDE2NjkwNTgxOTk&force=true)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}>
                <VStack
                    w={'full'}
                    justify={'center'}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                    bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                    <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                        <Text
                            color={'white'}
                            fontWeight={700}
                            lineHeight={1.2}
                            fontSize="xl">
                            Vorstellung
                        </Text>
                    </Stack>
                </VStack>
            </Flex>
            <Flex
                w={'full'}
                h={'100vh'}
                backgroundImage={
                    'url(https://unsplash.com/photos/ozAUtewYULI/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8TThqVmJMYlRSd3N8fHx8fDJ8fDE2NjkwNTgzMjg&force=true)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}>
                <VStack
                    w={'full'}
                    justify={'center'}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                    bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                    <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                        <Text
                            color={'white'}
                            fontWeight={700}
                            lineHeight={1.2}
                            fontSize="xl">
                            Philosophie
                        </Text>
                    </Stack>
                </VStack>
            </Flex>
            <Flex
                w={'full'}
                h={'100vh'}
                backgroundImage={
                    'url(https://unsplash.com/photos/BeOEIEw1WOk/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8TThqVmJMYlRSd3N8fHx8fDJ8fDE2NjkwNTg2OTY&force=true)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}>
                <VStack
                    w={'full'}
                    justify={'center'}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                    bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                    <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                        <Text
                            color={'white'}
                            fontWeight={700}
                            lineHeight={1.2}
                            fontSize="xl">
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
                    </Stack>
                </VStack>
            </Flex>
            <Footer />
        </Flex >
    );
}
