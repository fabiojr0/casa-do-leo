/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function CardEvents({image, title, date, desc}) {
  return (
    <div className='flex w-screen px-10 gap-4 hover:scale-105 transition-all duration-300'>
        <img src={image} className='w-40 h-40'  />
        <div className='flex flex-col gap-5 justify-center'>
            <h1 className='font-semibold text-lg'>{title}</h1>
            <p className='text-zinc-500'>{date}</p>
            <p className='text-lg font-light'>{desc}</p>
        </div>
    </div>
  )
}
