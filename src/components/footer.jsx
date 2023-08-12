'use client'

import { Icon } from "@iconify/react"
import { useForm, ValidationError } from '@formspree/react';
import Button from "./button";

export default function Footer() {
    const [state, handleSubmit] = useForm("mrgvjnog");

    return (
      <footer id="contact" className="flex flex-col items-center space-y-2 pt-8 bg-[#343E61]">
        <h2 className="text-[#E4A951] text-[34px]">Travaillez <span className="opacity-75 font-semibold">avec</span> nous</h2>
        <form onSubmit={handleSubmit} 
        id="meetForm" 
        className="flex flex-col items-center py-6 md:py-0">
            <h3 className="pb-2 font-normal">Remplissez ce formulaire pour prendre rendez-vous</h3>
            <div className="w-full space-y-4 flex flex-col items-center">
                <span className="w-[95%] border-b-2 bg-transparent py-2 flex space-x-3">
                    <Icon icon="solar:case-broken" width={24} height={24} color="#E4A951"/>
                    <input type="text" id="identity" name="identity" required placeholder="nom complet ou raison sociale" className="w-[85%] bg-transparent placeholder-white focus:outline-none" />
                    <ValidationError 
                        prefix="Identité" 
                        field="identity"
                        errors={state.errors}
                    />
                </span>
                <span className="w-[95%] border-b-2 bg-transparent py-2 flex space-x-3">
                    <Icon icon="solar:mention-square-broken" width={24} height={24} color="#E4A951"/>
                    <input type="email" id="email" name="email"  required placeholder="exemple@mail.com" className="w-[85%] bg-transparent placeholder-white focus:outline-none" />
                    <ValidationError 
                        prefix="E-mail" 
                        field="email"
                        errors={state.errors}
                    />
                </span>
                <span className="w-[95%] border-b-2 bg-transparent py-2 flex space-x-3">
                    <Icon icon="solar:calendar-broken" width={24} height={24} color="#E4A951"/>
                    <input type="date" id="meet" name="meet"  required placeholder="jj/mm/aaaa" className="w-[85%] bg-transparent placeholder-white focus:outline-none" />
                    <ValidationError 
                        prefix="RDV" 
                        field="meet"
                        errors={state.errors}
                    />
                </span>
                <span className="w-[95%] border-b-2 bg-transparent py-2 flex space-x-3">
                    <Icon icon="solar:chat-square-call-broken" width={24} height={24} color="#E4A951"/>
                    <input type="text" id="message" name="message"  required placeholder="sujet du rendez-vous" className="w-[85%] bg-transparent placeholder-white focus:outline-none" />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                </span>
            </div>
            {/* <button type="submit" disabled={state.submitting} className="w-[191px] h-[49px] border-[3px] border-[#E4A951] text-white bg-primary bg-opacity-40 hover:bg-opacity-0 mt-[30px] font-semibold rounded-2xl hover:bg-[#E4A951]">Envoyer</button> */}
            <Button borderColor="#E4A951" type="submit" disabled={state.submitting} >Envoyer</Button>

        </form>        
        <a href="https://temabeglobal.com" target="_blank" className="text-white font-light text-sm opacity-75 pt-11 pb-2">Temabe Global 2023</a>
      </footer>
    )
  }
  