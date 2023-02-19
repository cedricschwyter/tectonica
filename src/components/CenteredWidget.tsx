
interface CenteredWidgetProps {
    width?: string;
    children?: React.ReactNode;
}

const CenteredWidget = ({ width = "60%", children }: CenteredWidgetProps) => {
    return (

        <>TODO</>
        // TODO: Cleanup we probably don't need this
        // <Box
        //     position="relative"
        //     backgroundPosition="center"
        //     backgroundRepeat="no-repeat"
        //     backgroundSize="cover"
        //     minH={"100vh"}
        // >
        //     <Flex justify="center" align={"center"} minH={"100vh"}>
        //         <Stack
        //             w={{ base: '90%', md: width }}
        //         >
        //             <Flex width={"100%"} backgroundColor={"rgba(16,16,16,0.9)"} p={"5%"} borderRadius={"1%"}>
        //                 {children}
        //             </Flex>
        //         </Stack>
        //     </Flex>
        // </Box>
    )
}
export default CenteredWidget;