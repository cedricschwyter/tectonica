import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Textarea,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';
import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import PageTitle from '@components/PageTitle';

const Contact = () => {
    return (
        <>
            <PageTitle title={"tectonica | Kontakt"} />
            <Flex
                bg={useColorModeValue('gray.100', 'gray.900')}
                align="center"
                justify="center"
                id="contact">
                <Box
                    borderRadius="lg"
                    m={{ base: 5, md: 16, lg: 10 }}
                    p={{ base: 5, lg: 16 }}>
                    <Box>
                        <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                            <Heading
                                fontSize={{
                                    base: '4xl',
                                    md: '5xl',
                                }}>
                                Get in Touch
                            </Heading>
                            <Stack
                                spacing={{ base: 4, md: 8, lg: 20 }}
                                direction={{ base: 'column', md: 'row' }}>
                                <Box
                                    bg={useColorModeValue('white', 'gray.700')}
                                    borderRadius="lg"
                                    p={8}
                                    color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                                    shadow="base">
                                    <VStack spacing={5}>
                                        <FormControl isRequired>
                                            <FormLabel>Name</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement><BsPerson /></InputLeftElement>
                                                <Input type="text" name="name" placeholder="Your Name" />
                                            </InputGroup>
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormLabel>Email</FormLabel>

                                            <InputGroup>
                                                <InputLeftElement><MdOutlineEmail /></InputLeftElement>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Your Email"
                                                />
                                            </InputGroup>
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormLabel>Message</FormLabel>

                                            <Textarea
                                                name="message"
                                                placeholder="Your Message"
                                                rows={6}
                                                resize="none"
                                            />
                                        </FormControl>
                                        <Button
                                            colorScheme="blue"
                                            bg="blue.400"
                                            color="white"
                                            _hover={{
                                                bg: 'blue.500',
                                            }}
                                        >
                                            Send Message
                                        </Button>
                                    </VStack>
                                </Box>
                            </Stack>
                        </VStack>
                    </Box>
                </Box>
            </Flex>
        </>
    );
}
export default Contact;