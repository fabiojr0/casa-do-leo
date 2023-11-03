// eslint-disable-next-line no-unused-vars
import React from 'react'
import Button from './Button'

function FooterDonate() {
    return (
        <div className='relative w-screen flex flex-col items-center justify-center gap-2 pb-4 mt-4 lg:gap-4 lg:py-10'>
            <img src='mancha.png' className='absolute w-full h-[120%] -z-10 -top-3'/>
            
            <h4 className='text-verde text-sm font-semibold sm:text-lg lg:text-2xl final-mobile:text-base'>Sua doação pode fazer a diferença</h4>
            <p className='text-[0.7rem] text-center w-3/4 sm:text-base lg:text-xl final-mobile:text-xs'>Entre em contato conosco através do formulário e comece a ajudar famílias!</p>
            <Button>Seja um doador!</Button>
        </div>
    )
}

export default FooterDonate