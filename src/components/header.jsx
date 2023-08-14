'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return(
        <header className="w-screen h-20 border bg-transparent flex">
            <Link href="/" className="w-1/4 relative pl-[68px]">
                <Image src="/auto_mail_logo.png" alt="logo" width={148} height={98} className="border-red-500 absolute"/>
            </Link>
            <nav className="flex relative items-center space-x-8 text-[#343E61] font-normal text-sm ml-[400px]">
                <Link href='/' className="hover:font-semibold">Accueil</Link>
                <Link href='/services' className="hover:font-semibold">Services</Link>
                <Link href='/solutions' className="hover:font-semibold">Solutions</Link>
                <Link href='/ressources' className="hover:font-semibold">Ressources</Link>
                <Link href='#contact' className="hover:font-semibold">Contact</Link>
            </nav>
        </header>           
    )
}