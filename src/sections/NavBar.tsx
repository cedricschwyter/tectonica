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

const navItems = [
    {
        name: 'Unternehmen',
        href: '/',
        subNavItems: [
            {
                name: 'Portrait',
                href: '/portrait',
            },
            {
                name: 'Vision',
                href: '/vision',
            },
            {
                name: 'Team',
                href: '/team',
            },
            {
                name: 'Jobs',
                href: '/jobs',
            },
        ],
    },
    {
        name: 'Dienstleistungen',
        href: '/dienstleistungen',
    },
    {
        name: 'Aktuelles',
        href: '/aktuelles',
    },
    {
        name: 'Kontakt',
        href: '/kontakt',
    },
]

export const NavBar = () => {
    return (
        <div
            className='fixed top-0 z-50 w-full pb-1 mr-3 shadow-lg bg-black/90 backdrop-blur-xl'
        >
            <Flex
                backgroundColor={"rgba(0,0,0,0)"}
                color={'white'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                align={'center'}>
                <Flex flex={{ base: 1 }} justify={"start"}>
                    <Text
                        className='p-1 text-3xl rounded-sm text-accent'
                        textAlign={["left", "center", "center"]}
                        as={NextLink} href={"/"}>
                        tectonica
                    </Text>
                </Flex>
                <div className='hidden w-full gap-2 text-white sm:flex basis-1/2'>
                    {
                        navItems.map((item, index) => {
                            return (
                                <NextLink
                                    className='w-full p-2 mx-2 font-semibold text-center transition-all rounded hover:shadow-md hover:bg-white/30 hover:scale-105 active:shadow-inner active:scale-95'
                                    key={index}
                                    href={item.href}
                                    passHref
                                >
                                    {item.name}
                                </NextLink>
                            )
                        })
                    }
                    {/* TODO: Dropdown for Unternehmen
                    {
                        navItems[0].subNavItems
                            .map((item, index) => {
                                return (
                                    <NextLink
                                        className='w-full p-3 font-semibold text-center rounded hover:shadow-md hover:underline active:shadow-inner'
                                        key={index}
                                        href={item.href}
                                        passHref
                                    >
                                        {item.name}
                                    </NextLink>
                                )
                            })
                    } */}
                    {/* <NextLink className='w-full p-2 font-semibold text-center transition-all rounded hover:shadow-md hover:bg-white/30 hover:scale-105 active:shadow-inner active:scale-95 ' href={'/projects'}>Projekte</NextLink>
                    <NextLink className='w-full p-2 font-semibold text-center transition-all rounded hover:shadow-md hover:bg-white/30 hover:scale-105 active:shadow-inner active:scale-95 ' href={'/team'}>Team</NextLink>
                    <NextLink className='w-full p-2 font-semibold text-center transition-all rounded hover:shadow-md hover:bg-white/30 hover:scale-105 active:shadow-inner active:scale-95 ' href={'/jobs'}>Jobs</NextLink>
                    <NextLink className='w-full p-2 font-semibold text-center transition-all rounded hover:shadow-md hover:bg-white/30 hover:scale-105 active:shadow-inner active:scale-95 ' href={'/contact'}>Kontakt</NextLink> */}
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
                            {
                                navItems.map((item, index) => {
                                    return (
                                        <NextLink
                                            className='w-full p-3 font-semibold text-center rounded hover:shadow-md hover:underline active:shadow-inner'
                                            key={index}
                                            href={item.href}
                                            passHref
                                        >
                                            {item.name}
                                        </NextLink>
                                    )
                                })
                            }
                        </MenuList>
                    </Menu>
                </Stack>
            </Flex>
        </div>
    )
}
