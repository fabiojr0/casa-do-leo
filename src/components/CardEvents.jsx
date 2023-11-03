/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function CardEvents({image, title, date, desc}) {
  return (
    <div className='flex w-screen px-6 gap-4'>
        <img src={image} className='w-40 h-40'  />
        <div className='flex flex-col gap-5 justify-center'>
            <h1 className='font-semibold text-lg'>{title}</h1>
            <p className='text-zinc-500'>{date}</p>
            <p>{desc}</p>
        </div>
    </div>
  )
}
