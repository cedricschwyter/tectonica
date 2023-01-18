import {
    Box,
    Button,
    Center,
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
import { NavBar } from '@sections/NavBar';
import Background from '@components/Background';
import CenteredWidget from '@components/CenteredWidget';

const Contact = () => {
    return (
        <>
            <Background />
            <PageTitle title={"tectonica | Kontakt"} />
            <Flex flexDirection="column" w={'full'} minHeight="100vh" height="100%">
                <NavBar />
                <CenteredWidget width='50%'>
                    <Flex flexDirection={"column"} width={"100%"} alignContent={"center"}>
                        <Center>
                            <Heading fontSize={{ base: '3xl', md: '4xl' }}>Get in Touch</Heading>
                        </Center>
                        <VStack spacing={5} width={"100%"}>
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
                    </Flex>
                </CenteredWidget>
            </Flex >
        </>
    );
}
export default Contact;