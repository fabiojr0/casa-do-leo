import { Envelope, FacebookLogo, MapPin, Phone } from '@phosphor-icons/react'
// eslint-disable-next-line no-unused-vars
import React from 'react'

function Contacts() {
    return (
        <div className='flex flex-col items-center mt-4'>
            <h2 className='text-base font-semibold  text-verde final-mobile:text-lg sm:text-2xl lg:text-3xl'>Contato</h2>
            <div className='flex flex-col gap-4 items-center justify-between p-4 w-full lg:p-8 '>
                <address className='flex flex-col text-verde justify-between gap-2 w-full text-xs final-mobile:flex-row final-mobile:mt-4 sm:text-lg lg:text-2xl '>
                    <div className='flex flex-col gap-2 text-[0.8rem] final-mobile:text-sm'>
                        <span className='flex items-center gap-1 lg:gap-3'><div className='text-xl final-mobile:text-2xl'><FacebookLogo weight="fill"/></div>Casa do Léo </span>
                        <span className='flex items-center gap-1 lg:gap-3'><div className='text-xl final-mobile:text-2xl'><Phone weight="fill"/></div> (99) 9999-9999 </span>
                    </div>
                    <div className='flex flex-col  gap-2 text-[0.8rem] final-mobile:text-sm'>
                        <span className='flex items-center gap-1 lg:gap-3'><div className='text-xl final-mobile:text-2xl'><Envelope fill='#219653' /></div> email.com@email.com</span>
                        <span className='flex items-center gap-1 lg:gap-3'><div className='text-xl final-mobile:text-2xl'><MapPin /></div>Casa do Léo, número 100 </span>
                    </div>
                </address>


                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2185.416337721727!2d-43.10609882514196!3d-22.89796569500216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9983f1f9632129%3A0xb49d990fde8e6e4f!2sUnilasalle-RJ!5e0!3m2!1spt-BR!2sbr!4v1698884096550!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="10%"
                    style={{
                        border: "1px solid #219653",
                        borderRadius: '7px'
                    }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>

            </div>
        </div>
    )
}

export default Contacts