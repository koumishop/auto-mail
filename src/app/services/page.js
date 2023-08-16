'use client'

import Image from 'next/image'
import { Disclosure } from '@headlessui/react'
import { Icon } from "@iconify/react"

export default function Services() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
        <section className="w-screen flex flex-col items-center justify-center pt12 md:pt-24">
          <h1 className="w-full md:w-[936px]  text-[22px] md:text-[40px] text-[#343E61] text-center mb-8"><span className="opacity-75">Gerez le</span> traitement de vos courriers<span className="opacity-75"> de la manière la</span> plus optimale</h1>
          <div className="w-[536px] h-[243px] md:w-[936px] md:h-[543px] relative  shadow-lg">
            <Image src="/mail.png" alt="auto mail dashboard screen" className="absolute" />
          </div>        
        </section>
        <section className="w-screen flex flex-col items-center justify-center mt-[-150px] pt-[150px] pb-10 bg-[#F5F5F5]">
          <p className="md:w-[926px] my-7 mx-5 md:mx-0 md:my-14 text-[18px] text-[#343E61]">
            AutoMail est une solution innovante conçue pour révolutionner les opérations traditionnelles de traitement de courrier grâce à l'utilisation de technologies de pointe telles que l'intelligence artificielle (IA), la reconnaissance optique de caractères (OCR) et le traitement du langage naturel (NLP)
          </p>
          <div className="w-screen md:flex md:flex-wrap px-6 md:px-12">
            <Disclosure>
              {
                ({ open }) => (
                  <div className={`${ open?'w-[100%]  md:w-[48%]':"w-[48%] md:w-[18%]" } flex mr-4 mb-4`}>
                    <Disclosure.Button className={`flex w-[230px] justify-between items-center shadow-xl ${open ? 'rounded-s-lg' : 'rounded-lg'} bg-[#FF6854] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#FF6854D9] focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75`}>
                      <div className="w-full flex flex-col items-center">
                        <Icon icon="solar:object-scan-bold-duotone" width={85} height={85} color="#FFFFFF" className="mt-10 mb-4"/>
                        <h3 className="text-[#FFFFFF] w-[160px] mb-8 text-lg font-bold">
                          Numérisation automatisée des lettres
                        </h3>
                      </div>
                      <Icon icon="solar:alt-arrow-right-bold" width={24} height={24} color="#FFFFFF" className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-white`}/>
                    </Disclosure.Button>
                    <Disclosure.Panel className="border border-black bg-white rounded-e-lg px-4 pt-4 pb-2 text-gray-500 ">
                      <p className="text-sm">
                        AutoMail utilise des scanners à grande vitesse pour numériser rapidement les lettres physiques entrantes. La technologie OCR convertit ces images numérisées en texte lisible par machine tout en préservant le formatage et la mise en page d'origine.
                      </p>
                      <p className="text-sm">
                        Des outils avancés d'extraction de données isolent les détails spécifiques tels que les noms, les adresses et les numéros de référence. Des métadonnées pour chaque document sont créées pour une recherche plus rapide et une gestion efficiente.
                      </p>                    
                    </Disclosure.Panel>
                  </div>
                )
              }
            </Disclosure>
            <Disclosure>
              {
                ({ open }) => (
                  <div className={`${ open ?'w-[100%]  md:w-[48%]':"w-[48%] md:w-[18%]" } flex mr-4 mb-4`}>
                    <Disclosure.Button className={`flex w-[230px] justify-between items-center shadow-xl ${open ? 'rounded-s-lg' : 'rounded-lg'} bg-[#3AC4E5] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#3AC4E5D9] focus:outline-none focus-visible:ring focus-visible:ring-[#3AC4E5] focus-visible:ring-opacity-75`}>
                      <div className="w-full flex flex-col items-center">
                        <Icon icon="solar:move-to-folder-bold-duotone" width={85} height={85} color="#FFFFFF" className="mt-10 mb-4"/>
                        <h3 className="text-[#FFFFFF] w-[160px] mb-8 text-lg font-bold">
                          Analyse et catégorisation assistées par l'IA
                        </h3>
                      </div>
                      <Icon icon="solar:alt-arrow-right-bold" width={24} height={24} color="#FFFFFF" className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-white`}/>
                    </Disclosure.Button>
                    <Disclosure.Panel className="border border-black bg-white rounded-e-lg px-4 pt-4 pb-2 text-gray-500">
                      <p className="text-sm">
                        Les algorithmes NLP sont utilisés pour lire et comprendre le langage humain dans le contenu des lettres. Le système peut extraire les entités, les relations et le contexte.
                      </p>
                      <p className="text-sm">
                        AutoMail analyse le contenu pour déterminer l'objet de la lettre et classe chaque lettre en fonction de son contenu dans des groupes prédéfinis pour un traitement rationalisé. Les communications urgentes sont identifiées par des mots-clés ou le contexte et sont flaggées pour assurer un traitement prioritaire.
                      </p>                    
                    </Disclosure.Panel>
                  </div>
                )
              }
            </Disclosure>
            <Disclosure>
              {
                ({ open }) => (
                  <div className={`${ open ?'w-[100%]  md:w-[48%]':"w-[48%] md:w-[18%]"} flex mr-4 mb-4`}>
                    <Disclosure.Button className={`flex w-[230px] justify-between items-center shadow-xl ${open ? 'rounded-s-lg' : 'rounded-lg'} bg-[#E4A951] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#E4A951D9] focus:outline-none focus-visible:ring focus-visible:ring-[#E4A951] focus-visible:ring-opacity-75`}>
                      <div className="w-full flex flex-col items-center">
                        <Icon icon="solar:dialog-2-bold-duotone" width={85} height={85} color="#FFFFFF" className="mt-10 mb-4"/>
                        <h3 className="text-[#FFFFFF] w-[160px] mb-8 text-lg font-bold">
                          Génération automatisée de réponses
                        </h3>
                      </div>
                      <Icon icon="solar:alt-arrow-right-bold" width={24} height={24} color="#FFFFFF" className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-white`}/>
                    </Disclosure.Button>
                    <Disclosure.Panel className="border border-black bg-white rounded-e-lg px-4 pt-4 pb-2 text-gray-500">
                      <p className="text-sm">
                        Le système d'IA suggère des réponses appropriées ou génère des ébauches de réponses à l'aide des informations catégorisées et du contexte. Il peut employer des modèles standardisés ou des réponses provenant d'une base de connaissances.
                      </p>
                      <p className="text-sm">
                        Une interface conviviale permet aux agents humains d'examiner, d'approuver, de modifier ou de rejeter les réponses suggérées par l'IA.
                      </p>                    
                    </Disclosure.Panel>
                  </div>
                )
              }
            </Disclosure>
            <Disclosure>
              {
                ({ open }) => (
                  <div className={`${ open ?'w-[100%]  md:w-[48%]':"w-[48%] md:w-[18%]"} flex mr-4 mb-4`}>
                    <Disclosure.Button className={`flex w-[230px] justify-between items-center shadow-xl ${open ? 'rounded-s-lg' : 'rounded-lg'} bg-[#343E61] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#343E61D9] focus:outline-none focus-visible:ring focus-visible:ring-[#343E61] focus-visible:ring-opacity-75`}>
                      <div className="w-full flex flex-col items-center">
                        <Icon icon="solar:pen-2-bold-duotone" width={85} height={85} color="#FFFFFF" className="mt-10 mb-4"/>
                        <h3 className="text-[#FFFFFF] w-[160px] mb-8 text-lg font-bold">
                          Ajout et envoi de signatures électroniques
                        </h3>
                      </div>
                      <Icon icon="solar:alt-arrow-right-bold" width={24} height={24} color="#FFFFFF" className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-white`}/>
                    </Disclosure.Button>
                    <Disclosure.Panel className="border border-black bg-white rounded-e-lg px-4 pt-4 pb-2 text-gray-500">
                      <p className="text-sm">
                      Intégration avec des services de signature électronique tels que DocuSign ou Adobe Sign, ajoutez en toute sécurité votre signature numérique à la réponse.
                      </p>
                      <p className="text-sm">
                      Les réponses sont envoyées par courrier électronique si elles sont disponibles ou imprimées pour un envoi physique.
                      </p>                    
                    </Disclosure.Panel>
                  </div>
                )
              }
            </Disclosure>
            <Disclosure>
              {
                ({ open }) => (
                  <div className={`${ open ?'w-[100%]  md:w-[48%]':"w-[48%] md:w-[18%]" } flex mr-4 mb-4`}>
                    <Disclosure.Button className={`flex w-[230px] justify-between items-center shadow-xl ${open ? 'rounded-s-lg' : 'rounded-lg'} bg-[#3AC4E5] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#3AC4E5D9] focus:outline-none focus-visible:ring focus-visible:ring-[#3AC4E5] focus-visible:ring-opacity-75`}>
                      <div className="w-full flex flex-col items-center">
                        <Icon icon="solar:chart-2-bold-duotone" width={85} height={85} color="#FFFFFF" className="mt-10 mb-4"/>
                        <h3 className="text-[#FFFFFF] w-[160px] mb-8 text-lg font-bold">
                          Analyse des données et rapports
                        </h3>
                      </div>
                      <Icon icon="solar:alt-arrow-right-bold" width={24} height={24} color="#FFFFFF" className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-white`}/>
                    </Disclosure.Button>
                    <Disclosure.Panel className="border border-black bg-white rounded-e-lg px-4 pt-4 pb-2 text-gray-500">
                      <p className="text-sm">
                        Offre des aperçus visuels des processus de traitement du courrier, notamment les types de lettres reçues, les délais de réponse et les tendances.
                      </p>
                      <p className="text-sm">
                      Le système d'IA s'adapte et améliore ses performances en fonction des retours d'information et des interactions au fil du temps.
                      </p>                    
                    </Disclosure.Panel>
                  </div>
                )
              }
            </Disclosure>
            <Disclosure>
              {
                ({ open }) => (
                  <div className={`${ open ?'w-[100%]  md:w-[48%]':"w-[48%] md:w-[18%]"} flex mr-4 mb-4`}>
                    <Disclosure.Button className={`flex w-[230px] justify-between items-center shadow-xl ${open ? 'rounded-s-lg' : 'rounded-lg'} bg-[#FF6854] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#FF6854D9] focus:outline-none focus-visible:ring focus-visible:ring-[#FF6854] focus-visible:ring-opacity-75`}>
                      <div className="w-full flex flex-col items-center">
                        <Icon icon="solar:lock-password-unlocked-bold-duotone" width={85} height={85} color="#FFFFFF" className="mt-10 mb-4"/>
                        <h3 className="text-[#FFFFFF] w-[160px] mb-8 text-lg font-bold">
                          Conformité et sécurité
                        </h3>
                      </div>
                      <Icon icon="solar:alt-arrow-right-bold" width={24} height={24} color="#FFFFFF" className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-white`}/>
                    </Disclosure.Button>
                    <Disclosure.Panel className="border border-black bg-white rounded-e-lg px-4 pt-4 pb-2 text-gray-500">
                      <p className="text-sm">
                        Garantit le respect des lois sur la protection des données et met en œuvre le cryptage, le stockage sécurisé, les contrôles d'accès, les évaluations de sécurité régulières et la formation.
                      </p>
                      <p className="text-sm">
                        Maintien des pistes d'audit et effectue des sauvegardes régulières et une reprise après sinistre; surveille la conformité et génère des rapports pour l'examen interne et les exigences réglementaires. Gère les fournisseurs tiers en matière de conformité et de normes de sécurité.
                      </p>                    
                    </Disclosure.Panel>
                  </div>
                )
              }
            </Disclosure>                                    
          </div>
        </section>
      </main>
    )
  }
  