import {
    Box,
    Flex,
    Text,
    Button,
    Stack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
} from '@chakra-ui/icons';
import NextLink from 'next/link';

export const NavBar = () => {
    return (
        <div
            className='fixed top-0 mr-3 shadow-lg pb-1 bg-black/90 backdrop-blur-xl w-full z-50'
        >
            <Flex
                backgroundColor={"rgba(0,0,0,0)"}
                color={'white'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                align={'center'}>
                <Flex flex={{ base: 1 }} justify={"start"}>
                    <Text
                        className='rounded-sm p-1 text-3xl text-accent'
                        textAlign={["left", "center", "center"]}
                        as={NextLink} href={"/"}>
                        tectonica
                    </Text>
                </Flex>
                <div className='hidden sm:flex w-full sm:w-1/2 md:w-2/6 2xl:w-1/6 gap-2 text-white'>
                    <NextLink className='rounded  w-full hover:shadow-md hover:bg-black/30 p-2 font-semibold text-center hover:scale-105 transition-all active:shadow-inner active:scale-95 ' href={'/projects'}>Projekte</NextLink>
                    <NextLink className='rounded  w-full hover:shadow-md hover:bg-black/30 p-2 font-semibold text-center hover:scale-105 transition-all active:shadow-inner active:scale-95 ' href={'/team'}>Team</NextLink>
                    <NextLink className='rounded  w-full hover:shadow-md hover:bg-black/30 p-2 font-semibold text-center hover:scale-105 transition-all active:shadow-inner active:scale-95 ' href={'/jobs'}>Jobs</NextLink>
                    <NextLink className='rounded  w-full hover:shadow-md hover:bg-black/30 p-2 font-semibold text-center hover:scale-105 transition-all active:shadow-inner active:scale-95 ' href={'/contact'}>Kontakt</NextLink>
                </div>
                <Stack
                    className='sm:!hidden block'
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rounded={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                            minW={0}>
                            <HamburgerIcon w={6} h={6} color='white' />
                        </MenuButton>
                        <MenuList className='!bg-slate-900 p-6' flexDir={"column"}>
                            <NextLink className='rounded w-full hover:shadow-md hover:underline p-3 font-semibold text-center  active:shadow-inner' href={'/projects'}>Projects</NextLink>
                            <NextLink className='rounded w-full hover:shadow-md hover:underline p-3 font-semibold text-center  active:shadow-inner' href={'/team'}>Team</NextLink>
                            <NextLink className='rounded w-full hover:shadow-md hover:underline p-3 font-semibold text-center  active:shadow-inner' href={'/jobs'}>Jobs</NextLink>
                            <NextLink className='rounded w-full hover:shadow-md hover:underline p-3 font-semibold text-center  active:shadow-inner' href={'/contact'}>Contact</NextLink>
                        </MenuList>
                    </Menu>
                </Stack>
            </Flex>
        </div>
    )
}
