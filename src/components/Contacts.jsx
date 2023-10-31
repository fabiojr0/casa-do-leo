import { Envelope, FacebookLogo, MapPin, Phone } from '@phosphor-icons/react'
// eslint-disable-next-line no-unused-vars
import React from 'react'

function Contacts() {
    return (
        <div className='flex flex-col items-center mt-4'>
            <h1 className='text-verde  font-semibold sm:text-2xl lg:text-3xl'>Contatos</h1>
            <div className='flex items-center justify-between p-4 w-full lg:p-8 '>
                <div className='flex flex-col text-verde justify-between gap-2 w-full text-xs sm:text-lg lg:text-2xl '>
                    <span className='flex items-center lg:gap-3'><FacebookLogo weight="fill" /> 9999-9999</span>
                    <span className='flex items-center lg:gap-3'><Phone weight="fill" /> Casa do Léo</span>
                    <span className='flex items-center lg:gap-3'><Envelope /> email.com@email.com</span>
                    <span className='flex items-center lg:gap-3'><MapPin/> Casa do Léo, número 100 </span>
                </div>
                
                <div className='flex flex-col items-center w-full'>
                    <img src='map.png' className='w-full'/>
                </div>
            </div>
        </div>
    )
}

export default Contacts
