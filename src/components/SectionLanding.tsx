import { Flex, Stack, VStack, useBreakpointValue } from "@chakra-ui/react";
import { AnimationControls, motion } from "framer-motion";

interface SectionLandingProps {
    image: string;
    children?: React.ReactNode;
    animation: AnimationControls;
}
const SectionLanding = ({ image, children, animation }: SectionLandingProps) => {
    return (
        <motion.div animate={animation}>
            <Flex
                w={'full'}
                h={'100vh'}
                backgroundImage={
                    'url(' + image + ')'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}
                position={{ base: "static", md: "fixed" }}
            >
                <VStack
                    w={'full'}
                    justify={'center'}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                    bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                    <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                        {children}
                    </Stack>
                </VStack>
            </Flex>
        </motion.div>
    )
}
export default SectionLanding;