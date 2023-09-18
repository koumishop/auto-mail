'use client'

import { useEffect, useRef } from "react"
import webLottie from 'lottie-web'
import Image from 'next/image'
import Link from 'next/link'
import Card from '@/components/card'
//import code from '../../public/gradient_code.json'

export default function Home() {
  const folder = useRef(null);
  const arrow = useRef(null);
  const document = useRef(null);
  const chart = useRef(null);
  const signature = useRef(null);
  const security = useRef(null);
  const code = useRef(null);
  const efficiency = useRef(null);
  const precision = useRef(null);
  const tracking = useRef(null);
  const shield = useRef(null);

  useEffect(() => {
    webLottie.loadAnimation({
      name: "document",
      container: document.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: require('../../public/alt_document.json')
    });

    webLottie.loadAnimation({
      name: "folder",
      container: folder.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: require('../../public/alt_folder.json')
    });

    webLottie.loadAnimation({
      name: "arrow",
      container: arrow.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: require('../../public/alt_arrow.json')
    });

    webLottie.loadAnimation({
      name: "chart",
      container: chart.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: require('../../public/alt_chart.json')
    });

    webLottie.loadAnimation({
      name: "signature",
      container: signature.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: require('../../public/alt_signature.json')
    });

    webLottie.loadAnimation({
      name: "security",
      container: security.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: require('../../public/alt_security.json')
    });

    webLottie.loadAnimation({
      name: "efficiency",
      container: efficiency.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: require("../../public/gradient_chart.json")
    });

    webLottie.loadAnimation({
      name: "precision",
      container: precision.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: require("../../public/gradient_target.json")
    });

    webLottie.loadAnimation({
      name: "tracking",
      container: tracking.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: require("../../public/gradient_location.json")
    });

    webLottie.loadAnimation({
      name: "shield",
      container: shield.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: require("../../public/gradient_security.json")
    });

    webLottie.loadAnimation({
      name: "code",
      container: code.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/gradient_code.json")
    });

    return () => {
      webLottie.destroy();
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      <section className="w-screen md:h-[560px] md:flex md:mt-[40px] md:mb-[60px] md:pt-24">
        <div className="pl-5 pb-5 md:pl-[120px] md:pb-0">
          <h1 className="md:w-[619px] mt-8 md:mt-0 md:text-5xl text-4xl text-[#343E61]"><span className="opacity-75">Révolutionnez les opérations de</span> traitement de courrier <span className="opacity-75">grâce à l'</span>IA</h1>
          <div className="w-full flex justify-center">
            <Link href='#contact' className=" flex justify-center items-center w-[191px] h-[49px] border-[3px] border-[#343E61] text-[#343E61] bg-primary bg-opacity-40 mt-[30px] font-semibold rounded-2xl hover:bg-opacity-80 hover:bg-[#343E61] hover:text-[#fff]">Contactez-nous</Link>
          </div>        
        </div>
        <div className="w-[599px] h-[342px] md:w-[699px] md:h-[442px] relative">
          <Image src="/dashboard_alt.png" alt="auto mail dashboard screen" fill className="absolute" />
        </div>
      </section>
      <section className="w-screen bg-[#ffffff]">
        <h2 className="flex justify-center text-3xl text-[#8b8b8b] text-center md:text-[34px] my-10 md:my-20">Outils de gestion des courriers en temps réel</h2>
        <div className="w-full md:flex">
          <div className="md:w-[50%]">
            <div className="w-[662px] h-[340px] md:w-[730px] md:h-[440px]  relative">
              <Image src="/mailbox.png" alt="auto mail dashboard screen" fill className="absolute" />
            </div>
            <div className="w-[730px] h-12 pl-[120px] gradientBg">
            </div>
          </div>
          <div className="md:w-[50%] flex flex-col justify-start">
            <div className="md:w-full flex flex-wrap justify-center items-center md:justify-end py-[5px] md:py-0 md:px-[5px] md:pb-5">
              <Card title="Numérisation automatisée des lettres">
                <div
                  ref={document}
                  onMouseEnter={() => webLottie.play("document")}
                  onMouseLeave={() => webLottie.pause("document")}
                  className="mt-5 mb-2 w-[85px] h-[85px]"
                />
              </Card>
              <Card title="Analyse et catégorisation assistées par l'IA">
                <div
                  ref={folder}
                  onMouseEnter={() => webLottie.play("folder")}
                  onMouseLeave={() => webLottie.pause("folder")}
                  className="mt-5 mb-2 w-[85px] h-[85px]"
                />
              </Card>
              <Card title="Génération automatisée de réponses">
                <div
                  ref={arrow}
                  onMouseEnter={() => webLottie.play("arrow")}
                  onMouseLeave={() => webLottie.pause("arrow")}
                  className="mt-5 mb-2 w-[85px] h-[85px]"
                />
              </Card>
              <Card title="Analyse des données et rapports">
                <div
                  ref={chart}
                  onMouseEnter={() => webLottie.play("chart")}
                  onMouseLeave={() => webLottie.pause("chart")}
                  className="mt-5 mb-2 w-[85px] h-[85px]"
                />
              </Card>
              <Card title="Ajout et envoi de signatures électroniques">
                <div
                  ref={signature}
                  onMouseEnter={() => webLottie.play("signature")}
                  onMouseLeave={() => webLottie.pause("signature")}
                  className="mt-5 mb-2 w-[85px] h-[85px]"
                />
              </Card>
              <Card title="Conformité et sécurité">
                <div
                  ref={security}
                  onMouseEnter={() => webLottie.play("security")}
                  onMouseLeave={() => webLottie.pause("security")}
                  className="mt-5 mb-2 w-[85px] h-[85px]"
                />
              </Card>                            
            </div>  
            <div className="w-full flex justify-center pb-10">
              <Link href='/services' className=" flex justify-center items-center w-[324px] h-[49px] border-[3px] border-[#ffa498] text-[#ffa498] bg-primary bg-opacity-40 mb-[30px] font-semibold rounded-2xl hover:bg-opacity-80 hover:bg-[#ffa498] hover:text-[#fff]">Voir toutes les fonctionnalités</Link>
            </div>         
          </div>
        </div>
      </section>
      <section className="w-screen py-10 md:py-20 md:flex md:flex-col items-start bg-white">
        <h2 className="md:px-20 md:pb-5 md:flex md:justify-center text-[#8b8b8b] text-3xl text-center md:text-[34px]">Travailler plus intélligemment</h2>
        <div className="w-screen px-6 flex flex-row flex-wrap items-start md:flex-row justify-center">
          <div className="w-1/2 md:w-1/4 flex flex-col items-start ">
            <div className="flex flex-col items-center mt-5 mb-2">              
              <div
                ref={efficiency}
                onMouseEnter={() => webLottie.play("efficiency")}
                onMouseLeave={() => webLottie.pause("efficiency")}
                className="w-[128px] h-[128px]"
              />
              <h3 className="text-[#343E61] text-3xl font-normal">Efficacité</h3>
            </div>
            <p className="w-[95%] text-[#767676] text-lg">Automatisation des opérations de tâches manuelles dans la salle des courriers.</p>
          </div>
          <div className="w-1/2 md:w-1/4 flex flex-col items-start ">
            <div className="flex flex-col items-center mt-5 mb-2">
              <div
                  ref={precision}
                  onMouseEnter={() => webLottie.play("precision")}
                  onMouseLeave={() => webLottie.pause("precision")}
                  className="w-[128px] h-[128px]"
                />
              <h3 className=" text-[#343E61] text-3xl font-normal">Précision</h3>
            </div>
            <p className="w-[97%] text-[#767676] text-lg">Génération automatisée de vos reponses grâce à l’IA.</p>
          </div>
          <div className="w-1/2 md:w-1/4 flex flex-col items-start ">
            <div className="flex flex-col items-center mt-5 mb-2">
              <div
                  ref={tracking}
                  onMouseEnter={() => webLottie.play("tracking")}
                  onMouseLeave={() => webLottie.pause("tracking")}
                  className="w-[128px] h-[128px]"
                />
                <h3 className=" text-[#343E61] text-3xl font-normal">Traçabilité</h3>
            </div>
            <p className="w-[97%] text-[#767676] text-lg">Chaques éléments de vos courriers sont comptabilisés.</p>
          </div>
          <div className="w-1/2 md:w-1/4 flex flex-col items-start ">
            <div className="flex flex-col items-center mt-5 mb-2">
              <div
                  ref={shield}
                  onMouseEnter={() => webLottie.play("shield")}
                  onMouseLeave={() => webLottie.pause("shield")}
                  className="w-[128px] h-[128px]"
                />
                <h3 className=" text-[#343E61] text-3xl font-normal">Sécurité</h3>
            </div>
            <p className="w-[97%] text-[#767676] text-lg">Garantie de confidentialité et d’intégrité des données sensibles.</p>
          </div>
        </div>
        <div className="w-screen px-6 mt-14 flex justify-center">
          <div className="border border-[#4F4F4F] w-[1305px] h-[650px] md:h-[597px] rounded-[40px] mb-10 flex flex-col-reverse items-center md:flex-row md:items-center">
            <div className="w-full md:w-[70%]">
              <h2 className="px-14 pb-5 flex justify-start  text-[#343E61] text-3xl text-center font-medium md:text-[34px]">
                Un environnement de travail allégé
              </h2>
              <p className="text-[#767676] text-lg pl-14 pb-5 ">
                Grâce à l’intégration du code QR, Automail vous permet d’acceder aux données de tous vos courriers peu importe où vous vous trouvez.
              </p>
              <div className="w-full flex justify-center pb-10 md:justify-start md:px-20">
                <Link href='/solutions' className=" flex justify-center items-center w-[191px] h-[49px] border-[3px] border-[#343E61] text-[#343E61] bg-primary bg-opacity-40 mt-[30px] font-semibold rounded-2xl hover:bg-opacity-80 hover:bg-[#343E61] hover:text-white">En savoir plus</Link>
              </div>
            </div>
            <div
              ref={code}
              onMouseEnter={() => webLottie.pause("code")}
              onMouseLeave={() => webLottie.play("code")}
              className="w-[70%] md:w-[30%]"
            />
            {/* <div className="w-[70%] md:w-[30%]">
              <Lottie animationData={code} loop={true} />
            </div> */}
          </div>
        </div>
      </section>
    </main>
  )
}
