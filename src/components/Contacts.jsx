import { Envelope, FacebookLogo, Phone } from '@phosphor-icons/react'
import React from 'react'

function Contacts() {
    return (
        <div className='flex flex-col items-center mt-4'>
            <h1 className='text-verde  font-semibold sm:text-2xl'>Contatos</h1>
            <div className='flex items-center justify-between p-4 w-full lg:p-8'>
                <div className='flex flex-col text-verde justify-between gap-2 w-full text-xs sm:text-lg lg:text-2xl'>
                    <span className='flex items-center '><FacebookLogo weight="fill" /> 9999-9999</span>
                    <span className='flex items-center '><Phone weight="fill" /> Casa do Léo</span>
                    <span className='flex items-center '><Envelope weight="thin" /> email.com@email.com</span>
                </div>
                
                <div className='flex flex-col items-center w-full'>
                    <img src='map.png' className='w-full'/>
                    <h2 className='text-xs text-verde sm:text-lg lg:text-2xl'>endereço do local</h2>
                </div>
            </div>
        </div>
    )
}

export default Contacts
