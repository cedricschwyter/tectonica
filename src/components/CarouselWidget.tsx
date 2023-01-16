import { Box, Flex, Stack, Heading, Spacer, Button } from "@chakra-ui/react";
import { Router } from "next/router";

interface CarouselWidgetProps extends React.FC {
    index: number;
    background: string;
}
const CarouselWidget = (props, { index, background }: CarouselWidgetProps) => {
    return (
        <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${background})`}
        >
            <Flex justify="center" align={"center"} minH={"100vh"}>
                <Stack key={index}
                    w={'50%'}
                >
                    <Flex width={"100%"} backgroundColor={"rgba(16,16,16,0.9)"} p={"1%"} borderRadius={"1%"}>
                        {props.children}
                    </Flex>
                </Stack>
            </Flex>
        </Box>
    )
}
export default CarouselWidget;