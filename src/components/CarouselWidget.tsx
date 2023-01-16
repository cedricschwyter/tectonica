import { Box, Flex, Stack } from "@chakra-ui/react";

interface CarouselWidgetProps {
    index: number;
    background: string;
    children?: React.ReactNode;
}

const CarouselWidget = ({ index, background, children }: CarouselWidgetProps) => {
    return (
        <Box
            key={index}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${background})`}
            minH={"100vh"}
        >
            <Flex justify="center" align={"center"} minH={"100vh"}>
                <Stack key={index}
                    w={{ base: '90%', md: '70%' }}
                >
                    <Flex width={"100%"} backgroundColor={"rgba(16,16,16,0.9)"} p={"5%"} borderRadius={"1%"}>
                        {children}
                    </Flex>
                </Stack>
            </Flex>
        </Box>
    )
}
export default CarouselWidget;