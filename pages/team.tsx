import {
    Box,
    Flex,
    Image,
    SimpleGrid,
    Heading,
    Text,
    Center
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
                    p="10% 15%"
                >
                    <Center>
                        <Heading fontSize={{ base: '2xl', md: '4xl' }} color={"white"} zIndex={1}>Unser Team</Heading>
                    </Center>
                    <SimpleGrid minChildWidth={["50%", "30%"]} spacing='3vh' width="100%">
                        {members.map((member, index) => (
                            <Flex
                                key={index}
                                backgroundColor={"rgba(16,16,16,0.9)"}
                                p={"7%"}
                                rounded={"lg"}
                                borderRadius={"1%"}
                                position={"relative"}
                                flexDirection={"column"}
                            >
                                <Image
                                    src={member.picture}
                                    alt={``}
                                    roundedTop="lg"
                                    height="20vh"
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
                            </Flex>
                        ))}
                    </SimpleGrid>
                </Flex>
            </Flex>
        </>
    );
}

export default Team;