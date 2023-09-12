'use client'
import { useEffect, useRef } from "react"
import Image from 'next/image'
import webLottie from 'lottie-web'
import Lottie from 'lottie-react'
import demand from "../../../public/demand.json"
import document from "../../../public/document.json"
import cli from "../../../public/cli.json"
import layers from "../../../public/layers.json"
import ressources from "../../../public/ressources.json"
import trolley from "../../../public/trolley.json"

export default function Solutions() {
  const group = useRef(null);
  const file = useRef(null);
  const command = useRef(null);
  const layer = useRef(null);
  const delivery = useRef(null);
  const ressource = useRef(null);

  useEffect(() => {
    webLottie.loadAnimation({
      name: "group",
      container: group.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: require("../../../public/demand.json")
    });

    webLottie.loadAnimation({
      name: "file",
      container: file.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: require("../../../public/document.json")
    });

    webLottie.loadAnimation({
      name: "command",
      container: command.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: require("../../../public/cli.json")
    });

    webLottie.loadAnimation({
      name: "layer",
      container: layer.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: require("../../../public/layers.json")
    });

    webLottie.loadAnimation({
      name: "delivery",
      container: delivery.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: require("../../../public/trolley.json")
    });

    webLottie.loadAnimation({
      name: "ressource",
      container: ressource.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: require("../../../public/ressources.json")
    });

    return () => {
      webLottie.destroy();
    };
  }, []);

    return (
      <main className="flex flex-col items-center justify-between pt-12 px-12 md:pt-24 md:px-24 overflow-hidden">
        <section className="w-screen md:flex md:justify-center md:space-x-4 pb-12 md:pb-28">
          <h1 className="md:w-[741px] text-4xl md:text-5xl leading-normal mx-5 md:mx-0 text-[#343E61]">
            <span className="opacity-75">AutoMail est une</span> solution moderne <span className="opacity-75">pour les</span> défis modernes.
          </h1>
          <div className="w-[337px] h-[344px] md:w-[437px] md:h-[444px] relative">
            <Image src="/charts.svg" alt="auto mail dashboard screen" fill className="absolute" />
          </div>
        </section>
        <section className="w-screen md:h-[526px] flex flex-col items-center bg-white">
          <h2 className="flex justify-center  text-3xl text-[#8b8b8b] md:text-[34px] mt-12 mx-5 md:mx-0 md:mt-24 md:mb-9">Outils de gestion des courriers ajustable et adapté aux besoin du client</h2>
          <p className="w-full md:w-[1236px] px-5 md:px-0 text-[#343E61]">
            Grâce à une assistance permanente et à des capacités de personnalisation, il constitue une solution évolutive qui peut s'adapter aux besoins croissants de n'importe quelle organisation.
          </p>
          <div className="md:w-[1236px] flex flex-col md:flex-row items-start justify-between">
            <div className="flex flex-col items-center">
              <div
                ref={group}
                onMouseEnter={() => webLottie.play("group")}
                onMouseLeave={() => webLottie.pause("group")}
                className="w-[85px] h-[85px] mt-10 mb-4"
              />
              <p className="w-[115px] text-sm text-[#343E61] text-center">
                Contactez notre <strong className="font-semibold">assistance</strong> pour discuter de vos particularités
              </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-8 md:mt-16 ml-8 md:ml-0 rotate-90 md:rotate-0" width="47" height="38" viewBox="0 0 47 38" fill="none">
              <path d="M45.7678 20.7678C46.7441 19.7915 46.7441 18.2085 45.7678 17.2322L29.8579 1.32233C28.8816 0.34602 27.2986 0.34602 26.3223 1.32233C25.346 2.29864 25.346 3.88155 26.3223 4.85786L40.4645 19L26.3223 33.1421C25.346 34.1184 25.346 35.7014 26.3223 36.6777C27.2986 37.654 28.8816 37.654 29.8579 36.6777L45.7678 20.7678ZM0 21.5H44V16.5H0V21.5Z" fill="#343E61" fill-opacity="0.75"/>
            </svg>
            <div className="flex flex-col items-center">
              <div
                ref={file}
                onMouseEnter={() => webLottie.play("file")}
                onMouseLeave={() => webLottie.pause("file")}
                className="w-[85px] h-[85px] mt-10 mb-4"
              />
              <p className="w-[115px] text-sm text-[#343E61] text-center">
                Etablissez les <strong className="font-semibold">particularités</strong> de votre système
              </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-8 md:mt-16 ml-8 md:ml-0 rotate-90 md:rotate-0" width="47" height="38" viewBox="0 0 47 38" fill="none">
              <path d="M45.7678 20.7678C46.7441 19.7915 46.7441 18.2085 45.7678 17.2322L29.8579 1.32233C28.8816 0.34602 27.2986 0.34602 26.3223 1.32233C25.346 2.29864 25.346 3.88155 26.3223 4.85786L40.4645 19L26.3223 33.1421C25.346 34.1184 25.346 35.7014 26.3223 36.6777C27.2986 37.654 28.8816 37.654 29.8579 36.6777L45.7678 20.7678ZM0 21.5H44V16.5H0V21.5Z" fill="#343E61" fill-opacity="0.75"/>
            </svg>            
            <div className="flex flex-col items-center">
              <div
                ref={layer}
                onMouseEnter={() => webLottie.play("layer")}
                onMouseLeave={() => webLottie.pause("layer")}
                className="w-[85px] h-[85px] mt-10 mb-4"
              />
              <p className="w-[115px] text-sm text-[#343E61] text-center">
                Nous dressons un <strong className="font-semibold">cahier de charge</strong> relatif à vos besoins
              </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-8 md:mt-16 ml-8 md:ml-0 rotate-90 md:rotate-0" width="47" height="38" viewBox="0 0 47 38" fill="none">
              <path d="M45.7678 20.7678C46.7441 19.7915 46.7441 18.2085 45.7678 17.2322L29.8579 1.32233C28.8816 0.34602 27.2986 0.34602 26.3223 1.32233C25.346 2.29864 25.346 3.88155 26.3223 4.85786L40.4645 19L26.3223 33.1421C25.346 34.1184 25.346 35.7014 26.3223 36.6777C27.2986 37.654 28.8816 37.654 29.8579 36.6777L45.7678 20.7678ZM0 21.5H44V16.5H0V21.5Z" fill="#343E61" fill-opacity="0.75"/>
            </svg>            
            <div className="flex flex-col items-center">
              <div
                ref={command}
                onMouseEnter={() => webLottie.play("command")}
                onMouseLeave={() => webLottie.pause("command")}
                className="w-[85px] h-[85px] mt-10 mb-4"
              />
              <p className="w-[115px] text-sm text-[#343E61] text-center">
                Nous adaptons vos besoins en une <strong className="font-semibold">version personnalisée</strong>
              </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-8 md:mt-16 ml-8 md:ml-0 rotate-90 md:rotate-0" width="47" height="38" viewBox="0 0 47 38" fill="none">
              <path d="M45.7678 20.7678C46.7441 19.7915 46.7441 18.2085 45.7678 17.2322L29.8579 1.32233C28.8816 0.34602 27.2986 0.34602 26.3223 1.32233C25.346 2.29864 25.346 3.88155 26.3223 4.85786L40.4645 19L26.3223 33.1421C25.346 34.1184 25.346 35.7014 26.3223 36.6777C27.2986 37.654 28.8816 37.654 29.8579 36.6777L45.7678 20.7678ZM0 21.5H44V16.5H0V21.5Z" fill="#343E61" fill-opacity="0.75"/>
            </svg>            
            <div className="flex flex-col items-center">
              <div
                ref={delivery}
                onMouseEnter={() => webLottie.play("delivery")}
                onMouseLeave={() => webLottie.pause("delivery")}
                className="w-[85px] h-[85px] mt-10 mb-4"
              />
              <p className="w-[115px] text-sm text-[#343E61] text-center">
                Nous <strong className="font-semibold">livrons</strong> et <strong className="font-semibold">installons</strong> votre version personnalisée
              </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-8 md:mt-16 ml-8 md:ml-0 rotate-90 md:rotate-0" width="47" height="38" viewBox="0 0 47 38" fill="none">
              <path d="M45.7678 20.7678C46.7441 19.7915 46.7441 18.2085 45.7678 17.2322L29.8579 1.32233C28.8816 0.34602 27.2986 0.34602 26.3223 1.32233C25.346 2.29864 25.346 3.88155 26.3223 4.85786L40.4645 19L26.3223 33.1421C25.346 34.1184 25.346 35.7014 26.3223 36.6777C27.2986 37.654 28.8816 37.654 29.8579 36.6777L45.7678 20.7678ZM0 21.5H44V16.5H0V21.5Z" fill="#343E61" fill-opacity="0.75"/>
            </svg>            
            <div className="flex flex-col items-center pb-5 md:pb-0">
              <div
                ref={ressource}
                onMouseEnter={() => webLottie.play("ressource")}
                onMouseLeave={() => webLottie.pause("ressource")}
                className="w-[85px] h-[85px] mt-10 mb-4"
              />
              <p className="w-[115px] text-sm text-[#343E61] text-center">
                Nous assurons la <strong className="font-semibold">formation</strong> des futurs utilisateurs et la <strong className="font-semibold">maintenance</strong> de l’application 
              </p>
            </div>                                                            
          </div>
        </section>
      </main>
    )
  }
  