'use client'

import Image from 'next/image'
import { Icon } from "@iconify/react"
import Link from 'next/link'
import Card from '@/components/card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center border border-red-600">
      <section className="w-screen h-[560px] flex border border-black mt-[40px] mb-[60px] pt-24">
        <div className=" pl-[120px]">
          <h1 className="w-[619px] text-[40px] text-[#343E61]"><span className="opacity-75">Révolutionnez les opérations de</span> traitement de courrier <span className="opacity-75 font-semibold">grâce à l'automatisation pilotée par l'</span>Intelligence Artificielle</h1>
          <p className="w-[575px] mt-4 text-[18px] text-[#343E61]">
            Le système automatise la numérisation des lettres physiques entrantes, extrait et analyse les informations pertinentes, génère et distribue des réponses, et assure la conformité et la sécurité tout au long du processus.            
          </p>
        </div>

        <div className="w-[699px] h-[442px] border border-yellow-300 relative">
          <Image src="/dashboard_alt.png" alt="auto mail dashboard screen" fill loading="lazy" className="absolute" />
        </div>
      </section>
      <section className="w-screen border border-[#343E61] bg-[#ffa498]">
        <h2 className="flex justify-center text-[34px] my-20">Outils de gestion des courriers en temps réel</h2>
        <div className="w-screen flex border border-yellow-300">
          <div className="w-1/2">
            <div className="w-[762px] h-[440px]  relative">
              <Image src="/mailbox.png" alt="auto mail dashboard screen" fill loading="lazy" className="absolute" />
            </div>
            <div className="border border-blue-600 w-[762px] h-12 pl-[120px] gradientBg">
            </div>
            <div className="border border-blue-600 w-[762px] pl-[120px] space-y-2">
              <p className="w-[611px]">
                Les organisations recevant quotidiennement un volume important de lettres physiques, la gestion et la réponse à ces communications de manière efficiente peuvent constituer un défi.
              </p>
              <p className="w-[592px]">
              Le traitement manuel est non seulement chronophage, mais aussi source d'erreurs. AutoMail est conçu pour relever ces défis en automatisant le processus et en exploitant l'IA pour garantir la précision, l'efficience et la sécurité.
              </p>
            </div>
            <div className="flex justify-center">
              <Link href='/services' className=" flex justify-center items-center w-[191px] h-[49px] border-[3px] border-[#FFF] text-[#FFF] bg-primary bg-opacity-40 hover:bg-opacity-0 mt-[30px] font-semibold rounded-2xl hover:bg-[#FFF]">En savoir plus</Link>
            </div>
          </div>
          <div className="w-1/2 flex flex-wrap justify-end border border-blue-600 px-[75px] pb-20">
            <Card>
              <Icon icon="solar:object-scan-bold-duotone" width={85} height={85} color="#FF6854" className="mt-10 mb-4"/>
              <h3 className="text-[#343E61] w-[160px] mb-8 text-lg font-bold">
                Numérisation automatisée des lettres
              </h3>
            </Card>
            <Card>
              <Icon icon="solar:move-to-folder-bold-duotone" width={85} height={85} color="#FF6854" className="mt-10 mb-4"/>
              <h3 className="text-[#343E61] w-[160px] mb-8 text-lg font-bold">
                Analyse et catégorisation assistées par l'IA
              </h3>
            </Card>
            <Card>
              <Icon icon="solar:dialog-2-bold-duotone" width={85} height={85} color="#FF6854" className="mt-10 mb-4"/>
              <h3 className="text-[#343E61] w-[160px] mb-8 text-lg font-bold">
                Génération automatisée de réponses
              </h3>
            </Card>
            <Card>
              <Icon icon="solar:pen-2-bold-duotone" width={85} height={85} color="#FF6854" className="mt-10 mb-4"/>
              <h3 className="text-[#343E61] w-[160px] mb-8 text-lg font-bold">
                Ajout et envoi de signatures électroniques
              </h3>
            </Card>
            <Card>
              <Icon icon="solar:chart-2-bold-duotone" width={85} height={85} color="#FF6854" className="mt-10 mb-4"/>
              <h3 className="text-[#343E61] w-[160px] mb-8 text-lg font-bold">
                Analyse des données et rapports
              </h3>
            </Card>
            <Card>
              <Icon icon="solar:lock-password-unlocked-bold-duotone" width={85} height={85} color="#FF6854" className="mt-10 mb-4"/>
              <h3 className="text-[#343E61] w-[160px] mb-8 text-lg font-bold">
                Conformité et sécurité
              </h3>
            </Card>                                                            
          </div>
        </div>
      </section>
      <section className="w-screen py-20 flex border border-black bg-[url(/bg_alt.png)]">
        <div className="w-[719px] ml-20 border border-black">
          <h2 className="border border-blue-500 w-[719px] text-[#343E61] bold text-[34px] mb-4">AutoMail <span className="opacity-75 font-semibold">est une solution qui change la donne pour les opérations de </span>traitement du courrier<span className="opacity-75 font-semibold">, combinant </span>l'automatisation<span className="opacity-75 font-semibold">, </span>l'IA<span className="opacity-75 font-semibold"> et des </span>fonctions de sécurité<span className="opacity-75 font-semibold"> pour assurer un </span>traitement efficient<span className="opacity-75 font-semibold"> et </span>sécurisé<span className="opacity-75 font-semibold"> des lettres physiques.</span></h2>
          <p className="w-[575px] text-[#343E61] ">Grâce à sa suite complète d'outils, AutoMail ne se contente pas de rationaliser le processus, mais donne également aux organisations les moyens de gérer les communications avec agilité et précision.</p>
          <div className="w-full flex justify-center">
            <Link href='/solutions' className=" flex justify-center items-center w-[191px] h-[49px] border-[3px] border-[#FF6854] text-[#FF6854] bg-primary bg-opacity-40 hover:bg-opacity-0 mt-[30px] font-semibold rounded-2xl hover:bg-[#FF6854]">En savoir plus</Link>
          </div>
        </div>
        <div className="w-1/3 border border-blue-600 relative">
          <Image src="/charts.svg" alt="auto mail dashboard screen" fill loading="lazy" className="absolute" />
        </div>
      </section>
    </main>
  )
}
