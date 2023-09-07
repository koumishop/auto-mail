'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Icon } from "@iconify/react"
import { useForm, ValidationError } from '@formspree/react';
import Button from "./button";

export default function Footer() {
    const [state, handleSubmit] = useForm("mrgvjnog");

    return (
      <footer id="contact" className="flex flex-col items-center px-2 md:px-0 md:flex-row md:items-start md:justify-center space-y-2 pt-16  defaultBg">
        <div className="w-1/4 flex flex-col items-center">
            <Link href="/" className="w-[254px] h-[170px] flex justify-center md:relative">
                <Image src="/auto_mail_logo_alt.png" alt="logo" width={254} height={170} className="md:hidden"/>
                <Image src="/auto_mail_logo_alt.png" alt="logo" width={254} height={170} className="hidden md:flex md:absolute"/>
            </Link>
            <h2 className="w-[370px] text-[#343E61] font-semibold text-[34px] md:mt-16">Revolutionnez votre salle de courriers.</h2>   
        </div>

        <form onSubmit={handleSubmit} 
        id="meetForm" 
        className="flex flex-col items-center py-6 md:py-0">
            <h3 className="pb-2 font-normal text-[#455A64]">Remplissez ce formulaire pour prendre rendez-vous</h3>
            <div className="w-full space-y-4 flex flex-col items-center">
                <span className="w-[95%] border-b-2 border-[#455A64] bg-transparent py-2 flex space-x-3">
                    <Icon icon="solar:case-broken" width={24} height={24} color="#343E61"/>
                    <input type="text" id="identity" name="identity" required placeholder="nom complet ou raison sociale" className="w-[85%] bg-transparent placeholder-[#455A64] focus:outline-none" />
                    <ValidationError 
                        prefix="Identité" 
                        field="identity"
                        errors={state.errors}
                    />
                </span>
                <span className="w-[95%] border-b-2 border-[#455A64] bg-transparent py-2 flex space-x-3">
                    <Icon icon="solar:mention-square-broken" width={24} height={24} color="#343E61"/>
                    <input type="email" id="email" name="email"  required placeholder="exemple@mail.com" className="w-[85%] bg-transparent placeholder-[#455A64] focus:outline-none" />
                    <ValidationError 
                        prefix="E-mail" 
                        field="email"
                        errors={state.errors}
                    />
                </span>
                <span className="w-[95%] border-b-2 border-[#455A64] bg-transparent py-2 flex space-x-3">
                    <Icon icon="solar:calendar-broken" width={24} height={24} color="#343E61"/>
                    <input type="date" id="meet" name="meet"  required placeholder="jj/mm/aaaa" className="w-[85%] bg-transparent text-[#455A64] focus:outline-none" />
                    <ValidationError 
                        prefix="RDV" 
                        field="meet"
                        errors={state.errors}
                    />
                </span>
                <span className="w-[95%] border-b-2 border-[#455A64] bg-transparent py-2 flex space-x-3">
                    <Icon icon="solar:chat-square-call-broken" width={24} height={24} color="#343E61"/>
                    <input type="text" id="message" name="message"  required placeholder="sujet du rendez-vous" className="w-[85%] bg-transparent placeholder-[#455A64] focus:outline-none" />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                </span>
            </div>

            <Button borderColor="#343E61" textColor="#455A64" type="submit" disabled={state.submitting} >Envoyer</Button>
            <a href="https://temabeglobal.com" target="_blank" className="text-white md:text-black font-light text-sm opacity-75 pt-11 pb-2">Temabe Global 2023</a>
        </form>        

      </footer>
    )
  }
  