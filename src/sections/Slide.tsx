import {
    Box,
    Stack,
    Heading,
    Text,
    Container,
    Button,
    Link,
} from '@chakra-ui/react';
import Router from 'next/router';
interface SlideProps {
    index: number,
    image: string,
    title: string,
    text: string,
    pdf: string
}
export const Slide = ({ index, image, title, text, pdf }: SlideProps) => {
    const path = '/pdf/' + pdf;
    return (
        <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundImage={`url(${image})`}>
            <Container size="container.lg" height="full" position="relative">
                <Stack
                    spacing={6}
                    w={'full'}
                    maxW={'lg'}
                    position="absolute"
                    top="50%"
                    transform="translate(0, -50%)">
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        {title}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                        {text}
                    </Text>
                    <Button onClick={() => alert(`Post ${title} clicked`)}>{index}</Button>
                </Stack>
            </Container>
        </Box>
    )
}