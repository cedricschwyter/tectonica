import {
    Box,
    Flex,
    Text,
    useColorModeValue,
    useDisclosure,
    Image
} from '@chakra-ui/react';
import { NavBar } from '../../src/sections/NavBar';

function ProductAddToCart() {
    return (
        <Flex flexDirection="column">
            <NavBar />
            <Flex flexDirection={"column"} pl={"200"} pr={"200"} pt="100">
                <Text fontSize={"4xl"} pb="50">Unser Team</Text>
                <Flex w="full" justifyContent="space-between" pb="50">
                    <Box
                        bg={useColorModeValue('white', 'gray.800')}
                        maxW="sm"
                        borderWidth="1px"
                        rounded="lg"
                        shadow="lg"
                        position="relative">
                        <Image
                            src={'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits.jpg'}
                            alt={``}
                            roundedTop="lg"
                        />
                        <Box p="6">
                            <Flex mt="1" justifyContent="space-between" alignContent="center">
                                <Box
                                    fontSize="2xl"
                                    fontWeight="semibold"
                                    as="h4"
                                    lineHeight="tight"
                                >
                                    Cool dude
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                    <Box
                        bg={useColorModeValue('white', 'gray.800')}
                        maxW="sm"
                        borderWidth="1px"
                        rounded="lg"
                        shadow="lg"
                        position="relative">
                        <Image
                            src={'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits.jpg'}
                            alt={``}
                            roundedTop="lg"
                        />
                        <Box p="6">
                            <Flex mt="1" justifyContent="space-between" alignContent="center">
                                <Box
                                    fontSize="2xl"
                                    fontWeight="semibold"
                                    as="h4"
                                    lineHeight="tight"
                                >
                                    Cool dude
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                    <Box
                        bg={useColorModeValue('white', 'gray.800')}
                        maxW="sm"
                        borderWidth="1px"
                        rounded="lg"
                        shadow="lg"
                        position="relative">
                        <Image
                            src={'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits.jpg'}
                            alt={``}
                            roundedTop="lg"
                        />
                        <Box p="6">
                            <Flex mt="1" justifyContent="space-between" alignContent="center">
                                <Box
                                    fontSize="2xl"
                                    fontWeight="semibold"
                                    as="h4"
                                    lineHeight="tight"
                                >
                                    Cool dude
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
                <Flex w="full" justifyContent="space-between">
                    <Box
                        bg={useColorModeValue('white', 'gray.800')}
                        maxW="sm"
                        borderWidth="1px"
                        rounded="lg"
                        shadow="lg"
                        position="relative">
                        <Image
                            src={'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits.jpg'}
                            alt={``}
                            roundedTop="lg"
                        />
                        <Box p="6">
                            <Flex mt="1" justifyContent="space-between" alignContent="center">
                                <Box
                                    fontSize="2xl"
                                    fontWeight="semibold"
                                    as="h4"
                                    lineHeight="tight"
                                >
                                    Cool dude
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                    <Box
                        bg={useColorModeValue('white', 'gray.800')}
                        maxW="sm"
                        borderWidth="1px"
                        rounded="lg"
                        shadow="lg"
                        position="relative">
                        <Image
                            src={'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits.jpg'}
                            alt={``}
                            roundedTop="lg"
                        />
                        <Box p="6">
                            <Flex mt="1" justifyContent="space-between" alignContent="center">
                                <Box
                                    fontSize="2xl"
                                    fontWeight="semibold"
                                    as="h4"
                                    lineHeight="tight"
                                >
                                    Cool dude
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                    <Box
                        bg={useColorModeValue('white', 'gray.800')}
                        maxW="sm"
                        borderWidth="1px"
                        rounded="lg"
                        shadow="lg"
                        position="relative">
                        <Image
                            src={'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits.jpg'}
                            alt={``}
                            roundedTop="lg"
                        />
                        <Box p="6">
                            <Flex mt="1" justifyContent="space-between" alignContent="center">
                                <Box
                                    fontSize="2xl"
                                    fontWeight="semibold"
                                    as="h4"
                                    lineHeight="tight"
                                >
                                    Cool dude
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default ProductAddToCart;