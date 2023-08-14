'use client'
import Image from 'next/image'
import { Icon } from "@iconify/react"

export default function Solutions() {
    return (
      <main className="flex flex-col items-center justify-between pt-24 px-24">
        <section className="w-screen flex justify-center space-x-4 pb-28">
          <h1 className="w-[741px] text-[40px] text-[#343E61]">
            <span className="opacity-75">En réduisant la</span> charge de travail manuelle<span className="opacity-75">, en optimisant les</span> temps de réponse <span className="opacity-75">et en protégeant les</span> informations critiques<span className="opacity-75">, AutoMail est une</span> solution moderne <span className="opacity-75">pour les</span> défis modernes.
          </h1>
          <div className="w-[437px] h-[444px] relative">
            <Image src="/charts.svg" alt="auto mail dashboard screen" fill loading="lazy" className="absolute" />
          </div>
        </section>
        <section className="w-screen h-[526px] flex flex-col items-center bg-[#ffa498]">
          <h2 className="flex justify-center text-[34px] mt-24">Outils de gestion des courriers ajustable et adapté aux besoin du client</h2>
          <p className="w-[1236px]">
            Grâce à une assistance permanente et à des capacités de personnalisation, il constitue une solution évolutive qui peut s'adapter aux besoins croissants de n'importe quelle organisation.
          </p>
          <div className="w-[1236px] flex items-start justify-between">
            <div className="flex flex-col items-center">
              <Icon icon="solar:headphones-square-sound-bold-duotone" width={85} height={85} color="#FFFFFF" className="mt-10 mb-4"/>
              <p className="w-[115px] text-sm text-[#343E61] text-center">
                Contactez notre <strong className="font-semibold">assistance</strong> pour discuter de vos particularités
              </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-16" width="47" height="38" viewBox="0 0 47 38" fill="none">
              <path d="M45.7678 20.7678C46.7441 19.7915 46.7441 18.2085 45.7678 17.2322L29.8579 1.32233C28.8816 0.34602 27.2986 0.34602 26.3223 1.32233C25.346 2.29864 25.346 3.88155 26.3223 4.85786L40.4645 19L26.3223 33.1421C25.346 34.1184 25.346 35.7014 26.3223 36.6777C27.2986 37.654 28.8816 37.654 29.8579 36.6777L45.7678 20.7678ZM0 21.5H44V16.5H0V21.5Z" fill="#343E61" fill-opacity="0.75"/>
            </svg>
            <div className="flex flex-col items-center">
              <Icon icon="solar:chat-square-like-bold-duotone" width={85} height={85} color="#FFFFFF" className="mt-10 mb-4"/>
              <p className="w-[115px] text-sm text-[#343E61] text-center">
                Etablissez les <strong className="font-semibold">particularités</strong> de votre système
              </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-16" width="47" height="38" viewBox="0 0 47 38" fill="none">
              <path d="M45.7678 20.7678C46.7441 19.7915 46.7441 18.2085 45.7678 17.2322L29.8579 1.32233C28.8816 0.34602 27.2986 0.34602 26.3223 1.32233C25.346 2.29864 25.346 3.88155 26.3223 4.85786L40.4645 19L26.3223 33.1421C25.346 34.1184 25.346 35.7014 26.3223 36.6777C27.2986 37.654 28.8816 37.654 29.8579 36.6777L45.7678 20.7678ZM0 21.5H44V16.5H0V21.5Z" fill="#343E61" fill-opacity="0.75"/>
            </svg>            
            <div className="flex flex-col items-center">
              <Icon icon="solar:notification-unread-lines-bold-duotone" width={85} height={85} color="#FFFFFF" className="mt-10 mb-4"/>
              <p className="w-[115px] text-sm text-[#343E61] text-center">
                Nous dressons un <strong className="font-semibold">cahier de charge</strong> relatif à vos besoins
              </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-16" width="47" height="38" viewBox="0 0 47 38" fill="none">
              <path d="M45.7678 20.7678C46.7441 19.7915 46.7441 18.2085 45.7678 17.2322L29.8579 1.32233C28.8816 0.34602 27.2986 0.34602 26.3223 1.32233C25.346 2.29864 25.346 3.88155 26.3223 4.85786L40.4645 19L26.3223 33.1421C25.346 34.1184 25.346 35.7014 26.3223 36.6777C27.2986 37.654 28.8816 37.654 29.8579 36.6777L45.7678 20.7678ZM0 21.5H44V16.5H0V21.5Z" fill="#343E61" fill-opacity="0.75"/>
            </svg>            
            <div className="flex flex-col items-center">
              <Icon icon="solar:monitor-bold-duotone" width={85} height={85} color="#FFFFFF" className="mt-10 mb-4"/>
              <p className="w-[115px] text-sm text-[#343E61] text-center">
                Nous adaptons vos besoins en une <strong className="font-semibold">version personnalisée</strong>
              </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-16" width="47" height="38" viewBox="0 0 47 38" fill="none">
              <path d="M45.7678 20.7678C46.7441 19.7915 46.7441 18.2085 45.7678 17.2322L29.8579 1.32233C28.8816 0.34602 27.2986 0.34602 26.3223 1.32233C25.346 2.29864 25.346 3.88155 26.3223 4.85786L40.4645 19L26.3223 33.1421C25.346 34.1184 25.346 35.7014 26.3223 36.6777C27.2986 37.654 28.8816 37.654 29.8579 36.6777L45.7678 20.7678ZM0 21.5H44V16.5H0V21.5Z" fill="#343E61" fill-opacity="0.75"/>
            </svg>            
            <div className="flex flex-col items-center">
              <Icon icon="solar:delivery-bold-duotone" width={85} height={85} color="#FFFFFF" className="mt-10 mb-4"/>
              <p className="w-[115px] text-sm text-[#343E61] text-center">
                Nous <strong className="font-semibold">livrons</strong> et <strong className="font-semibold">installons</strong> votre version personnalisée
              </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-16" width="47" height="38" viewBox="0 0 47 38" fill="none">
              <path d="M45.7678 20.7678C46.7441 19.7915 46.7441 18.2085 45.7678 17.2322L29.8579 1.32233C28.8816 0.34602 27.2986 0.34602 26.3223 1.32233C25.346 2.29864 25.346 3.88155 26.3223 4.85786L40.4645 19L26.3223 33.1421C25.346 34.1184 25.346 35.7014 26.3223 36.6777C27.2986 37.654 28.8816 37.654 29.8579 36.6777L45.7678 20.7678ZM0 21.5H44V16.5H0V21.5Z" fill="#343E61" fill-opacity="0.75"/>
            </svg>            
            <div className="flex flex-col items-center">
              <Icon icon="solar:presentation-graph-bold-duotone" width={85} height={85} color="#FFFFFF" className="mt-10 mb-4"/>
              <p className="w-[115px] text-sm text-[#343E61] text-center">
                Nous assurons la <strong className="font-semibold">formation</strong> des futurs utilisateurs et la <strong className="font-semibold">maintenance</strong> de l’application 
              </p>
            </div>                                                            
          </div>
        </section>
      </main>
    )
  }
  