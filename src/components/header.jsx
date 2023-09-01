'use client'

import { Menu } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from "@iconify/react"

export default function Header() {
    return(
        <header className="w-screen h-20 bg-transparent flex">
            <Link href="/" className="w-1/4 md:relative md:pl-[68px]">
                <Image src="/auto_mail_logo.png" alt="logo" width={118} height={68} className="md:hidden"/>
                <Image src="/auto_mail_logo.png" alt="logo" width={148} height={98} className="hidden md:flex md:absolute"/>
            </Link>
            <nav className="hidden md:flex md:relative md:items-center md:space-x-8 md:text-[#343E61] md:font-normal md:text-sm md:ml-[400px]">
                <Link href='/' className="hover:font-semibold">Accueil</Link>
                <Link href='/services' className="hover:font-semibold">Services</Link>
                <Link href='/solutions' className="hover:font-semibold">Solutions</Link>
                <Link href='/ressources' className="hover:font-semibold">Ressources</Link>
                <Link href='#contact' className="hover:font-semibold">Contact</Link>
            </nav>
            <nav className="w-3/4 flex flex-col items-end mr-2 text-[#343E61] md:hidden">
                <Menu>
                    <Menu.Button>
                        <Icon icon="solar:hamburger-menu-line-duotone" width={45} height={45} color="#343E61" />
                    </Menu.Button>
                    <Menu.Items className="w-1/2 flex flex-col space-y-2 bg-[#FFFFFFCC] p-4 z-10">
                        <Menu.Item>
                        {({ active }) => (
                            <Link href='/' className={`${active && 'hover:font-semibold'} `} >Accueil</Link>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <Link href='/services' className={`${active && 'hover:font-semibold'}`} >Services</Link>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <Link href='/solutions' className={`${active && 'hover:font-semibold'}`} >Solutions</Link>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <Link href='/ressources' className={`${active && 'hover:font-semibold'}`} >Ressources</Link>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <Link href='#contact' className={`${active && 'hover:font-semibold'}`} >Contact</Link>
                        )}
                        </Menu.Item>                                                                                                
                    </Menu.Items>
                </Menu>
            </nav>
        </header>           
    )
}