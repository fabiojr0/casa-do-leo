import React from 'react'

function Card({title, desc, icon}) {
    return (
        <div className='flex flex-col gap-2 items-center'>
            <div className='flex align-center justify-center px-6 py-2 rounded-full bg-green-600/20 text-zinc-600 sm:text-lg lg:px-20 lg:py-10 lg:text-4xl'>
                {icon}
            </div>            
            <h1 className='font-bold text-sm text-center text-black sm:text-lg lg:text-xl'>{title}</h1>
            <p className='font-normal text-xs text-center text-black sm:text-lg lg:text-xl'>{desc}</p>
            
        </div>
    )
}

export default Card
