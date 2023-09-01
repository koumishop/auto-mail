'use client'
import Image from 'next/image'

export default function Ressources() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-10 md:px-24">
        <h1 className="py-3 md:text-[40px] text-[22px] text-[#343E61]">AutoMail - Ressources</h1>
        <p className="md:mt-2 md:px-0 text-[18px] text-[#343E61]">Aucune ressource n'est disponible pour l'instant.</p>
        <Image src="/instructions.svg" alt="ressources not found" width={500} height={500}/>
      </main>
    )
  }
  