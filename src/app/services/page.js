'use client'

import Image from 'next/image'
import { Disclosure } from '@headlessui/react'
import { Icon } from "@iconify/react"

export default function Services() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
        <section className="w-screen flex flex-col items-center justify-center pt12 md:pt-24">
          <h1 className="w-full md:w-[936px] mt-8 md:mt-0 text-[22px] md:text-[40px] text-[#343E61] text-center mb-8"><span className="opacity-75">Gerez le</span> traitement de vos courriers<span className="opacity-75"> de la manière la</span> plus optimale</h1>
          <div className="w-[536px] h-[243px] md:w-[936px] md:h-[543px] relative  shadow-lg">
            <Image src="/mail.png" alt="auto mail dashboard screen" fill className="absolute" />
          </div>        
        </section>
        <section className="w-screen flex flex-col items-center justify-center mt-[-150px] pt-[150px] pb-10 bg-[#F5F5F5]">
          <p className="md:w-[926px] my-7 mx-5 md:mx-0 md:my-14 text-[18px] text-[#343E61]">
            AutoMail est une solution innovante conçue pour révolutionner les opérations traditionnelles de traitement de courrier grâce à l'utilisation de technologies de pointe telles que l'intelligence artificielle (IA), la reconnaissance optique de caractères (OCR) et le traitement du langage naturel (NLP)
          </p>
          <div className="w-screen md:flex md:flex-wrap px-6 md:px-12">
            <div className="md:w-[32%] border-y flex items-center py-8 m-2">
              <Icon icon="solar:object-scan-bold-duotone" width={45} height={45} color="#ffa497d9" className="w-1/2"/>
              <div>
                <h3 className="w-full text-[#343E61] text-lg font-bold">
                  Numérisation automatisée des lettres
                </h3> 
                <p className="text-sm text-[#343E61]">
                  AutoMail vous permet de gagner du temps et d'améliorer la précision de vos lettres.
                </p>                               
              </div>
            </div>
            <div className="md:w-[32%] border-y flex items-center py-8 m-2">
              <Icon icon="solar:move-to-folder-bold-duotone" width={45} height={45} color="#ffa497d9" className="w-1/2"/>
              <div>
                <h3 className="w-full text-[#343E61] text-lg font-bold">
                  Analyse et catégorisation assistées par l'IA
                </h3> 
                <p className="text-sm text-[#343E61]">
                  AutoMail analyse et classifie vos lettres en ordre de priorité grâce àla technologie de l'IA.
                </p>                               
              </div>
            </div>
            <div className="md:w-[32%] border-y flex items-center py-8 m-2">
              <Icon icon="solar:dialog-2-bold-duotone" width={45} height={45} color="#ffa497d9" className="w-1/2"/>
              <div>
                <h3 className="w-full text-[#343E61] text-lg font-bold">
                  Génération automatisée de réponses
                </h3> 
                <p className="text-sm text-[#343E61]">
                  Automail peut générer des réponses automatiques aux lettres. Le personnel peut ainsi se concentrer à des tâches plus complexes.
                </p>                               
              </div>
            </div>
            <div className="md:w-[32%] border-y flex items-center py-8 m-2">
              <Icon icon="solar:pen-2-bold-duotone" width={45} height={45} color="#ffa497d9" className="w-1/2"/>
              <div>
                <h3 className="w-full text-[#343E61] text-lg font-bold">
                  Ajout et envoi de signatures électroniques
                </h3> 
                <p className="text-sm text-[#343E61]">
                  Automail vous permet d'ajouter en toute sécurité votre signature numérique à vos projets de réponses.
                </p>                               
              </div>
            </div>
            <div className="md:w-[32%] border-y flex items-center py-8 m-2">
              <Icon icon="solar:lock-password-unlocked-bold-duotone" width={45} height={45} color="#ffa497d9" className="w-1/2"/>
              <div>
                <h3 className="w-full text-[#343E61] text-lg font-bold">
                  Conformité et sécurité
                </h3> 
                <p className="text-sm text-[#343E61]">
                  Automail est conçu pour respecter toutes les lois applicables en matière de protection de données. Il comprend également des fonctions de protection des informations sensibles, tels que le cryptage et les contrôles d'accès.
                </p>                               
              </div>
            </div>
            <div className="md:w-[32%] border-y flex items-center py-8 m-2">
              <Icon icon="solar:chart-2-bold-duotone" width={45} height={45} color="#ffa497d9" className="w-1/2"/>
              <div>
                <h3 className="w-full text-[#343E61] text-lg font-bold">
                  Analyse des données et rapports
                </h3> 
                <p className="text-sm text-[#343E61]">
                  Automail offre des aperçus visuels des processus de traitement du courrier, notamment les types de lettres reçues, les délais de réponse et les tendances.
                </p>                               
              </div>
            </div>
            
            {/* 
            <Disclosure>
              {
                ({ open }) => (
                  <div className={`${ open?'w-[100%]  md:w-[48%]':"w-[48%] md:w-[18%]" } flex mr-4 mb-4 hover:scale-110`}>
                    <Disclosure.Button className={`flex w-[230px] justify-between items-center shadow-xl ${open ? 'rounded-s-lg bg-[#60CAE7D9]' : 'rounded-lg'} bg-[#d1e6ee] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#60CAE7D9] focus:outline-none focus-visible:ring focus-visible:ring-[#d1e6ee] focus-visible:ring-opacity-75`}>
                      <div className="w-full flex flex-col items-center">
                        <Icon icon="solar:object-scan-bold-duotone" width={85} height={85} color="#FFFFFF" className="mt-10 mb-4"/>
                        <h3 className="text-[#FFFFFF] w-[160px] mb-8 text-lg font-bold">
                          Numérisation automatisée des lettres
                        </h3>
                      </div>
                      <Icon icon="solar:alt-arrow-right-bold" width={24} height={24} color="#FFFFFF" className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-white`}/>
                    </Disclosure.Button>
                    <Disclosure.Panel className="border border-[#60CAE7D9] bg-white rounded-e-lg px-4 pt-4 pb-2 text-gray-500 ">
                      <p className="text-sm">
                        AutoMail vous permet de gagner du temps et d'améliorer la précision de vos lettres.
                      </p>
                    </Disclosure.Panel>
                  </div>
                )
              }
            </Disclosure>
            <Disclosure>
              {
                ({ open }) => (
                  <div className={`${ open ?'w-[100%]  md:w-[48%]':"w-[48%] md:w-[18%]" } flex mr-4 mb-4 hover:scale-110`}>
                    <Disclosure.Button className={`flex w-[230px] justify-between items-center shadow-xl ${open ? 'rounded-s-lg bg-[#ffa497D9]' : 'rounded-lg'} bg-[#f1d9d7] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#ffa497D9] focus:outline-none focus-visible:ring focus-visible:ring-[#f1d9d7] focus-visible:ring-opacity-75`}>
                      <div className="w-full flex flex-col items-center">
                        <Icon icon="solar:move-to-folder-bold-duotone" width={85} height={85} color="#FFFFFF" className="mt-10 mb-4"/>
                        <h3 className="text-[#FFFFFF] w-[160px] mb-8 text-lg font-bold">
                          Analyse et catégorisation assistées par l'IA
                        </h3>
                      </div>
                      <Icon icon="solar:alt-arrow-right-bold" width={24} height={24} color="#FFFFFF" className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-white`}/>
                    </Disclosure.Button>
                    <Disclosure.Panel className="border border-[#ffa497D9] bg-white rounded-e-lg px-4 pt-4 pb-2 text-gray-500">
                      <p className="text-sm">
                        AutoMail analyse et classifie vos lettres en ordre de priorité grâce àla technologie de l'IA.
                      </p>                    
                    </Disclosure.Panel>
                  </div>
                )
              }
            </Disclosure>
            <Disclosure>
              {
                ({ open }) => (
                  <div className={`${ open ?'w-[100%]  md:w-[48%]':"w-[48%] md:w-[18%]"} flex mr-4 mb-4 hover:scale-110`}>
                    <Disclosure.Button className={`flex w-[230px] justify-between items-center shadow-xl ${open ? 'rounded-s-lg bg-[#60CAE7D9]' : 'rounded-lg'} bg-[#d1e6ee] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#60CAE7D9] focus:outline-none focus-visible:ring focus-visible:ring-[#d1e6ee] focus-visible:ring-opacity-75`}>
                      <div className="w-full flex flex-col items-center">
                        <Icon icon="solar:dialog-2-bold-duotone" width={85} height={85} color="#FFFFFF" className="mt-10 mb-4"/>
                        <h3 className="text-[#FFFFFF] w-[160px] mb-8 text-lg font-bold">
                          Génération automatisée de réponses
                        </h3>
                      </div>
                      <Icon icon="solar:alt-arrow-right-bold" width={24} height={24} color="#FFFFFF" className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-white`}/>
                    </Disclosure.Button>
                    <Disclosure.Panel className="border border-[#60CAE7D9] bg-white rounded-e-lg px-4 pt-4 pb-2 text-gray-500">
                      <p className="text-sm">
                        Automail peut générer des réponses automatiques aux lettres. Le personnel peut ainsi se concentrer à des tâches plus complexes.
                      </p>                    
                    </Disclosure.Panel>
                  </div>
                )
              }
            </Disclosure>
            <Disclosure>
              {
                ({ open }) => (
                  <div className={`${ open ?'w-[100%]  md:w-[48%]':"w-[48%] md:w-[18%]"} flex mr-4 mb-4 hover:scale-110`}>
                    <Disclosure.Button className={`flex w-[230px] justify-between items-center shadow-xl ${open ? 'rounded-s-lg bg-[#ffa497D9]' : 'rounded-lg'} bg-[#f1d9d7] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#ffa497D9] focus:outline-none focus-visible:ring focus-visible:ring-[#f1d9d7] focus-visible:ring-opacity-75`}>
                      <div className="w-full flex flex-col items-center">
                        <Icon icon="solar:pen-2-bold-duotone" width={85} height={85} color="#FFFFFF" className="mt-10 mb-4"/>
                        <h3 className="text-[#FFFFFF] w-[160px] mb-8 text-lg font-bold">
                          Ajout et envoi de signatures électroniques
                        </h3>
                      </div>
                      <Icon icon="solar:alt-arrow-right-bold" width={24} height={24} color="#FFFFFF" className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-white`}/>
                    </Disclosure.Button>
                    <Disclosure.Panel className="border border-[#ffa497D9] bg-white rounded-e-lg px-4 pt-4 pb-2 text-gray-500">
                      <p className="text-sm">
                      Automail vous permet d'ajouter en toute sécurité votre signature numérique à vos projets de réponses.
                      </p>                    
                    </Disclosure.Panel>
                  </div>
                )
              }
            </Disclosure>
            <Disclosure>
              {
                ({ open }) => (
                  <div className={`${ open ?'w-[100%]  md:w-[48%]':"w-[48%] md:w-[18%]"} flex mr-4 mb-4 hover:scale-110`}>
                    <Disclosure.Button className={`flex w-[230px] justify-between items-center shadow-xl ${open ? 'rounded-s-lg bg-[#60CAE7D9]' : 'rounded-lg'} bg-[#d1e6ee] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#60CAE7D9] focus:outline-none focus-visible:ring focus-visible:ring-[#d1e6ee] focus-visible:ring-opacity-75`}>
                      <div className="w-full flex flex-col items-center">
                        <Icon icon="solar:lock-password-unlocked-bold-duotone" width={85} height={85} color="#FFFFFF" className="mt-10 mb-4"/>
                        <h3 className="text-[#FFFFFF] w-[160px] mb-8 text-lg font-bold">
                          Conformité et sécurité
                        </h3>
                      </div>
                      <Icon icon="solar:alt-arrow-right-bold" width={24} height={24} color="#FFFFFF" className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-white`}/>
                    </Disclosure.Button>
                    <Disclosure.Panel className="border border-[#60CAE7D9] bg-white rounded-e-lg px-4 pt-4 pb-2 text-gray-500">
                      <p className="text-sm">
                        Automail est conçu pour respecter toutes les lois applicables en matière de protection de données. Il comprend également des fonctions de protection des informations sensibles, tels que le cryptage et les contrôles d'accès.
                      </p>
                    </Disclosure.Panel>
                  </div>
                )
              }
            </Disclosure>
            <Disclosure>
              {
                ({ open }) => (
                  <div className={`${ open ?'w-[100%]  md:w-[48%]':"w-[48%] md:w-[18%]" } flex mr-4 mb-4 hover:scale-110`}>
                    <Disclosure.Button className={`flex w-[230px] justify-between items-center shadow-xl ${open ? 'rounded-s-lg bg-[#ffa497D9]' : 'rounded-lg'} bg-[#f1d9d7] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#ffa497D9] focus:outline-none focus-visible:ring focus-visible:ring-[#f1d9d7] focus-visible:ring-opacity-75`}>
                      <div className="w-full flex flex-col items-center">
                        <Icon icon="solar:chart-2-bold-duotone" width={85} height={85} color="#FFFFFF" className="mt-10 mb-4"/>
                        <h3 className="text-[#FFFFFF] w-[160px] mb-8 text-lg font-bold">
                          Analyse des données et rapports
                        </h3>
                      </div>
                      <Icon icon="solar:alt-arrow-right-bold" width={24} height={24} color="#FFFFFF" className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-white`}/>
                    </Disclosure.Button>
                    <Disclosure.Panel className="border border-[#ffa497D9] bg-white rounded-e-lg px-4 pt-4 pb-2 text-gray-500">
                      <p className="text-sm">
                        Automail offre des aperçus visuels des processus de traitement du courrier, notamment les types de lettres reçues, les délais de réponse et les tendances.
                      </p>                    
                    </Disclosure.Panel>
                  </div>
                )
              }
            </Disclosure>                                     
            */}
          </div>
        </section>
      </main>
    )
  }
  