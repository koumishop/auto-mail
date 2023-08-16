'use client'

import Image from 'next/image'
import { Icon } from "@iconify/react"
import Link from 'next/link'
import Card from '@/components/card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      <section className="w-screen md:h-[560px] md:flex md:mt-[40px] md:mb-[60px] md:pt-24">
        <div className="pl-5 md:pl-[120px]">
          <h1 className="md:w-[619px] md:text-[40px] text-[22px] text-[#343E61]"><span className="opacity-75">Révolutionnez les opérations de</span> traitement de courrier <span className="opacity-75 font-semibold">grâce à l'automatisation pilotée par l'</span>Intelligence Artificielle</h1>
          <p className="px-2 md:w-[575px] my-4 md:mt-4 md:px-0 md:text-[18px] text-[#343E61]">
            Le système automatise la numérisation des lettres physiques entrantes, extrait et analyse les informations pertinentes, génère et distribue des réponses, et assure la conformité et la sécurité tout au long du processus.            
          </p>
        </div>
        <div className="w-[599px] h-[342px] md:w-[699px] md:h-[442px] relative">
          <Image src="/dashboard_alt.png" alt="auto mail dashboard screen" fill className="absolute" />
        </div>
      </section>
      <section className="w-screen bg-[#ffa498]">
        <h2 className="flex justify-center text-xl text-center md:text-[34px] my-10 md:my-20">Outils de gestion des courriers en temps réel</h2>
        <div className="w-screen md:flex">
          <div className="md:w-1/2">
            <div className="w-[662px] h-[340px] md:w-[762px] md:h-[440px]  relative">
              <Image src="/mailbox.png" alt="auto mail dashboard screen" fill className="absolute" />
            </div>
            <div className="w-[762px] h-12 pl-[120px] gradientBg">
            </div>
            <div className="w-full md:w-[762px] px-5 md:pl-[120px] space-y-2">
              <p className="w-full md:w-[611px]">
                Les organisations recevant quotidiennement un volume important de lettres physiques, la gestion et la réponse à ces communications de manière efficiente peuvent constituer un défi.
              </p>
              <p className="w-full md:w-[592px]">
              Le traitement manuel est non seulement chronophage, mais aussi source d'erreurs. AutoMail est conçu pour relever ces défis en automatisant le processus et en exploitant l'IA pour garantir la précision, l'efficience et la sécurité.
              </p>
            </div>
            <div className="flex justify-center">
              <Link href='/services' className=" flex justify-center items-center w-[191px] h-[49px] border-[3px] border-[#FFF] text-[#FFF] bg-primary bg-opacity-40 hover:bg-opacity-0 mt-[30px] font-semibold rounded-2xl hover:bg-[#FFF]">En savoir plus</Link>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-wrap justify-end py-[75px] md:py-0 md:px-[75px] md:pb-20">
            <Card>
              <Icon icon="solar:object-scan-bold-duotone" width={85} height={85} color="#FF6854" className="mt-10 mb-4"/>
              <h3 className="text-[#343E61] w-[160px] px-5 md:px-0 mb-8 text-lg font-bold">
                Numérisation automatisée des lettres
              </h3>
            </Card>
            <Card>
              <Icon icon="solar:move-to-folder-bold-duotone" width={85} height={85} color="#FF6854" className="mt-10 mb-4"/>
              <h3 className="text-[#343E61] w-[160px] px-5 md:px-0 mb-8 text-lg font-bold">
                Analyse et catégorisation assistées par l'IA
              </h3>
            </Card>
            <Card>
              <Icon icon="solar:dialog-2-bold-duotone" width={85} height={85} color="#FF6854" className="mt-10 mb-4"/>
              <h3 className="text-[#343E61] w-[160px] px-5 md:px-0 mb-8 text-lg font-bold">
                Génération automatisée de réponses
              </h3>
            </Card>
            <Card>
              <Icon icon="solar:pen-2-bold-duotone" width={85} height={85} color="#FF6854" className="mt-10 mb-4"/>
              <h3 className="text-[#343E61] w-[160px] px-5 md:px-0 mb-8 text-lg font-bold">
                Ajout et envoi de signatures électroniques
              </h3>
            </Card>
            <Card>
              <Icon icon="solar:chart-2-bold-duotone" width={85} height={85} color="#FF6854" className="mt-10 mb-4"/>
              <h3 className="text-[#343E61] w-[160px] px-5 md:px-0 mb-8 text-lg font-bold">
                Analyse des données et rapports
              </h3>
            </Card>
            <Card>
              <Icon icon="solar:lock-password-unlocked-bold-duotone" width={85} height={85} color="#FF6854" className="mt-10 mb-4"/>
              <h3 className="text-[#343E61] w-[160px] px-5 md:px-0 mb-8 text-lg font-bold">
                Conformité et sécurité
              </h3>
            </Card>                                                            
          </div>
        </div>
      </section>
      <section className="w-screen py-10 md:py-20 md:flex bg-[url(/bg_alt.png)] bg-no-repeat">
        <div className="md:w-[719px] mx-5 md:ml-20">
          <Icon icon="fa:quote-left" width={45} height={45} color="#FF6854" className=""/>
          <h2 className="w-full md:w-[719px] text-[#343E61] text-[22px] md:text-[34px] mb-4">AutoMail <span className="opacity-75 font-semibold">est une solution qui change la donne pour les opérations de </span>traitement du courrier<span className="opacity-75 font-semibold">, combinant </span>l'automatisation<span className="opacity-75 font-semibold">, </span>l'IA<span className="opacity-75 font-semibold"> et des </span>fonctions de sécurité<span className="opacity-75 font-semibold"> pour assurer un </span>traitement efficient<span className="opacity-75 font-semibold"> et </span>sécurisé<span className="opacity-75 font-semibold"> des lettres physiques.</span></h2>
          <p className="w-full md:w-[575px] text-[#343E61]">Grâce à sa suite complète d'outils, AutoMail ne se contente pas de rationaliser le processus, mais donne également aux organisations les moyens de gérer les communications avec agilité et précision.</p>
          <div className="w-full flex justify-center">
            <Link href='/solutions' className=" flex justify-center items-center w-[191px] h-[49px] border-[3px] border-[#FF6854] text-[#FF6854] bg-primary bg-opacity-40 hover:bg-opacity-0 mt-[30px] font-semibold rounded-2xl hover:bg-[#FF6854]">En savoir plus</Link>
          </div>
        </div>
        <div className="w-1/3 relative">
          <Image src="/charts.svg" alt="auto mail dashboard screen" fill className="absolute" />
        </div>
      </section>
    </main>
  )
}
