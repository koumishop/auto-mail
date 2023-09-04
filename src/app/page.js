'use client'

import Lottie from 'lottie-react'
import Image from 'next/image'
import Link from 'next/link'
import Card from '@/components/card'
import document from '../../public/alt_document.json'
import folder from '../../public/alt_folder.json'
import arrow from '../../public/alt_arrow.json'
import chart from '../../public/alt_chart.json'
import signature from '../../public/alt_signature.json'
import security from '../../public/alt_security.json'
import alt_chart from '../../public/gradient_chart.json'
import target from '../../public/gradient_target.json'
import track from '../../public/gradient_location.json'
import alt_security from '../../public/gradient_security.json'
import code from '../../public/gradient_code.json'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      <section className="w-screen md:h-[560px] md:flex md:mt-[40px] md:mb-[60px] md:pt-24">
        <div className="pl-5 md:pl-[120px]">
          <h1 className="md:w-[619px] md:text-[40px] text-[22px] text-[#343E61]"><span className="opacity-75">Révolutionnez les opérations de</span> traitement de courrier <span className="opacity-75 font-semibold">grâce à l'</span>IA</h1>
          <div className="w-full flex justify-center">
            <Link href='#contact' className=" flex justify-center items-center w-[191px] h-[49px] border-[3px] border-[#343E61] text-[#343E61] bg-primary bg-opacity-40 mt-[30px] font-semibold rounded-2xl hover:bg-opacity-80 hover:bg-[#343E61] hover:text-white">Contactez-nous</Link>
          </div>        
        </div>
        <div className="w-[599px] h-[342px] md:w-[699px] md:h-[442px] relative">
          <Image src="/dashboard_alt.png" alt="auto mail dashboard screen" fill className="absolute" />
        </div>
      </section>
      <section className="w-screen bg-[#ffa498]">
        <h2 className="flex justify-center text-xl text-white text-center md:text-[34px] my-10 md:my-20">Outils de gestion des courriers en temps réel</h2>
        <div className="w-screen md:flex">
          <div className="md:w-1/2">
            <div className="w-[662px] h-[340px] md:w-[762px] md:h-[440px]  relative">
              <Image src="/mailbox.png" alt="auto mail dashboard screen" fill className="absolute" />
            </div>
            <div className="w-[762px] h-12 pl-[120px] gradientBg">
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-start">
            <div className="md:w-full flex flex-wrap justify-end py-[5px] md:py-0 md:px-[5px] md:pb-5">
              <Card title="Numérisation automatisée des lettres" animationData={document} />
              <Card title="Analyse et catégorisation assistées par l'IA" animationData={folder} />
              <Card title="Génération automatisée de réponses" animationData={arrow} />
              <Card title="Ajout et envoi de signatures électroniques" animationData={signature} />
              <Card title="Analyse des données et rapports" animationData={chart} />
              <Card title="Conformité et sécurité" animationData={security} />
            </div>  
            <div className="w-full flex justify-center pb-10">
              <Link href='/services' className=" flex justify-center items-center w-[324px] h-[49px] border-[3px] border-[#FFF] text-[#FFF] bg-primary bg-opacity-40 mb-[30px] font-semibold rounded-2xl hover:bg-opacity-80 hover:bg-[#FFF] hover:text-[#ffa498]">Voir toutes les fonctionnalités</Link>
            </div>         
          </div>
        </div>
      </section>
      <section className="w-screen py-10 md:py-20 md:flex md:flex-col items-start bg-black">
        <h2 className="px-20 pb-5 flex justify-center text-white text-xl text-center md:text-[34px]">Travailler plus intélligemment</h2>
        <div className="w-screen px-6 flex justify-center">
          <div className="w-1/4 flex flex-col items-start">
            <div className="flex flex-col items-center mt-5 mb-2">
              <div className="w-[128px] h-[128px]">
                <Lottie animationData={alt_chart} loop={true} />
              </div>
                <h3 className="text-white text-3xl font-normal">Efficacité</h3>
            </div>
            <p className="text-[#767676] text-lg">Automatisation des opérations de tâches manuelles dans la salle des courriers</p>
          </div>
          <div className="w-1/4 flex flex-col items-start">
            <div className="flex flex-col items-center mt-5 mb-2">
              <div className="w-[128px] h-[128px]">
                <Lottie animationData={target} loop={true} height={128} width={128} />
              </div>
              <h3 className="text-white text-3xl font-normal">Précision</h3>
            </div>
            <p className="text-[#767676] text-lg">Génération automatisée de vos reponses grâce à l’IA</p>
          </div>
          <div className="w-1/4 flex flex-col items-start">
            <div className="flex flex-col items-center mt-5 mb-2">
              <div className="w-[128px] h-[128px]">
                <Lottie animationData={track} loop={true} height={128} width={128} />
              </div>
                <h3 className="text-white text-3xl font-normal">Traçabilité</h3>
            </div>
            <p className="text-[#767676] text-lg">Chaques éléments de vos courriers sont comptabilisés</p>
          </div>
          <div className="w-1/4 flex flex-col items-start">
            <div className="flex flex-col items-center mt-5 mb-2">
              <div className="w-[128px] h-[128px]">
                <Lottie animationData={alt_security} loop={true} height={128} width={128} />
              </div>
                <h3 className="text-white text-3xl font-normal">Sécurité</h3>
            </div>
            <p className="text-[#767676] text-lg">Garantie de confidentialité et d’intégrité des données sensibles</p>
          </div>
        </div>
        <div className="w-screen px-6 mt-14 flex justify-center">
          <div className="border border-[#4F4F4F] w-[1305px] h-[597px] rounded-[40px] mb-10 flex items-center">
            <div className="w-[70%]">
              <h2 className="px-14 pb-5 flex justify-start text-white text-xl text-center font-medium md:text-[34px]">
                Un environnement de travail allégé
              </h2>
              <p className="text-[#767676] text-lg pl-14 pb-5 ">
                Grâce à l’intégration du code QR, Automail vous permet d’acceder aux données de tous vos courriers peu importe où vous vous trouvez.
              </p>
              <div className="w-full flex justify-start px-20">
                <Link href='/solutions' className=" flex justify-center items-center w-[191px] h-[49px] border-[3px] border-[#FFF] text-[#FFF] bg-primary bg-opacity-40 mt-[30px] font-semibold rounded-2xl hover:bg-opacity-80 hover:bg-[#FFF] hover:text-black">En savoir plus</Link>
              </div>
            </div>
            <div className="w-[30%]">
              <Lottie animationData={code} loop={true} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
