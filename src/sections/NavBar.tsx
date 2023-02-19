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
            <div className='flex px-4 py-2 text-white align-center'>
                <div className='flex justify-start basis-1'>
                    <NextLink
                        className='p-1 text-3xl text-left rounded-sm text-accent'
                        href={"/"}>
                        tectonica
                    </NextLink>
                </div>
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
                <div id='stack-chakra'
                    className='sm:!hidden block'
                // flex={{ base: 1, md: 0 }}
                // justify={'flex-end'}
                // direction={'row'}
                // spacing={6}
                >
                    <div>
                        <button
                            className=''
                        // as={Button}
                        // rounded={'full'}
                        // variant={'link'}
                        // cursor={'pointer'}
                        // minW={0}
                        >
                            {/* <HamburgerIcon w={6} h={6} color='white' /> */}
                        </button>
                        <div className='!bg-slate-900 p-6 flex flex-col'>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
