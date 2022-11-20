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
import { NavBar } from '../src/sections/NavBar';

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
                h={'50vh'}
                backgroundImage={
                    'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}
            >

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
                            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                            eiusmod tempor
                        </Text>
                    </Stack>
                </VStack>
            </Flex>
            <Flex
                w={'full'}
                h={'50vh'}
                backgroundColor="black"
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
                h={'50vh'}
                backgroundColor="black"
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
                h={'50vh'}
                backgroundColor="black"
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
        </Flex >
    );
}