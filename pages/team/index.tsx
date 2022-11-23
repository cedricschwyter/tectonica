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
import { ReactElement } from 'react';
import { NavBar } from '../../src/sections/NavBar';

interface MamberProps {
    name: string;
    picture: string;
}

const Member = ({ name, picture }: MamberProps) => {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.800')}
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
        >
            <Box p="6">
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
                        fontSize="2xl"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                    >
                        {name}
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

function ProductAddToCart() {
    return (
        <Flex flexDirection="column" w={'full'} height="100%">
            <NavBar />
            <Flex
                flexDirection={"column"}
                w={'full'}
                height={"100vh"}
                backgroundSize={'cover'}
                backgroundPosition={'center center'}
                backgroundImage={
                    'url(https://unsplash.com/photos/yWwob8kwOCk/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY5MTk0OTcx&force=true)'
                }
            >
                <VStack
                    w={'full'}
                    justify={'center'}
                    pt="2%"
                >
                    <Stack
                        width="70%"
                        align={'flex-start'}
                        spacing={6}
                        p={'10vh'}>
                        <Text fontSize={"4xl"} pb="1%" color={'white'}>Unser Team</Text>
                        <SimpleGrid minChildWidth='20%' spacing='40px' width="100%">
                            <Member
                                name='someone'
                                picture={"https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits.jpg"}
                            />
                            <Member
                                name='someone'
                                picture={"https://unsplash.com/photos/0Zx1bDv5BNY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY5MTk1NDk0&force=true"}
                            />
                            <Member
                                name='someone'
                                picture={"https://unsplash.com/photos/0Zx1bDv5BNY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY5MTk1NDk0&force=true"}
                            />
                            <Member
                                name='someone'
                                picture={"https://unsplash.com/photos/0Zx1bDv5BNY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY5MTk1NDk0&force=true"}
                            />
                            <Member
                                name='someone'
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