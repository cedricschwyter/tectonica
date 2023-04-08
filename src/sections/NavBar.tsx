import Image from 'next/image';
import NextLink from 'next/link';
import { FaChevronRight, FaChevronDown, FaBuilding, FaBookOpen, FaEye, FaUsers, FaBriefcase, FaCogs, FaNewspaper, FaEnvelope } from 'react-icons/fa';

const navItems = [
    {
        name: 'Unternehmen',
        href: '/',
        icon: <FaBuilding />,
        subNavItems: [
            {
                name: 'Vision',
                href: '/#vision',
                icon: <FaEye />
            },
            {
                name: 'Team',
                href: '/#team',
                icon: <FaUsers />
            },
            {
                name: 'Karriere',
                href: '/#karriere',
                icon: <FaBriefcase />
            },
        ],
    },
    {
        name: 'Dienstleistungen',
        href: '/dienstleistungen',
        icon: <FaCogs />
    },
    {
        name: 'Aktuelles',
        href: '/aktuelles',
        icon: <FaNewspaper />
    },
    {
        name: 'Kontakt',
        href: '/kontakt',
        icon: <FaEnvelope />
    },
]

export const NavBar = () => {
    return (
        <div className="sticky top-0 z-50 w-auto sm:mx-2 sm:mb-3 sm:top-2 bg-white/70 sm:rounded-xl navbar backdrop-blur-lg">
            <div className="navbar-start h-24">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box">
                        {
                            navItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <NextLink
                                            href={item.href}
                                            passHref
                                        >
                                            {item.icon}
                                            {item.name}
                                            {item.subNavItems && <FaChevronRight />}
                                        </NextLink>
                                        {item.subNavItems && (
                                            <ul className='p-2 bg-white dropdown text-base-content'>
                                                {item.subNavItems.map((subItem, subIndex) => {
                                                    return (
                                                        <li key={subIndex}>
                                                            <NextLink
                                                                href={subItem.href}
                                                                passHref
                                                            >
                                                                {subItem.icon}
                                                                {subItem.name}
                                                            </NextLink>
                                                        </li>
                                                    )
                                                })
                                                }
                                            </ul>
                                        )
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <NextLink
                    className='p-2 text-3xl rounded-lg text-accent'
                    href={"/"}>
                    <Image src="/logo.svg" alt="Tectonica Logo" width="200" height="60" />
                </NextLink>
            </div>
            <div className="hidden navbar-end md:flex">
                <ul className="px-1 menu menu-horizontal flex-nowrap">
                    {
                        navItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NextLink
                                        href={item.href}
                                        scroll={false}
                                        passHref
                                    >
                                        {item.icon}
                                        {item.name}
                                        {item.subNavItems && <FaChevronDown />}
                                    </NextLink>
                                    {item.subNavItems && (
                                        <ul className='w-full p-2 bg-white dropdown text-base-content'>
                                            {item.subNavItems.map((subItem, subIndex) => {
                                                return (
                                                    <li key={subIndex}>
                                                        <NextLink
                                                            scroll={false}
                                                            href={subItem.href}
                                                            passHref
                                                        >
                                                            {subItem.icon}
                                                            {subItem.name}
                                                        </NextLink>
                                                    </li>
                                                )
                                            })
                                            }
                                        </ul>
                                    )
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
