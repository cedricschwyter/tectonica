import {
    Box,
    Flex,
    Text,
    useColorModeValue,
    Image,
    SimpleGrid,
    VStack,
    Stack
} from '@chakra-ui/react';
import Background from '@components/Background';
import PageTitle from '@components/PageTitle';

import { NavBar } from '@sections/NavBar';

const Team = () => {
    const members = [
        {
            name: "Eugen Hasso",
            picture: "https://unsplash.com/photos/0Zx1bDv5BNY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY5MTk1NDk0&force=true",
            position: "CEO",
        },
        {
            name: "Eugen Hasso",
            picture: "https://unsplash.com/photos/HzDF-rxlSeM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8d29yayUyMHBvcnRyYWl0fGVufDB8fHx8MTY2OTIwMzU0MA&force=true",
            position: "Bauleiter",
        },
    ]

    return (
        <>
            <Background />
            <PageTitle title={"tectonica | Team"} />
            <Flex flexDirection="column" w={'full'} minHeight="100vh" height="100%">
                <NavBar />
                <Flex
                    flexDirection={"column"}
                    w={'full'}
                    minHeight="100vh"
                    height={"100%"}
                    bgSize='cover'
                    bgAttachment='fixed'
                >
                    <VStack
                        w={'full'}
                        minHeight="100vh"
                        justify={'center'}
                        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
                    >
                        <Stack
                            width="100%"
                            align={'flex-start'}
                            pt="5em"
                            pl="20%"
                            pr="20%"
                            pb="5em"
                        >
                            <Text fontSize={"4xl"} pb="1%" color={'white'}>Unser Team</Text>
                            <SimpleGrid minChildWidth={["50%", "25%"]} spacing='5vh' width="100%">
                                {members.map((member, index) => (
                                    <Box
                                        key={index}
                                        bg={useColorModeValue('white', 'gray.800')}
                                        borderWidth="1px"
                                        rounded="lg"
                                        shadow="lg"
                                        position="relative"
                                    >
                                        <Box p="4%">
                                            <Image
                                                src={member.picture}
                                                alt={``}
                                                roundedTop="lg"
                                                height="30vh"
                                                width={"100%"}
                                                objectFit="cover"
                                            />
                                            <Flex mt="1" justifyContent="space-between" alignContent="center">
                                                <Box
                                                    fontSize="1xl"
                                                    fontWeight="semibold"
                                                    lineHeight="tight"
                                                >
                                                    {member.name}
                                                </Box>
                                                <Box
                                                    fontSize="1xl"
                                                    fontWeight="semibold"
                                                    lineHeight="tight"
                                                >
                                                    {member.position}
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </Box>
                                ))}
                            </SimpleGrid>
                        </Stack>
                    </VStack>
                </Flex>
            </Flex >
        </>
    );
}

export default Team;