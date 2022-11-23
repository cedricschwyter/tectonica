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

import { NavBar } from '../../src/sections/NavBar';

interface MemberProps {
    name: string;
    position: string;
    picture: string;
}

const Member = ({ name, position, picture }: MemberProps) => {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.800')}
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
        >
            <Box p="4%">
                <Image
                    src={picture}
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
                        {name}
                    </Box>
                    <Box
                        fontSize="1xl"
                        fontWeight="semibold"
                        lineHeight="tight"
                    >
                        {position}
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

function ProductAddToCart() {
    return (
        <Flex flexDirection="column" w={'full'} minHeight="100vh" height="100%">
            <NavBar />
            <Flex
                flexDirection={"column"}
                w={'full'}
                minHeight="100vh"
                height={"100%"}
                bgSize='cover'
                bgAttachment='fixed'
                backgroundImage={
                    'url(https://unsplash.com/photos/yWwob8kwOCk/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY5MTk0OTcx&force=true)'
                }
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
                        <SimpleGrid minChildWidth={["50%", "30%"]} spacing='5vh' width="100%">
                            <Member
                                name='Helmine Jennifer'
                                position="CEO"
                                picture={"https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits.jpg"}
                            />
                            <Member
                                name='Hardy Anina'
                                position="Bauleiter"
                                picture={"https://unsplash.com/photos/0Zx1bDv5BNY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY5MTk1NDk0&force=true"}
                            />
                            <Member
                                name='Wenzeslaus Emilia'
                                position="CEO"
                                picture={"https://unsplash.com/photos/HzDF-rxlSeM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8d29yayUyMHBvcnRyYWl0fGVufDB8fHx8MTY2OTIwMzU0MA&force=true"}
                            />
                            <Member
                                name='Eugen Hasso'
                                position="CEO"
                                picture={"https://unsplash.com/photos/0Zx1bDv5BNY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY5MTk1NDk0&force=true"}
                            />
                            <Member
                                name='Lothar Uta'
                                position="CEO"
                                picture={"https://unsplash.com/photos/0Zx1bDv5BNY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY5MTk1NDk0&force=true"}
                            />
                            <Member
                                name='Lothar Uta'
                                position="CEO"
                                picture={"https://unsplash.com/photos/0Zx1bDv5BNY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY5MTk1NDk0&force=true"}
                            />
                        </SimpleGrid>
                    </Stack>
                </VStack>
            </Flex>
        </Flex >
    );
}

export default ProductAddToCart;